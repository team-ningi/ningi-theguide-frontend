//
import axios from "axios";

export default async function handler(req, res) {
  const { original_text, document_id, authToken } = req.body;

  try {
    const { data } = await axios({
      method: "post",
      // timeout: 60 * 4 * 1000,
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/refine-text`,
      data: {
        original_text,
        document_id,
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
