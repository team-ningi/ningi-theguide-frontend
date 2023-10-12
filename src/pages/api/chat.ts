// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const getChatResponse = async (
  text: string,
  personality: string,
  fileToUse: string
) => {
  try {
    const params = new URLSearchParams();
    if (!text) return;
    params.append("question", text);
    params.append("personality", personality);
    params.append("fileToUse", fileToUse);

    const queryString = params.toString();

    const { data } = await axios({
      url: `/ai/text?${queryString}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
    return data;
  } catch (e) {
    console.log("e ", e);
  }
};
export default getChatResponse;
