//
import axios from "axios";

export default async function handler(req, res) {
  const { id, label, tags, metadata = {}, authToken } = req.body;
  try {
    const { data } = await axios({
      method: "put",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/update-tags`,
      data: {
        id,
        label,
        tags,
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
