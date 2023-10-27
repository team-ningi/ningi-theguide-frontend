const Theme = {
  colors: {
    text: "#000",
    background: "#FFFFFF",
    primary: "#333366",
    secondary: "#F0B929",
  },
  forms: {
    input: {
      color: "#1C1C1C",
    },
  },
  alerts: {
    primary: {
      color: "background",
      bg: "primary",
    },
    success: {
      bg: "validationSuccessLight",
      color: "fontDark",
      border: "1px solid #219653",
    },
    error: {
      bg: "errorLight",
      color: "fontDark",
      border: "1px solid #F56132",
    },
  },
  fonts: {
    body: 'Poppins, "Open Sans", sans-serif',
    heading: 'Poppins, "Open Sans", sans-serif',
    monospace: 'Poppins, "Open Sans", sans-serif',
    label: 'Poppins, "Open Sans", sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    spinner: {
      color: "primary",
    },
    h1: {
      fontSize: 36,
      fontFamily: "body",
      fontWeight: "heading",
      color: "fontDark",
      mt: 4,
      mb: 2,
    },
    h2: {
      fontFamily: "body",
      fontWeight: "heading",
      color: "fontDark",
      lineHeight: "49.18px",
    },
    a: {
      "&:hover": {
        cursor: "pointer",
      },
      color: "primary",
      fontFamily: "body",
    },
    p: {
      fontFamily: "body",
    },
    body: {
      backgroundColor: "greyBackground",
    },
  },
  breakpoints: [
    "40em",
    "@media (min-width: 56em) and (orientation: landscape)",
    "64em",
  ],
  label: {
    fontFamily: "body",
  },
  buttons: {
    primary: {
      backgroundColor: "rgb(73,64,255)",
      background:
        "linear-gradient(180deg, rgba(139,132,255,1) 10%, rgba(73,64,255,1) 100%)",
      "&:hover": {
        cursor: "pointer",
      },
      height: "42px",
      width: "120px",
      border: "1px solid primary",
      borderRadius: 6,
    },
    "primary-wide": {
      backgroundColor: "primary",
      "&:hover": {
        cursor: "pointer",
      },
      height: 49,
      width: ["90%", 404],
      marginRight: ["5%", "unset"],
      marginLeft: ["5%", "unset"],
      borderRadius: 100,
    },
    "secondary-wide": {
      backgroundColor: "secondary",
      "&:hover": {
        cursor: "pointer",
      },
      height: 49,
      width: ["90%", 404],
      marginRight: ["5%", "unset"],
      marginLeft: ["5%", "unset"],
      borderRadius: 100,
    },
    secondary: {
      backgroundColor: "secondary",
      "&:hover": {
        cursor: "pointer",
      },
      color: "fontDark",
      height: 49,
      borderRadius: 100,
    },
    disabled: {
      backgroundColor: "#BEBEBE",
      "&:hover": {
        cursor: "not-allowed",
      },
      height: 49,
      borderRadius: 100,
    },
  },
};

export default Theme;
