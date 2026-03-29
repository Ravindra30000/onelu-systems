import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const serviceLabels: Record<string, string> = {
  web: "Web Development",
  app: "App Development",
  dsc: "Digital Signature Certificate (DSC)",
  workshop: "Workshops & Training",
  logo: "Logo & Brand Design",
  general: "General Inquiry",
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, company, inquiryType, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const serviceLabel = serviceLabels[inquiryType as string] || inquiryType || "Not specified";

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: '1lunextgenprivatelimited@gmail.com',
      replyTo: email as string,
      subject: `New Enquiry: ${company ? company + ' — ' : ''}${name} | ${serviceLabel}`,
      html: `
        <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F9FAFB; border-radius: 12px;">
          <div style="background: #2B7FE8; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Enquiry — 1 Lu Next Gen Technologies</h2>
          </div>

          <div style="background: #ffffff; border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280; width: 140px;">Name</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 15px; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280;">Email</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 15px;"><a href="mailto:${email}" style="color: #2B7FE8; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280;">Phone</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 15px; color: #111827;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280;">Company</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 15px; color: #111827;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #F9FAFB; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280;">Service</td>
                <td style="padding: 12px 16px; font-size: 15px; font-weight: 600; color: #2B7FE8;">${serviceLabel}</td>
              </tr>
            </table>
          </div>

          <div style="background: #ffffff; border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280; margin: 0 0 8px 0;">Message</p>
            <p style="font-size: 15px; color: #111827; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #9CA3AF; text-align: center; margin: 0;">
            Sent from 1lutechs.com contact form
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
