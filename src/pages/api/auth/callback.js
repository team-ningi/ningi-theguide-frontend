import { withIronSessionApiRoute } from "iron-session/next";

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: process.env.NEXT_PUBLIC_SECRET_COOKIE_NAME || "_engage_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default withIronSessionApiRoute(async function callback(req, res) {
  const {
    query: { token, session, email },
  } = req;

  req.session.authToken = token;
  req.session.email = email;
  await req.session.save();

  // TODO
  // DECODE BASE64 EMAIL
  // DECODE IT ON LOGIN SCREEN TO GET INTO STORE

  let redirectUrl = `/?mode=verify&e=${btoa(email)}`;
  if (session) {
    redirectUrl = `${redirectUrl}&session=${session}`;
  }

  res.redirect(redirectUrl);
}, sessionOptions);
