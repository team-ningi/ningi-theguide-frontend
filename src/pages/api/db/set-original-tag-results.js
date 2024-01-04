//
import axios from "axios";

export default async function handler(req, res) {
  const { user_id, report_id, tagResults, authToken } = req.body;

  try {
    const { data } = await axios({
      method: "put",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/set-original-tag-results`,
      data: {
        user_id,
        report_id,
        tagResults,
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
