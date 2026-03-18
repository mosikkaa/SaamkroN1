import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "../../atoms/Card/Card";
import {Input} from "../../atoms/Input/Input";
import {Textarea} from "../../atoms/Textarea/Textarea";
import {Button} from "../../atoms/Button/Button";
import { motion } from "framer-motion";


function Social({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
    return (
        <a href={href} aria-label={label} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300 hover:bg-white/10">
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}


function Contact() {
    return (
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} id="contact" className="mx-auto pr-8 pl-8 px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">Let’s build something</h2>
                    <p className="mt-2 max-w-prose text-neutral-300">
                        Send a message with a short brief (what you need, size, location, deadline). We’ll get back in one business day.
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-neutral-300">
                        <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> Business@saamkro1.com</p>
                        <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +995 ••• •• •• ••</p>
                        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Tbilisi, Georgia</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Social icon={<Instagram className="h-4 w-4" />} label="Instagram" href="#" />
                        <Social icon={<Facebook className="h-4 w-4" />} label="Facebook" href="#" />
                        <Social icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" href="#" />
                    </div>
                </div>
                <Card className="rounded-2xl border-white/10 bg-neutral-900">
                    <CardHeader>
                        <CardTitle className='text-white'>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm text-white">Your name</label>
                                <Input placeholder="Full Name" className="rounded-xl p-4  border-white/10 bg-white/5 text-white placeholder:text-neutral-400" />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm text-white">Email</label>
                                    <Input type="email" placeholder="you@email.com" className="rounded-xl p-4  border-white/10 bg-white/5 text-white placeholder:text-neutral-400" />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm text-white">Phone</label>
                                    <Input placeholder="+995 ..." className="rounded-xl border-white/10 p-4  bg-white/5 text-white placeholder:text-neutral-400" />
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm text-white">Project details</label>
                                <Textarea rows={5} placeholder="Signage for cafe in Vake, ~3m width, matte black letters, install by Sept 25..." className="rounded-xl border-white/10 pl-4 bg-white/5 text-white placeholder:text-neutral-400" />
                            </div>
                            <Button type="button" className="w-full rounded-2xl bg-white/10 cursor-pointer">Send</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </motion.section>
    );
}

export default Contact;