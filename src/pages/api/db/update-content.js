//
import axios from "axios";

export default async function handler(req, res) {
  const { content_id, title, content, image_url, authToken } = req.body;
  try {
    const { data } = await axios({
      method: "put",
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/update-content`,
      data: {
        title,
        content,
        image_url,
        content_id,
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
