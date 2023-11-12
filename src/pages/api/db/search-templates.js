import axios from "axios";

export default async function handler(req, res) {
  const { file_type, search, limit, skip, authToken } = req.body;
  try {
    let body = {};
    if (file_type) {
      body.file_type = file_type;
    }
    if (search) {
      body.search = search;
    }

    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/search-templates`,
      data: {
        limit,
        skip,
        ...body,
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
