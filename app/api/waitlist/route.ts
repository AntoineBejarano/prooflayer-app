import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // TODO: Connect to your email service (Resend, ConvertKit, Mailchimp, Supabase)
    // Example with Resend:
    // await resend.contacts.create({
    //   email,
    //   audienceId: process.env.RESEND_AUDIENCE_ID!,
    // })

    // Example with Supabase:
    // await supabase.from('waitlist').insert({ email })

    console.log(`[Waitlist] New signup: ${email}`)

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[Waitlist] Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
