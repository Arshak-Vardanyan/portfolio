import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key and environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    try {
        // Parse the incoming request as JSON
        const body = await req.json();
        const { firstName, lastName, company, email, phoneNumber, message } = body;

        // Send the email using Resend
        const data = await resend.emails.send({
            from: 'Contact <onboarding@resend.dev>',
            to: [fromEmail],
            subject: `Message from ${email}`,
            html: (`
                <div>
                    <h1>firstName: ${firstName}</h1>
                    <h1>lastName: ${lastName}</h1>
                    <h1>company: ${company}</h1>
                    <h1>email: ${email}</h1>
                    <h1>phoneNumber: ${phoneNumber}</h1>
                    <p>message: ${message}</p>
                </div>
            `),
        });

        // Return the successful response as JSON
        return NextResponse.json(data);
    } catch (error) {
        // Return error response in case of failure
        return NextResponse.json({ error: error.message });
    }
}
