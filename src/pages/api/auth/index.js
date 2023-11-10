import axios from "axios";

const domain =
  process.env.NEXT_PUBLIC_URL ||
  `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export default async function handler(req, res) {
  const {
    email,
    firstName,
    lastName,
    callbackUrl = `${domain}/api/auth/callback`,
    sessionID,
    download,
  } = req.body;

  try {
    let redirectTo = `${callbackUrl}?email=${encodeURIComponent(email)}`;
    if (sessionID !== undefined) {
      redirectTo = `${redirectTo}&session=${sessionID}`;
    }

    await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MANAGE_API_URL}/v1/client_portal/auth`,
      // url: `${process.env.NEXT_PUBLIC_MANAGE_API_URL}/v1/auth`,
      data: {
        user: {
          email,
          first_name: "",
          last_name: "",
          rtu: Buffer.from(redirectTo).toString("base64url"),
        },
      },
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
      },
    });

    res.status(200).send();
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}
