//
import axios from "axios";

export default async function handler(req, res) {
  const { user_id, content_id, authToken } = req.body;
  try {
    const { data } = await axios({
      method: "delete",
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/delete-like`,
      data: {
        user_id,
        content_id,
      },
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
        engageSession: authToken,
      },
    });
    console.log(user_id, content_id, authToken);
    res.status(200).send(data);
  } catch (e) {
    console.log("e ", e);
    res.status(500).send({ error: e.message });
  }
}
