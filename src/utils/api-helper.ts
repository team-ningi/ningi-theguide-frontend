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

export const createLike = async (
  content_id: string,
  content_type: string,
  metadata: object,
  user_id: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-like",
    data: {
      content_id,
      user_id,
      content_type,
      metadata,
      authToken,
    },
  });

export const deleteLike = async (
  content_id: string,
  user_id: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/delete-like",
    data: {
      content_id,
      user_id,
      authToken,
    },
  });

export const hasUserLikedContent = async (
  content_id: string,
  user_id: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/has-user-liked-content",
    data: {
      content_id,
      user_id,
      authToken,
    },
  });

export const getContent = async (type: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-content",
    data: {
      type,
      authToken,
    },
  });

export const getContentById = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-content-by-id",
    data: {
      id,
      authToken,
    },
  });

export const getCommentsById = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-comments",
    data: {
      id,
      authToken,
    },
  });

export const createComment = async (
  content_id: string,
  author: string,
  content_type: string,
  user_id: string,
  comment: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-comment",
    data: {
      content_id,
      author,
      content_type,
      user_id,
      comment,
      authToken,
    },
  });
