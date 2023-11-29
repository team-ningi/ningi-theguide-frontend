import axios from "axios";

export default async function handler(req, res) {
  const { tags, documentIds, additionalPrompt, reportId, authToken } = req.body;
  try {
    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/query-get-tags-single-chunk`,
      data: {
        tags,
        documentIds,
        additionalPrompt,
        reportId,
      },
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
        engageSession: authToken,
      },
    });

    res.status(200).send(data);
  } catch (e) {
    console.log("e in get tags ", e);
    res.status(500).send({ error: e.message });
  }
}
