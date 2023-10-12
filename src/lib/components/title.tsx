import { Paragraph, Flex } from "theme-ui";
import { ReactNode } from "react";
import { AddBtn } from "@/lib/components/items";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const Title = ({
  text,
  type,
  icon,
  darkMode,
  showAddIcon = true,
  justifyContent = "space-between",
  router,
}: {
  text: string;
  type: string;
  justifyContent?: string;
  icon: ReactNode;
  darkMode: boolean;
  showAddIcon?: boolean;
  router: AppRouterInstance;
}) => (
  <Flex
    sx={{
      mb: "20px",
      alignItems: "center",
      justifyContent,
      pb: "5px",
      color: darkMode ? "white" : "#444",
    }}
  >
    <Flex sx={{ alignItems: "center" }}>
      {icon}
      <Paragraph
        sx={{
          textAlign: "left",
          fontWeight: "500",
          fontSize: "19px",
          ml: "10px",
          textTransform: "capitalize",
        }}
      >
        {text}
      </Paragraph>
    </Flex>
    {showAddIcon && <AddBtn type={type} darkMode={darkMode} router={router} />}
  </Flex>
);
