import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Initial_profile({ initials, profile }) {
  return (
    <Box mt={{ base: "10px", lg: "0" }}>
      <Box
        className={`${
          profile
            ? "lg:h-[170px] lg:w-[170px] h-[150px] w-full rounded-lg"
            : "lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] rounded-full"
        } items-center justify-center bg-[#031966] grid`}
      >
        <Text
          className={`${
            profile
              ? "lg:text-[40px] text-[30px]"
              : "lg:text-[18px] text-[16px]"
          } font-bold text-orange-400`}
        >
          {initials}
        </Text>
      </Box>
    </Box>
  );
}

export default Initial_profile;
