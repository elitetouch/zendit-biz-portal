import React from "react";
import { Box, Text, Input } from "@chakra-ui/react";

function ChakraFormDate({
  names,
  signupfunction,
  signupvalue,
  readonly,
  placing,
  labelStyle,
  labeling,
  inputType,
}) {
  return (
    <Box>
      <Text
        as="label"
        className={`text-[16px] lg:text-[18px] font-semibold ${labelStyle}`}
      >
        {labeling}
      </Text>
      <Box className=" mt-[10px]">
        <Input
          size="lg"
          className={`text-[12px] lg:text-[14px] mt-[5px] pl-4 focus:border-none ${
            signupvalue && "bg-[#CDD8FE]"
          } h-[48px] w-full  hover:bg-[#CDD8FE] duration-500`}
          placeholder={placing}
          type={inputType}
          name={names}
          onChange={signupfunction}
          value={signupvalue}
          readOnly={readonly ? true : false}
          fontSize={15}
        />
      </Box>
      <Box></Box>
    </Box>
  );
}

export default ChakraFormDate;
