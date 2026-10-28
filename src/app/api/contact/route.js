// Runs on the server only. Receives the form, checks it, and emails you.
export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();

  // Hidden "honeypot" field: real people never fill it, spam bots do
  if (data.website) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length > 3000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  // No key yet: print to the terminal so you can test the form today
  if (!apiKey || !to) {
    console.log("\n--- New contact message (email not configured) ---");
    console.log({ name, email, message });
    return Response.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return Response.json({ error: "Could not send. Please try again." }, { status: 500 });
  }

  return Response.json({ ok: true });
}