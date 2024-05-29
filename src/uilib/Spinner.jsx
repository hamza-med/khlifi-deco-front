import { Spinner as Sp } from "@chakra-ui/react";

const Spinner = () => (
  <Sp
    position="absolute"
    emptyColor="gray.50"
    thickness="3px"
    color="#ac8f67"
    size={["xl", "2xl", "2xl"]}
    speed="0.7s"
    top="50%"
    left="50%"
  />
);
export default Spinner;
