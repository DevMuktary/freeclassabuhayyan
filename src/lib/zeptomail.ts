// src/lib/zeptomail.ts
import { SendMailClient } from "zeptomail";

const url = "api.zeptomail.com/";
const token = process.env.ZEPTOMAIL_TOKEN || "";

const client = new SendMailClient({ url, token });

export async function sendWelcomeEmail(name: string, email: string) {
  try {
    const result = await client.sendMail({
      from: {
        address: "noreply@abuhayyan.com.ng", // REPLACE THIS with your verified Zeptomail sender address
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
      subject: "Welcome to Halal Digital Hustles Class!",
      htmlbody: `
        <div style="font-family: Arial, sans-serif; color: #001232; padding: 20px;">
          <h2 style="color: #001232;">Salaam ${name},</h2>
          <p>You have successfully registered for the <strong>Halal Digital Hustles From Home</strong> class.</p>
          <p>We are excited to have you on board!</p>
          
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Next Step: Join the WhatsApp Group</h3>
            <p>Class updates and the live link will be shared here.</p>
            <a href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM" style="background-color: #FFB902; color: #001232; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;">Join WhatsApp Group Now</a>
          </div>

          <p>See you in class!</p>
          <p><em>Abu Hayyan School of Skills and Deen</em></p>
        </div>
      `,
    });
    return result;
  } catch (error) {
    console.error("Zeptomail Error:", error);
    throw error;
  }
}
