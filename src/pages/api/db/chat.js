import axios from "axios";

export default async function handler(req, res) {
  const { question, documentIds, authToken } = req.body;
  try {
    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/query`,
      data: {
        question,
        documentIds,
      },
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
        engageSession: authToken,
      },
    });

    res.status(200).send(data);
  } catch (e) {
    console.log("e in chat ", e);
    res.status(500).send({ error: e.message });
  }
}

/*
query param example

const params = new URLSearchParams();
    if (!question) return;

    params.append("question", question);
    params.append("fileToUse", fileToUse);

    const queryString = params.toString();

    const { data } = await axios({
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/in-memory-ai-text?${queryString}`,
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
        engageSession: authToken,
      },
    });

*/
