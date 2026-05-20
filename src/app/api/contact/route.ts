import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, business, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Log the submission (for now — will add email/notification later)
    console.log("Contact form submission:", {
      name,
      email,
      business: business || "Not provided",
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification to hello@ridleywebworks.com
    // TODO: Store submission in database or send to CRM

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
