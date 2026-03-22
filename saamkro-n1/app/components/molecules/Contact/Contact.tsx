"use client";

import {useEffect, useState} from "react";
import { Facebook, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../atoms/Card/Card";
import { Input } from "../../atoms/Input/Input";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Button } from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { handleContactForm } from "@/app/actions/contact";

function Social({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
    return (
        <a href={href} aria-label={label} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300 hover:bg-white/10">
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}

function Contact() {
    const { t } = useLanguage();

    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(formData: FormData) {
        setIsPending(true);
        setStatus("idle");

        const result = await handleContactForm(formData);

        setIsPending(false);
        if (result.success) {
            setStatus("success");
            const form = document.getElementById("contact-form") as HTMLFormElement;
            form?.reset();
        } else {
            setStatus("error");
        }
    }

    useEffect(() => {
        if (status !== "idle") {
            const timer = setTimeout(() => {
                setStatus("idle");
            }, 8000);

            return () => clearTimeout(timer); 
        }
    }, [status]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="contact"
            className="mx-auto pr-8 pl-8 px-4 py-16"
        >
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">{t.contact.title}</h2>
                    <p className="mt-2 max-w-prose text-neutral-300">
                        {t.contact.description}
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-neutral-300">
                        <p className="flex items-center gap-2"><Mail className="h-4 w-4" />Business@saamkro1.com</p>
                        <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+995577744114" className="hover:text-white transition-colors">+995 577 74 41 14</a></p>
                        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /><a href="https://www.google.com/maps/place/Saamkro%231/@41.7793519,44.7913651,17z/data=!4m15!1m8!3m7!1s0x40446d00106dd4c9:0xfd6da4179377a69c!2sSaamkro%231!8m2!3d41.7795441!4d44.7909158!10e5!16s%2Fg%2F11wwp0ycf9!3m5!1s0x40446d00106dd4c9:0xfd6da4179377a69c!8m2!3d41.7795441!4d44.7909158!16s%2Fg%2F11wwp0ycf9?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.contact.address}</a></p>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Social icon={<Facebook className="h-4 w-4" />} label="Facebook" href="https://www.facebook.com/saamkron1/?locale=ka_GE" />
                    </div>
                </div>

                <Card className="rounded-2xl border-white/10 bg-neutral-900">
                    <CardHeader>
                        <CardTitle className='text-white'>{t.contact.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id="contact-form" action={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm text-white">{t.contact.labelName}</label>
                                <Input
                                    name="name"
                                    required
                                    placeholder={t.contact.placeholderName}
                                    className="rounded-xl p-4 border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
                                />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm text-white">{t.contact.labelEmail}</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@email.com"
                                        className="rounded-xl p-4 border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm text-white">{t.contact.labelPhone}</label>
                                    <Input
                                        name="number"
                                        required
                                        placeholder="+995 ..."
                                        className="rounded-xl border-white/10 p-4 bg-white/5 text-white placeholder:text-neutral-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm text-white">{t.contact.labelDetails}</label>
                                <Textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder={t.contact.placeholderDetails}
                                    className="rounded-xl border-white/10 pl-4 bg-white/5 text-white placeholder:text-neutral-400"
                                />
                            </div>

                            <Button
                                suppressHydrationWarning
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
                                    "Send"
                                )}
                            </Button>

                            {status === "success" && (
                                <p className="text-green-400 text-sm text-center mt-2">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-sm text-center mt-2">Failed to send. Please try again.</p>
                            )}

                        </form>
                    </CardContent>
                </Card>
            </div>
        </motion.section>
    );
}

export default Contact;