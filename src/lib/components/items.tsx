import Identicon from "identicon.js";
import { Box, Paragraph, Flex } from "theme-ui";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ListItemType } from "../types";
import { Dispatch, SetStateAction, useState } from "react";
import moment from "moment";

export const AddBtn = ({
  type,
  darkMode,
  router,
}: {
  type: string;
  darkMode: boolean;
  router: AppRouterInstance;
}) => (
  <Flex
    sx={{
      borderRadius: "6px",
      border: "1px solid lightgrey",
      fontSize: "13px",
      width: "70px",
      height: "35px",
      mr: "10px",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: darkMode ? "#000" : "#F8F8F8",
      },
    }}
    onClick={() => router.push(`/add/content/${type}`)}
  >
    <Paragraph sx={{ color: darkMode ? "#FFF" : "#444", fontSize: "13px" }}>
      Add{" "}
    </Paragraph>
    {/* <PlusCircle
      size={15}
      style={{
        fontWeight: "600",
        marginLeft: "5px",
        color: darkMode ? "#FFF" : "#444",
      }}
    /> */}
  </Flex>
);

export const BackBtn = ({
  url,
  router,
}: {
  url: string;
  router: AppRouterInstance;
}) => (
  <Flex
    sx={{
      mt: "15px",
      borderRadius: "6px",
      border: "1px solid lightgrey",
      fontSize: "13px",
      width: "70px",
      height: "35px",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#F8F8F8",
      },
    }}
    onClick={() => router.push(url)}
  >
    {/* <CaretLeft
      size={15}
      style={{
        fontWeight: "600",
        marginLeft: "-5px",
        color: darkMode ? "#FFF" : "#444",
      }}
    />{" "} */}
    <Paragraph sx={{ color: "#444", fontSize: "13px" }}>Back</Paragraph>
  </Flex>
);

export const EditBtn = ({
  id,
  type,
  router,
}: {
  id: string;
  type: string;
  router: AppRouterInstance;
}) => (
  <Flex
    sx={{
      width: "70px",
      height: "35px",
      mt: "0px",
      border: "1px solid lightgrey",
      borderRadius: "8px",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#F8F8F8",
        borderColor: "green",
        color: "green",
      },
      color: "grey",
    }}
    onClick={() => router.push(`/edit/content/${type}/${id}`)}
  >
    <Flex>{/* <Pencil size={20} /> */}</Flex>
    <Paragraph sx={{ color: "grey", fontSize: "12px", ml: "5px" }}>
      Edit
    </Paragraph>
  </Flex>
);
