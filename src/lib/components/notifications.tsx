import { Flex, Paragraph, Button, Box, Switch, Label } from "theme-ui";
import { connect } from "react-redux";
import {
  XCircle,
  WarningCircle,
  CheckCircle,
  Warning,
  Info,
} from "phosphor-react";

const typeMapping = {
  error: {
    icon: "error",
    bgColor: "#DA0000",
    color: "#FFFFFF",
    text: "System is wonky, don’t worry, we’re fixing it.",
  },
  warning: {
    icon: "warning",
    bgColor: "#FFEBD5",
    color: "#000000",
    text: "This is a warning notification",
  },
  success: {
    icon: "success",
    bgColor: "#7FCF96",
    color: "#FFFFFF",
    text: "Success",
  },
  gentle: {
    icon: "gentle",
    bgColor: "#E3F1FD",
    color: "#1459F5",
    text: "Gentle msg",
  },
};

const IconMap = {
  error: <WarningCircle size={28} />,
  success: <CheckCircle size={28} />,
  warning: <Warning size={28} />,
  gentle: <Info size={28} />,
};

const NotificationWidget = ({ notification, hideNotification }: any) => {
  const { customText, type, show } = notification || {}; // @ts-ignore
  const { icon, bgColor, color, text } = typeMapping?.[type] || {};

  const textToUse = customText === "" ? text : customText;

  if (!show) {
    return null;
  }

  return (
    <Flex
      sx={{
        width: "100%",
        ml: "0",
        height: "70px",
        position: "fixed",
        backgroundColor: bgColor,
        zIndex: 99999,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Flex
        sx={{
          width: "650px",
          height: "50px",
          border: "0px solid black",
          ml: "120px",
          alignItems: "center",
          cursor: type === "gentle" ? "pointer" : "inherit",
          "@media screen and (max-width: 1024px)": {
            ml: "20px",
            width: "450px",
          },
          "@media screen and (max-width: 650px)": {
            width: "260px",
          },
        }}
      >
        <Box sx={{ mt: "5px", color: color }}>
          {/* @ts-ignore */}
          {IconMap[icon]}
        </Box>
        <Paragraph
          sx={{
            ml: "15px",
            color,
            fontSize: "14px",
            fontWeight: "500",
            width: "100%",
            "@media screen and (max-width: 650px)": {
              width: "260px",
            },
          }}
        >
          {textToUse}
        </Paragraph>
      </Flex>

      <Flex
        sx={{
          width: "25px",
          height: "50px",
          border: "0px solid black",
          mr: "30px",
          alignItems: "center",
          cursor: "pointer",
          color,
          "@media screen and (max-width: 1024px)": {
            mr: "20px",
          },
        }}
        onClick={() => hideNotification()}
      >
        <Box>
          <XCircle size={28} />
        </Box>
      </Flex>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  hideNotification: () => dispatch({ type: "HIDE_NOTIFICATION" }),
});

const mapStateToProps = (state: any) => {
  const { account } = state;
  return {
    notification: account.notification,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationWidget);
