import React, { useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";

function InputsComplex({
  labelling,
  icon,
  placing,
  names,
  signupvalue,
  signupfunction,
  secIcon,
  stateType,
  secIconFunc,
  readonly,
  validation,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const passwordFunc = () => {
    if (secIconFunc) {
      setShowPassword(!showPassword);
    }
  };
  console.log(validation);

  return (
    <Box className="w-full">
      <Box as="form">
        <Text as="label" className="text-[16px] lg:text-[18px] font-semibold">
          {labelling}
        </Text>

        <Box
          border={"1px"}
          borderColor={"gray.300"}
          borderRadius={"10px"}
          className="mt-[8px] border rounded-lg relative gap-x-2 flex items-center pr-[2px]"
        >
          {icon && <Box className="pl-2">{icon}</Box>}

          <Input
            size={["md", "lg"]}
            fontSize={15}
            border="none"
            className={`text-[12px] lg:text-[14px] pl-4 focus:border-none ${
              signupvalue && "bg-[#CDD8FE]"
            } h-[48px] w-full max-w-full hover:bg-[#CDD8FE] duration-500`}
            placeholder={placing}
            name={names}
            onChange={signupfunction}
            value={signupvalue}
            type={!showPassword && secIconFunc ? "password" : stateType}
            readOnly={readonly ? true : false}
            _autofill={false}
            autoComplete="off"
          />

          {secIcon && (
            <Box
              as="button"
              onClick={passwordFunc}
              className={`pr-2 ${!showPassword ? "" : "hidden"}`}
            >
              {secIcon}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default InputsComplex;
