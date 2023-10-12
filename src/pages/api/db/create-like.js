//
import axios from "axios";

export default async function handler(req, res) {
  const {
    user_id,
    content_id,
    content_type,
    metadata = {},
    authToken,
  } = req.body;
  try {
    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/create-like`,
      data: {
        user_id,
        content_id,
        content_type,
        metadata,
      },
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
        engageSession: authToken,
      },
    });

    res.status(200).send(data);
  } catch (e) {
    console.log("e ", e);
    res.status(500).send({ error: e.message });
  }
}
