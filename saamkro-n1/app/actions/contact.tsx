"use server";

import { Resend } from 'resend';
import twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function handleContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("number") as string;
    const message = formData.get("message") as string;

    try {
        // Sending into the email
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'meskhiluk@gmail.com', // Your email
            subject: `New Message from ${name}`,
            html: `
        <h3>New Inquiry from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
        });

        // 2. twilio - > to whatsapp
        await twilioClient.messages.create({
            from: 'whatsapp:+14155238886',
            to: `whatsapp:${process.env.MY_WHATSAPP_NUMBER}`,
            body: `🚀 New Inquiry!\nName: ${name}\nPhone:${phone}\nEmail:${email}\nMessage: ${message}`,
        });

        return { success: true };
    } catch (error) {
        console.error("Error:", error);
        return { success: false };
    }
}