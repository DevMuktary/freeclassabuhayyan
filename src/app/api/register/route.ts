import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendWelcomeEmail } from "@/lib/zeptomail";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // 1. Save to Database
    // We use upsert so if they register twice, it just updates the existing one without crashing
    const user = await prisma.registration.upsert({
      where: { email: email },
      update: { name: name },
      create: {
        name: name,
        email: email,
      },
    });

    // 2. Send Email (Non-blocking: we don't want to wait for email to finish before showing success)
    sendWelcomeEmail(name, email).catch(err => console.error("Email failed", err));

    return NextResponse.json({ success: true, user });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
