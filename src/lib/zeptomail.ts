// src/lib/zeptomail.ts
// @ts-ignore
import { SendMailClient } from "zeptomail";

const url = "api.zeptomail.com/";
const token = process.env.ZEPTOMAIL_TOKEN || "";

const client = new SendMailClient({ url, token });

export async function sendWelcomeEmail(name: string, email: string) {
  try {
    const result = await client.sendMail({
      from: {
        address: "noreply@quadroxtech.com", // Ensure this matches your Zeptomail verified sender
        name: "Abu Hayyan School",
      },
      to: [
        {
          email_address: {
            address: email,
            name: name,
          },
        },
      ],
      subject: "Registration Confirmed: Halal Digital Hustles",
      
      // 1. Plain Text Version (Crucial for Deliverability & Accessibility)
      textbody: `
Registration Confirmed.

Hello ${name},

You have successfully secured your seat for the Halal Digital Hustles From Home masterclass. We are excited to help you start your journey.

IMPORTANT ACTION REQUIRED:
The live class link will NOT be emailed. It will be posted exclusively in the private WhatsApp group.

Join the WhatsApp Group here:
https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM

---
© 2026 Abu Hayyan School of Skills & Deen
You are receiving this email because you registered for our masterclass.
To unsubscribe from future updates, please reply to this email with "Unsubscribe".
      `,

      // 2. HTML Version
      htmlbody: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Registration Confirmed</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #001232; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          
          <span style="display:none;font-size:0px;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
            Your seat is secured. Important: Join the WhatsApp group to get the class link.
          </span>

          <div style="max-width: 600px; margin: 40px auto; background-color: #001840; overflow: hidden; border: 1px solid #1e293b;">
            
            <div style="padding: 30px; text-align: center; border-bottom: 1px solid #1e293b;">
              <span style="color: #FFB902; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: bold;">Abu Hayyan School</span>
            </div>

            <div style="padding: 40px 30px;">
              <h1 style="color: #ffffff; font-size: 24px; font-weight: 300; margin-top: 0; margin-bottom: 25px;">
                Registration Confirmed.
              </h1>
              
              <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Hello ${name},
              </p>
              
              <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                You have successfully secured your seat for the <strong>Halal Digital Hustles From Home</strong> masterclass. We are excited to help you start your journey.
              </p>

              <div style="background-color: #001232; border-left: 3px solid #FFB902; padding: 20px; margin-bottom: 35px;">
                <p style="margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.5;">
                  <strong>Action Required:</strong> The live class link will NOT be emailed. It will be posted exclusively in the private WhatsApp group.
                </p>
              </div>

              <div style="text-align: center; margin-bottom: 40px;">
                <a href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="display: inline-block; background-color: #FFB902; color: #001232; padding: 16px 32px; font-size: 14px; font-weight: bold; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; border-radius: 0px;">
                  Join WhatsApp Group
                </a>
              </div>

              <p style="color: #64748b; font-size: 13px; margin-top: 30px; border-top: 1px solid #1e293b; padding-top: 20px; line-height: 1.5;">
                You are receiving this because you registered at Abu Hayyan School. You will receive occasional updates regarding this class.
              </p>
            </div>

            <div style="background-color: #000f2a; padding: 20px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="color: #475569; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">
                © 2026 Abu Hayyan School of Skills & Deen
              </p>
              <p style="margin: 0;">
                <a href="#" style="color: #475569; font-size: 10px; text-decoration: underline;">Unsubscribe</a>
                <span style="color: #475569; font-size: 10px;"> | </span>
                <a href="#" style="color: #475569; font-size: 10px; text-decoration: underline;">Manage Preferences</a>
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    });
    return result;
  } catch (error) {
    console.error("Zeptomail Error:", error);
    throw error;
  }
}
