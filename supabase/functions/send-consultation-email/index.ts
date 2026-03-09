import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, course, message } = await req.json();

    // Send email notification using Supabase's built-in email
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    // For now, log the submission (email sending requires an API key)
    console.log("New consultation request:", { name, phone, email, course, message });

    // If Resend API key is configured, send email
    if (RESEND_API_KEY) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Consultation <onboarding@resend.dev>",
          to: ["Contact.svglobalmedconnect@gmail.com"],
          subject: `New Consultation Request from ${name}`,
          html: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Preferred Course:</strong> ${course || "Not specified"}</p>
            <p><strong>Message:</strong> ${message || "No message"}</p>
            <hr/>
            <p><em>Submitted at ${new Date().toISOString()}</em></p>
          `,
        }),
      });

      if (!emailRes.ok) {
        console.error("Email send failed:", await emailRes.text());
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
