import { withIronSessionApiRoute } from "iron-session/next";

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: process.env.NEXT_PUBLIC_SECRET_COOKIE_NAME || "_engage_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default withIronSessionApiRoute(async function callback(req, res) {
  await req.session.destroy();
}, sessionOptions);
