//
import axios from "axios";

export default async function handler(req, res) {
  const {
    content_id,
    author = "",
    content_type,
    user_id,
    comment,
    authToken,
  } = req.body;
  try {
    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/create-comment`,
      data: {
        content_id,
        author,
        content_type,
        user_id,
        comment,
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
