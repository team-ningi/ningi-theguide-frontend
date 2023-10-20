import axios from "axios";

export const countLikesById = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-like-count-for-content",
    data: {
      id,
      authToken,
    },
  });

export const chat = async (
  question: string,
  documentIds: string[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/chat",
    data: {
      question,
      documentIds,
      authToken,
    },
  });
