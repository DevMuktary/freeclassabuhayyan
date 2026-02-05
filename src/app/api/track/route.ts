import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST() {
  try {
    // Simply create a new visit record
    await prisma.siteVisit.create({
      data: {},
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error tracking" }, { status: 500 });
  }
}
