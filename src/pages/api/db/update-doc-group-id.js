//
import axios from "axios";

export default async function handler(req, res) {
  const { document_group_id, document_id, authToken } = req.body;

  try {
    const { data } = await axios({
      method: "put",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/update_document_group_id`,
      data: {
        document_group_id,
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
