//
import axios from "axios";

export default async function handler(req, res) {
  const {
    user_id,
    label,
    file_url,
    file_type,
    original_filename,
    saved_filename,
    custom_filename,
    metadata,
    authToken,
  } = req.body;
  try {
    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/add-document`,
      data: {
        user_id,
        label,
        file_url,
        file_type,
        original_filename,
        saved_filename,
        custom_filename,
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
