import axios from "axios";

// const getChatResponse = async (text, fileToUse, authToken) => {
//   const params = new URLSearchParams();
//   if (!text) return;

//   params.append("question", text);
//   params.append("fileToUse", fileToUse);

//   const queryString = params.toString();
//   console.log(queryString);
//   console.log(
//     "url ",
//     `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/ai-text?${queryString}`
//   );
//   const { data } = await axios({
//     url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/ai-text?${queryString}`,
//     headers: {
//       Authorization: process.env.MANAGE_APPLICATION_TOKEN,
//       engageSession: authToken,
//     },
//   });
//   return data;
// };

export default async function handler(req, res) {
  const { question, fileToUse, authToken } = req.body;
  try {
    console.log(1);
    const params = new URLSearchParams();
    if (!question) return;

    params.append("question", question);
    params.append("fileToUse", fileToUse);

    const queryString = params.toString();

    const { data } = await axios({
      url: `${process.env.NEXT_PUBLIC_COMMUNITY_API_URL}/ai-text?${queryString}`,
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
        engageSession: authToken,
      },
    });
    console.log(22222);
    console.log("datatata", data);
    res.status(200).send(data);
  } catch (e) {
    console.log("e in chat ", e);
    res.status(500).send({ error: e.message });
  }
}
