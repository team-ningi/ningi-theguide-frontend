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
      color="#564DFE"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#564DFE"
      innerCircleColor="#8A84FF"
      middleCircleColor="#564DFE"
    />
  </Flex>
);

export { Spinner };
