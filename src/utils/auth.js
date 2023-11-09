import axios from "axios";

export const authTokenVerification = async (token) => {
  try {
    const {
      data: { session_id: sessionID, uuid },
    } = await axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_MANAGE_API_URL}/v1/tokens`,
      params: { token, journey: "" },
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
      },
      maxRedirects: 0,
    });

    return { valid: true, sessionID, uuid };
  } catch (error) {
    switch (error.response?.status) {
      case 404:
        // auth token expired
        break;
      default:
        console.log(error);
        break;
    }
    return { valid: false };
  }
};
