import axios from "axios";

export const getUserDocuments = async (
  id: string,
  authToken: string,
  embedded: any
) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-documents",
    data: {
      user_id: id,
      authToken,
      embedded,
    },
  });

export const getUserHistory = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-history",
    data: {
      user_id: id,
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

export const createHistory = async (
  user_id: string,
  document_ids: string[],
  question: string,
  answer: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-history",
    data: {
      user_id,
      document_ids,
      question,
      answer,
      authToken,
    },
  });

export const updateHistory = async (
  user_id: string,
  history: any,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/update-history",
    data: {
      user_id,
      history,
      authToken,
    },
  });
