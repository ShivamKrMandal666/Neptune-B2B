import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 40;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    // Phone is optional and stored as free text — no country-specific format.
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedMessage ||
      trimmedName.length > MAX_NAME_LENGTH ||
      trimmedEmail.length > MAX_EMAIL_LENGTH ||
      trimmedPhone.length > MAX_PHONE_LENGTH ||
      trimmedMessage.length > MAX_MESSAGE_LENGTH ||
      !EMAIL_REGEX.test(trimmedEmail)
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { error } = await supabase.from("consultations").insert({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone || null,
      project_details: trimmedMessage,
    });

    if (error) {
      // Log server-side only — never leak the driver message to the browser.
      console.error("[consultations] insert failed:", error.message);
      return NextResponse.json(
        { error: "Failed to submit" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

