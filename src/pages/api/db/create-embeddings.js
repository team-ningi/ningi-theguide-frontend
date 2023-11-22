//
import axios from "axios";

export default async function handler(req, res) {
  const {
    user_id,
    document_id,
    file_url,
    file_type,
    authToken,
    type_of_embedding = "document",
    additional_context = "",
  } = req.body;
  try {
    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/create-embeddings`,
      data: {
        user_id,
        document_id,
        document_url: file_url,
        file_type,
        type_of_embedding,
        additional_context,
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
