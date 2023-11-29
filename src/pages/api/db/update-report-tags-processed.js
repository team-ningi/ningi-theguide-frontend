//
import axios from "axios";

export default async function handler(req, res) {
  const {
    user_id,
    report_id,
    tag_chunks_to_process,
    tag_chunks_processed,
    authToken,
  } = req.body;

  try {
    const { data } = await axios({
      method: "put",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/update-report-tags-processed`,
      data: {
        user_id,
        report_id,
        tag_chunks_to_process,
        tag_chunks_processed,
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
