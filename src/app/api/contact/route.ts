import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
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

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedMessage ||
      trimmedName.length > MAX_NAME_LENGTH ||
      trimmedEmail.length > MAX_EMAIL_LENGTH ||
      trimmedMessage.length > MAX_MESSAGE_LENGTH ||
      !EMAIL_REGEX.test(trimmedEmail)
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: replace this stub with Resend delivery once the API key is configured.
    // Capture all validated fields (including optional phone) for future use.
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const _payload = { name: trimmedName, email: trimmedEmail, phone: trimmedPhone, message: trimmedMessage };
    void _payload; // Remove once delivery is wired up.

    // Simulate delivery – swap the block below for a real send and handle errors:
    // const ok = await sendEmail(_payload);
    // if (!ok) {
    //   return NextResponse.json({ error: "Failed to deliver message" }, { status: 502 });
    // }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

