import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, preferredTime } = data;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: '1lunextgenprivatelimited@gmail.com',
      subject: `Callback Request: ${name} — ${phone}`,
      html: `
        <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #F9FAFB; border-radius: 12px;">
          <div style="background: #F5A234; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 700;">📞 Callback Request — 1 Lu Next Gen Technologies</h2>
          </div>

          <div style="background: #ffffff; border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280; width: 140px;">Name</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 15px; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280;">Phone</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 15px; font-weight: 600; color: #111827;"><a href="tel:${phone}" style="color: #2B7FE8; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280;">Preferred Time</td>
                <td style="padding: 12px 16px; font-size: 15px; color: #111827;">${preferredTime || 'Not specified'}</td>
              </tr>
            </table>
          </div>

          <p style="font-size: 12px; color: #9CA3AF; text-align: center; margin: 0;">
            Sent from 1lutechs.com callback form
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Callback request email error:", error);
    return NextResponse.json({ error: "Failed to send callback request" }, { status: 500 });
  }
}
