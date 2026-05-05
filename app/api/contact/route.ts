import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { pushLeadToZoho } from "@/lib/zoho";
import { sendEmail } from "@/lib/mailer";
import { getUserConfirmationTemplate } from "@/lib/templates";
import z from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
  subject: z.string().min(1, "Subject is required"),
  services: z.array(z.string()).min(1, "Select at least one service"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validation = quoteSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ success: false, message: validation.error.issues[0].message }, { status: 400 });
    }

    const { fullName, phone, subject, email, message, services } = validation.data;

    const quote = await prisma.quoteRequest.create({ data: { fullName, phone, subject, email, message, services } });

    const nameParts = fullName.trim().split(" ");
    const lastName = nameParts.length > 1 ? nameParts.pop() : fullName;
    const firstName = nameParts.length > 0 ? nameParts.join(" ") : "";

    const serviceList = services.join(", ");

    const zohoPayload = {
      First_Name: firstName,
      Last_Name: lastName,
      Email: email,
      Phone: phone,
      Company: "Individual",
      Description: `Subject: ${subject}\nServices Required: ${serviceList}\n\nMessage: ${message}`,
      Lead_Source: "Website Contact Form"
    };
    
    const zohoId = await pushLeadToZoho(zohoPayload);
    
    if (zohoId) {
      await prisma.quoteRequest.update({ 
        where: { id: quote.id }, 
        data: { zohoSynced: true, zohoId } 
      });
    }

    await sendEmail({
      to: email,
      subject: "Your Request Has Been Received - AvPlat Aero",
      html: getUserConfirmationTemplate(firstName || fullName, message),
    });

    return NextResponse.json({ success: true, message: "Quote requested successfully" }, { status: 201 });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}