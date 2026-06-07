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
    
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'business@saamkro1.com',
        replyTo: email,
        subject: `New Message from ${name}`,
        html: `
            <h3>New Inquiry from Portfolio</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    });

    if (error) {
        console.error("Resend error:", error);
        return { success: false };
    }
    console.log("Email sent:", data);


    try {
        await twilioClient.messages.create({
            from: 'whatsapp:+14155238886',
            to: `whatsapp:${process.env.MY_WHATSAPP_NUMBER}`,
            body: `🚀 New Inquiry!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
        });
    } catch (twilioError) {
        console.error("Twilio error (ignored):", twilioError);
    }

    return { success: true };
}