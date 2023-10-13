import { ThreeCircles } from "react-loader-spinner";
import { Flex } from "theme-ui";

const Spinner = () => (
  <Flex
    sx={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0px",
      left: "0",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: 999,
    }}
  >
    <ThreeCircles
      height="100"
      width="100"
      color="#ff66cc"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#cc33cc"
      innerCircleColor="#ff66cc"
      middleCircleColor="#fff"
    />
  </Flex>
);

export { Spinner };
