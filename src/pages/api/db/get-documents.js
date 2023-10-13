import axios from "axios";

export default async function handler(req, res) {
  const { type, authToken } = req.body;
  try {
    const { data } = await axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/get-content?type=${type}`,
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
