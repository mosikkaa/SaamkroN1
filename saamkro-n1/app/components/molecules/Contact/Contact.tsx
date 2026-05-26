"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Facebook, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../atoms/Card/Card";
import { Input } from "../../atoms/Input/Input";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Button } from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { handleContactForm } from "@/app/actions/contact";

type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs text-red-400"
        >
            {message}
        </motion.p>
    );
}

function Social({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300 hover:bg-white/10 transition-colors"
        >
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}

function Contact() {
    const { t } = useLanguage();
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({ mode: "onTouched" });

    useEffect(() => {
        if (status !== "idle") {
            const timer = setTimeout(() => setStatus("idle"), 8000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    async function onSubmit(data: ContactFormData) {
        setIsPending(true);
        setStatus("idle");

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("number", data.phone);
        formData.append("message", data.message);

        const result = await handleContactForm(formData);

        setIsPending(false);
        if (result.success) {
            setStatus("success");
            reset();
        } else {
            setStatus("error");
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            id="contact"
            className="mx-auto pr-8 pl-8 px-4 py-16"
        >
            <div className="grid gap-8 md:grid-cols-2">

                <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">{t.contact.title}</h2>
                    <p className="mt-2 max-w-prose text-neutral-300">{t.contact.description}</p>
                    <div className="mt-6 space-y-3 text-sm text-neutral-300">
                        <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Business@saamkro1.com
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <a href="tel:+995577535012" className="hover:text-white transition-colors">
                                +995 577 53 50 12
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <a
                                href="https://www.google.com/maps/place/Saamkro%231/@41.7793519,44.7913651,17z/data=!4m15!1m8!3m7!1s0x40446d00106dd4c9:0xfd6da4179377a69c!2sSaamkro%231!8m2!3d41.7795441!4d44.7909158!10e5!16s%2Fg%2F11wwp0ycf9!3m5!1s0x40446d00106dd4c9:0xfd6da4179377a69c!8m2!3d41.7795441!4d44.7909158!16s%2Fg%2F11wwp0ycf9?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                {t.contact.address}
                            </a>
                        </p>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Social
                            icon={<Facebook className="h-4 w-4" />}
                            label="Facebook"
                            href="https://www.facebook.com/saamkron1/?locale=ka_GE"
                        />
                    </div>
                </div>

                <Card className="rounded-2xl border-white/10 bg-neutral-900">
                    <CardHeader>
                        <CardTitle className="text-white">{t.contact.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">

                            <div>
                                <label className="mb-2 block text-sm text-white">{t.contact.labelName}</label>
                                <Input
                                    placeholder={t.contact.placeholderName}
                                    aria-invalid={!!errors.name}
                                    className="rounded-xl p-4 border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: { value: 2, message: "At least 2 characters" },
                                    })}
                                />
                                <FieldError message={errors.name?.message} />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm text-white">{t.contact.labelEmail}</label>
                                    <Input
                                        type="email"
                                        placeholder="you@email.com"
                                        aria-invalid={!!errors.email}
                                        className="rounded-xl p-4 border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email",
                                            },
                                        })}
                                    />
                                    <FieldError message={errors.email?.message} />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm text-white">{t.contact.labelPhone}</label>
                                    <Input
                                        placeholder="+995 ..."
                                        aria-invalid={!!errors.phone}
                                        className="rounded-xl border-white/10 p-4 bg-white/5 text-white placeholder:text-neutral-400"
                                        {...register("phone", {
                                            required: "Phone is required",
                                        })}
                                    />
                                    <FieldError message={errors.phone?.message} />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-white">{t.contact.labelDetails}</label>
                                <Textarea
                                    rows={5}
                                    placeholder={t.contact.placeholderDetails}
                                    aria-invalid={!!errors.message}
                                    className="rounded-xl border-white/10 pl-4 bg-white/5 text-white placeholder:text-neutral-400"
                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: { value: 10, message: "At least 10 characters" },
                                    })}
                                />
                                <FieldError message={errors.message?.message} />
                            </div>

                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full rounded-2xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-all flex items-center justify-center gap-2 py-6"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    t.contact.sendBtn
                                )}
                            </Button>

                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-400 text-sm text-center mt-2"
                                >
                                    Message sent! We&apos;ll reply within one business day.
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm text-center mt-2"
                                >
                                    Failed to send. Please try again or email us directly.
                                </motion.p>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </motion.section>
    );
}

export default Contact;
