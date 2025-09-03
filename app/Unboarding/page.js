"use client";
import React, { useState, useRef } from "react";
import { Box, Input, Progress, Button, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import Image from "next/image";
import ChakraInputs from "../Components/Inputs/ChakraInputs";
import InputsComplex from "../Components/Inputs/InputComplex";
import GoogleLocationInput from "../Components/Inputs/GoogleLocationInput";
import ChakraFormDate from "../Components/Inputs/ChakraFormDate";
import Initial_profile from "../Components/Card/Initial_Profile";
import { Georama } from "next/font/google";
//import imp from ''
const georama = Georama({ subsets: ["latin"], weight: ["400", "700"] });

function Page() {
  const toast = useToast();
  const router = useRouter();
  const fileref = useRef(null);

  const [profiles, setProfileData] = useState({});
  const [fileName, setFileName] = useState("");

  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_no: "",
    profile_photo_path: "",
    dob: "",
    gender: "",
    account_type: "",
    user_type: "",
    location: "",
    city: "",
    state: "",
    country: "Nigeria",
  });

  const onPick = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormValues({ ...formValues, [event.target.name]: file });
      setFileName(file.name);
    }
  };

  return (
    <Box className=" w-10/12 m-auto">
      <Box className=" mt-[20px]">
        <Text
          className={`lg:text-[24px] text-[20px] font-bold ${georama.className}`}
        >
          Leroy
        </Text>
        <Text className="text-[16px] mt-[6px] text-[#FE9534]">
          Complete your profile
        </Text>
      </Box>

      {/* Profile Section */}
      <Box
        border={"1px"}
        borderColor={"#D2D2D2"}
        borderRadius={"10px"}
        className="rounded-lg lg:mt-[30px] mt-[32px] border-[#D2D2D2] border"
      >
        <Box className="grid grid-cols-2 lg:grid-cols-6">
          <Box className="w-11/12 m-auto lg:col-span-3 lg:min-h-[257.31px] grid items-center">
            <Box className="lg:flex gap-x-[24px]">
              <Box>
                <Box className="w-[152px] pt-[5px]">
                  <Initial_profile profile initials={"OA"} />
                </Box>
                <Box className=" mt-[10px] w-full">
                  <Button
                    onClick={() => fileref.current.click()}
                    className="lg:mt-[30px] mt-[50px] w-[152px] h-[34px] items-center lg:grid hidden text-sm text-white bg-[#FE9534] text-center rounded-lg"
                  >
                    Change Photo
                    <Input
                      type="file"
                      accept="image/*"
                      name="profile_photo_path"
                      onChange={handleFileChange}
                      className="hidden"
                      ref={fileref}
                    />
                  </Button>
                  {fileName && (
                    <Text className="mt-[10px] text-sm text-gray-600 pl-[5px]">
                      Selected: {fileName}
                    </Text>
                  )}
                </Box>
              </Box>

              <Box>
                <Text className="lg:grid hidden lg:text-[20px] font-bold mt-[5px]">
                  LEROY
                </Text>
                <Box>
                  <Text
                    as="span"
                    className="lg:mt-[10px] lg:block hidden text-[14px] lg:text-[16px]"
                  >
                    Location:{" "}
                    <Text as="span" fontWeight="semibold">
                      Dennmmickk railway
                    </Text>
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Basic Information */}
      <Box className="lg:mt-[20px] mt-[24px]">
        <Box
          borderBottom={"2px"}
          borderBottomColor={"#FE9534"}
          className="border-b-2 border-b-[#FE9534] w-fit"
        >
          <Text className="text-[16px] lg:text-[18px]">Basic Information</Text>
        </Box>

        <Box className="grid h-fit lg:grid-cols-2 gap-y-[26px] lg:gap-y-[20px] gap-x-[60px] mt-[20px] justify-center">
          <InputsComplex
            labelling="Company Name"
            placing="Enter your Company Nmae"
            icon={<FaRegEnvelope />}
            signupfunction={onPick}
            signupvalues={formValues.companyName}
            names="companyName"
          />
          <InputsComplex
            labelling="Email"
            placing="Enter your Email"
            icon={<FaRegEnvelope />}
            signupfunction={onPick}
            signupvalues={formValues.email}
            names="email"
          />
          <InputsComplex
            labelling="CAC Number"
            placing="Enter Company CAC number"
            icon={<FaRegEnvelope />}
            signupfunction={onPick}
            signupvalues={formValues.lname}
            names="cacNumber"
          />
          <ChakraFormDate
            labeling="CAC Date of Registration"
            placing="Enter your date of birth"
            signupfunction={onPick}
            signupvalues={formValues.dob}
            names="dob"
            inputType="date"
          />
          <InputsComplex
            labelling="Phone Number"
            placing="+234: 8034792145"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#A5A6AB"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 4.5C2 3.67 2.67 3 3.5 3h2.75c.69 0 1.27.56 1.39 1.24l.57 3.14c.09.53-.16 1.07-.63 1.34l-1.3.75c1.07 2.17 2.83 3.93 5 5l.75-1.3c.27-.47.81-.72 1.34-.63l3.14.57c.68.12 1.24.7 1.24 1.39V20.5c0 .83-.67 1.5-1.5 1.5C9.16 22 2 14.84 2 6.5V4.5z"
                />
              </svg>
            }
            signupfunction={onPick}
            signupvalues={formValues.phone_no}
            names="phone_no"
          />
          <GoogleLocationInput
            readOnly
            labeling="State"
            placingtext="Enter State"
            changes={onPick}
            values={formValues.state}
            names="state"
            setState={setFormValues}
            pickUpReqData={formValues}
          />
          <InputsComplex
            labelling="Address"
            placing="Enter your address"
            icon={<CiLocationOn />}
            signupfunction={onPick}
            signupvalues={formValues.location}
            names="location"
          />
          <InputsComplex
            labelling="City"
            placing="Enter your City"
            icon={<CiLocationOn />}
            signupfunction={onPick}
            signupvalues={formValues.city}
            names="city"
          />
        </Box>

        {/* Submit */}
        <Box className="lg:grid lg:w-full justify-center mt-[52px] mb-[40px]">
          <Button
            onClick={() => router.push("/../Verification")}
            backgroundColor="#031966"
            color="white"
            _hover={{ shadow: "md", backgroundColor: "#FE9534" }}
            className="bg-[#031966] hover:bg-[#FE9534] duration-500 text-white shadow-xl w-full lg:w-[420px] h-[48px] rounded-full"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Page;
