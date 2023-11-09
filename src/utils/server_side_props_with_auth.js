/* eslint-disable import/no-anonymous-default-export */
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../pages/api/auth/callback";
import { authTokenVerification } from "./auth";

export default ({ redirect = true, generate = true }) =>
  withIronSessionSsr(async function getServerSideProps({ req }) {
    const authentication = await authTokenVerification(req.session.authToken);

    const isTestUser =
      process.env.TEST_APPLICATION_TOKEN ===
      process.env.MANAGE_APPLICATION_TOKEN;

    if (isTestUser) {
      console.log("E2E testing");
      return {
        props: {
          session: {
            email: "test@ningi.co.uk",
            authToken: "1234567890abcdefgh",
          },
        },
      };
    }

    if (!authentication.valid && redirect) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }

    return {
      props: {
        session: { ...req.session, uuid: authentication?.uuid || "" },
      },
    };
  }, sessionOptions);
