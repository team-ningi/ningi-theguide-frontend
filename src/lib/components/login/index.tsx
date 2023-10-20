import { Flex, Box, Paragraph, Button, Input } from "theme-ui";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { LoginStateTypes, LoginSetStateTypes } from "@/lib/types";

const emailRegexPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const isValidEmail = (email: string) => emailRegexPattern.test(email);

const Title = () => (
  <Paragraph
    sx={{ fontSize: "55px", fomntWeight: "300", mb: "30px", color: "#333" }}
  >
    Ai Adviser
  </Paragraph>
);

const logUserIn = async (
  currentState: LoginStateTypes,
  updateState: LoginSetStateTypes,
  toggleLoading: Dispatch<SetStateAction<boolean>>
) => {
  toggleLoading(true);
  await axios.post("/api/auth", { email: currentState?.username }).then(() => {
    updateState({ ...currentState, mode: "waiting" });
    toggleLoading(false);
  });
};

export const LoginForm = ({
  currentState,
  updateState,
  toggleLoading,
}: {
  currentState: LoginStateTypes;
  updateState: LoginSetStateTypes;
  toggleLoading: Dispatch<SetStateAction<boolean>>;
}) => (
  <Flex
    id="loginForm"
    sx={{
      p: "30px",
      width: "auto",
      minHeight: "480px",
      ml: "25px",
      flexDirection: "column",
      border: "0px solid lightgrey",
      mt: "150px",
      alignSelf: "flex-start",
      backgroundColor: "#F9F9F9",
      zIndex: 123,
      "@media screen and (max-width: 550px)": {
        boxShadow: "unset",
        mt: "60px",
      },
    }}
  >
    <Box
      sx={{
        width: "330px",
        minHeight: "44px",
        m: "30px auto 15px",
      }}
    >
      <Title />
      <Paragraph
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
      >
        Email address
      </Paragraph>
      <Input
        type="email"
        id="email"
        data-testid="email"
        name="email"
        placeholder="Enter your email address"
        onChange={(e) =>
          updateState({ ...currentState, username: e.target.value })
        }
        value={currentState.username}
        sx={{
          border: "1px #CBD5E1 solid",
          height: "44px",
          width: "330px",
          color: "#323741",
          fontSize: "14px",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && isValidEmail(currentState?.username)) {
            logUserIn(currentState, updateState, toggleLoading);
          }
        }}
      />
    </Box>

    <Button
      variant="primary"
      sx={{
        color: "white",
        cursor: "pointer",
        mt: "5px",
        alignSelf: "flex-end",
        mr: "0px",
        width: "150px",
      }}
      onClick={() => {
        if (isValidEmail(currentState?.username)) {
          logUserIn(currentState, updateState, toggleLoading);
        }
      }}
    >
      Send magic link
    </Button>
    <Box
      sx={{
        width: "330px",
        minHeight: "44px",
        m: "30px auto 15px",
      }}
    >
      <Paragraph
        sx={{
          mt: "20px",
          fontSize: "13px",
          fontWeight: "500",
          textAlign: "left",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
      >
        Magic links are a form of passwordless login. This means you can log in
        to your account by clicking on the link emailed to you.
      </Paragraph>
    </Box>
  </Flex>
);

export const Waiting = ({
  currentState,
  updateState,
}: {
  currentState: LoginStateTypes;
  updateState: LoginSetStateTypes;
}) => (
  <Flex
    // id="loginForm"
    sx={{
      p: "30px",
      width: "auto",
      minHeight: "480px",
      ml: "25px",
      flexDirection: "column",
      border: "0px solid lightgrey",
      mt: "150px",
      alignSelf: "flex-start",
      backgroundColor: "#F9F9F9",
      zIndex: 123,
      "@media screen and (max-width: 550px)": {
        boxShadow: "unset",
        mt: "60px",
      },
    }}
  >
    <Box
      sx={{
        width: "330px",
        minHeight: "44px",
        m: "30px auto 15px",
      }}
    >
      <Title />
      <Paragraph
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
      >
        Please check your inbox
      </Paragraph>
    </Box>

    <Box
      sx={{
        width: "330px",
        minHeight: "44px",
        m: "0px auto 15px",
      }}
    >
      <Paragraph
        sx={{
          mt: "0px",
          fontSize: "16px",
          fontWeight: "400",
          textAlign: "left",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
      >
        {"We've"} sent a verification email to your inbox, once you click the
        link you will be redirected
      </Paragraph>

      <Paragraph
        sx={{
          mt: "80px",
          fontSize: "16px",
          fontWeight: "400",
          textAlign: "left",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
      >
        {"Didn't"} get an email?
      </Paragraph>
      <Paragraph
        sx={{
          mt: "20px",
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "left",
          textDecoration: "underline",
          cursor: "pointer",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
        onClick={() => updateState({ ...currentState, mode: "login" })}
      >
        Try again.
      </Paragraph>
    </Box>
  </Flex>
);

export const Verify = ({
  currentState,
  updateState,
}: {
  currentState: LoginStateTypes;
  updateState: LoginSetStateTypes;
}) => (
  <Flex
    // id="loginForm"
    sx={{
      p: "30px",
      width: "auto",
      minHeight: "480px",
      ml: "25px",
      flexDirection: "column",
      border: "0px solid lightgrey",
      mt: "150px",
      alignSelf: "flex-start",
      backgroundColor: "#F9F9F9",
      zIndex: 123,
      "@media screen and (max-width: 550px)": {
        boxShadow: "unset",
        mt: "60px",
      },
    }}
  >
    <Box
      sx={{
        width: "330px",
        minHeight: "44px",
        m: "30px auto 15px",
      }}
    >
      <Title />
      <Paragraph
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
      >
        We are validating your session
      </Paragraph>
    </Box>

    <Box
      sx={{
        width: "330px",
        minHeight: "44px",
        m: "0px auto 15px",
      }}
    >
      <Paragraph
        sx={{
          mt: "0px",
          fontSize: "16px",
          fontWeight: "400",
          textAlign: "left",
          mb: "12px",
          ml: "3px",
          color: "#333333",
        }}
      >
        This will only take a moment to complete.
      </Paragraph>
    </Box>
  </Flex>
);
