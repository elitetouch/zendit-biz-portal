"use client";
import Image from "next/image";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import signIn from "../../public/signin.jpg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import upload from "../../public/upload.png";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
//import imp from '../Client_dashboard'
export const ChakraInputs = ({
  labeling,
  placingtext,
  names,
  changes,
  values,
  icon,
  secIcon,
  labelStyle,
  inputStyle,
  secIconFunc,
  showPassword,
  readonly,
  homePassKey,
  validation,
  input_type,
  key_down,
  number_down,
}) => {
  return (
    <Box className="full">
      <form>
        <Text
          className={` text-[16px] lg:text-[16px] font-semibold ${labelStyle}`}
        >
          {labeling}
        </Text>
        <Box
          // border={"1px"}
          // borderColor={"#031966"}
          // borderRadius={"10px"}
          className="mt-[8px]  w-full border-2 rounded-lg bg-[#FBFBFB] gap-x-2 flex items-center"
        >
          <Input
            border={"1px"}
            borderColor={"#CDD8FE"}
            borderRadius={"10px"}
            size={["md", "lg"]}
            fontSize={15}
            // border={"none"}
            //  {...register(names,validation)}
            onInput={changes}
            id={names}
            className={` text-[12px] pl-3 lg:text-[14px] hover:bg-[#031966] ${
              values ? "bg-[#CDD8FE]" : ""
            } duration-500 ${inputStyle ? inputStyle : "h-[48px]"}   w-full`}
            placeholder={placingtext}
            name={names}
            onChange={changes}
            value={values}
            type={
              showPassword || homePassKey ? "password" : "text" || input_type
            }
            readOnly={readonly ? true : false}
            autoComplete="off"
            data-autocomplete="off"
            onKeyDown={(e) => {
              if (
                key_down &&
                !/^[A-Za-z\s]+$/.test(e.key) &&
                e.key !== "Backspace"
              ) {
                e.preventDefault(); // ✅ Prevents non-text input
              }
              if (
                number_down &&
                !/^[0-9]$/.test(e.key) &&
                e.key !== "Backspace"
              ) {
                e.preventDefault(); // ✅ Prevents non-numeric input
              }
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

export const FileUpLoad = ({
  header,
  names,
  verificationData,
  setVerificationData,
  validation,
  file_instruct,
}) => {
  const [file_name, set_file_name] = useState();
  const fileRef = useRef(null);
  const fileUploadFunc = () => {
    fileRef?.current?.click();
  };
  const handlefilechange = (e) => {
    const { name, type, value, files } = e.target;
    const file = e.target.files[0];
    if (file) {
      set_file_name(file.name);
    } else {
      set_file_name("");
    }
    setVerificationData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value || "", // Ensure no undefined values
    }));
  };
  return (
    <Box>
      <Text className=" lg:text-[16px] text-[14px] font-bold text-center">
        {header}
      </Text>
      <Box
        cursor={"pointer"}
        onClick={fileUploadFunc}
        border={"1px"}
        borderColor={"#CDD8FE"}
        borderRadius={"10px"}
        className="border border-dotted rounded-lg mt-[8px] lg:w-[288px] w-full h-full"
      >
        <Box className="grid justify-center mt-[16px]">
          <Image alt="" src={upload} />
        </Box>
        <Box className="text-center mt-2 text-[#98A2B3] w-11/12 m-auto ">
          <Text className=" text-[10px] lg:text-[12px]">
            Please, upload the image of your CAC Certificate PNG, JPG (max. 5mb)
          </Text>
          <Text className="mt-2 mb-2  text-[18px]">OR</Text>
          <Box className="grid justify-center ">
            <button
              onClick={fileUploadFunc}
              className=" text-center grid items-center mb-2 text-[14px] text-white rounded-lg bg-[#EB5017] hover:bg-[#031966] duration-500 w-[118px] h-[36px]"
            >
              <Text className=" text-[18px]">Browse Files</Text>
            </button>
          </Box>
        </Box>
        <Box className=" pb-[10px]">
          <Text className=" lg:text-[15px] text-[12px] text-center">
            {file_name}
          </Text>
        </Box>
        <Box className="hidden ">
          <input
            type="file"
            ref={fileRef}
            name={names}
            onChange={handlefilechange}
          />
        </Box>
      </Box>
      {/* {errors?.[names]?.message && (
  <h1 className="text-red-400 text-[12px] font-semibold">
    <span>{errors[names].message}</span>
  </h1>
)} */}
    </Box>
  );
};
export default function Home() {
  const router = useRouter();
  const toast = useToast();
  const formdata = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [signUpDetails, setSignUpDetails] = useState(formdata);

  const handleSignInChange = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };
  const [signUpLoader, setSignUpLoader] = useState(false);
  const submitLogin = () => {
    setSignUpLoader(true);
    console.log(signUpDetails);
    const formData = new FormData();
    formData.append("firstName", signUpDetails.firstName);
    formData.append("email", signUpDetails.lastName);
    formData.append("email", signUpDetails.email);
    formData.append("password", signUpDetails.password);
    formData.append("email", signUpDetails.confirm_password);
  };
  const [value, setValue] = useState("no");
  return (
    <Box className="w-11/12 m-auto ">
      <Box className=" flex items-center justify-between lg:mt-[10px] Pt-[30px]">
        {/* <BackButton buttonText={"Go back"} /> */}
        <Text className=" lg:text-[24px] text-[#FE9534] text-[16px] font-bold">
          PARTNER
        </Text>
      </Box>
      <Box className="text-center "></Box>
      <Box
        border={"1px"}
        borderColor={"#031966"}
        borderRadius={"10px"}
        className=" lg:mt-[30px] mt-[20px] lg:border lg:border-[#031966] rounded-xl lg:w-6/12 max-w-[871px] w-full m-auto lg:mb-[50px] mb-[36.63px]"
      >
        <Box className=" lg:mt-[25px] text-[24px]">
          <h1 className=" lg:hidden font-bold text-[20px]">Welcome, </h1>
          <Text className=" text-[#031966] lg:text-[20px] text-[15px] font-bold lg:text-center lg:mt-[20px] mt-[12px]">
            Please, provide a valid means of identification
          </Text>
          <Box className=" lg:mt-[25px] mt-[24px] grid gap-y-[10px] lg:w-10/12 w-full m-auto">
            <ChakraInputs
              labeling={"Business Name"}
              placingtext={"Enter your  Business name"}
            />
            <ChakraInputs
              labeling={"Business Registration Number"}
              placingtext={"Enter your  business registration number"}
            />
            <ChakraInputs
              labeling={`Company’s contact`}
              placingtext={"Enter your business Contact"}
            />
          </Box>

          <Box>
            <Box className="flex items-center gap-x-2 pt-[24px] lg:w-10/12 m-auto">
              <Text className="text-[12px] lg:text-[14px] ml-4">
                Do you have a Nipost Certificate?
              </Text>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row" spacing={4} align="center">
                  <Radio value="yes" size="sm">
                    Yes
                  </Radio>
                  <Radio value="no" size="sm">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box className=" w-10/12 m-auto mt-[10px]">
              {value === "yes" && (
                <ChakraInputs
                  labeling={`NIPOST Number`}
                  placingtext={"Enter your Nipost Number"}
                />
              )}
            </Box>
          </Box>

          <Box className=" grid justify-center mt-[25px] w-9/12 lg:w-full m-auto mb-[20px] gap-y-[20px] ">
            <Box>
              <FileUpLoad header={"Upload CAC Certificate"} />
            </Box>
            {value === "yes" && (
              <Box>
                <FileUpLoad header={"Upload NIPOST Certificate"} />
              </Box>
            )}
          </Box>
        </Box>
        <Box className="flex items-center gap-x-2 pt-[24px] lg:w-10/12 m-auto ">
          <Box className="flex items-center ">
            <Checkbox className=" h-[18px] w-[18px]" />
          </Box>
          <Text className=" text-[12px] lg:text-[14px]">
            I hereby certify that the provided information is true and accurate.
          </Text>
        </Box>
        <Box className="lg:grid lg:justify-center w-full lg:mt-[48px] mt-[40px] lg:mb-[48px] mb-[36.63px] max-w-[419px] m-auto">
          <Button
            onClick={() => router.push("/../Client_dashboard")}
            backgroundColor={"#031966"}
            color={"white"}
            _hover={{
              backgroundColor: "#FE9534",
            }}
            className={`hover:bg-[#FE9534] duration-500 hover:text-white text-white border lg:grid  lg:justify-center shadow-xl items-center w-full lg:w-[420px] h-[48px] rounded-full border-[#FE9534]`}
          >
            <Text>Submit</Text>
          </Button>
        </Box>
      </Box>
      {/* {openSuccessfull? <SuccessDelivery firstBody={`Your Company’s Verification was successful.
Please, click proceed to enter your Bank datails`} openSuccessfull={openSuccessfull} setOpenSuccessfull={setOpenSuccessfull}  bodyfunction={bankRoute} />:''} */}
    </Box>
  );
}
