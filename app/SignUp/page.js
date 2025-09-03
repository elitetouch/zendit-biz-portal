"use client";
import Image from "next/image";
import { Box, Text, Button, useToast } from "@chakra-ui/react";
import ChakraInputs from "../Components/Inputs/ChakraInputs";
import signIn from "../../public/signin.jpg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
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
    router.push("/../Unboarding");
  };

  return (
    <Box>
      <Box className="w-11/12 m-auto lg:w-10/12 lg:h-screen ">
        <Box className=" lg:pt-[40px] pt-[30px]   grid grid-cols-1 lg:grid-cols-2">
          {/* Left section */}
          <Box className="grid justify-center ">
            <Box>
              <Box className="grid">
                <Text className=" text-[#FE9534] text-center lg:text-left font-bold text-[30px] lg:text-[40px] grid  ">
                  Welcome Admin!
                </Text>
                <Text className=" text-[16px] xl:text-[17px] mb-[32px] lg:pt-[20px] pt-[10px] font-medium text-shadow">
                  Carefully input{" "}
                  <Text as="span" className=" text-[#FE9534]">
                    all details{" "}
                  </Text>
                  to register as an admin.
                </Text>
              </Box>
              <Box className=" mt-[30px] rounded-lg w-fit lg:block hidden ">
                <Image alt="" src={signIn} className="rounded-lg h-fit " />
              </Box>
            </Box>
          </Box>

          {/* Right section */}
          <Box className=" lg:mt-[55px] lg:w-10/12 w-full m-auto">
            <Box>
              <Text className=" text-[30px] text-center font-semibold text-[#FE9534] lg:grid hidden">
                Sign Up
              </Text>
            </Box>
            <Box className=" mt-[30px] lg:mt-[30px]">
              <Box className=" grid gap-y-[20px]">
                {/* Inputs */}
                <ChakraInputs
                  label={"First Name"}
                  values={signUpDetails.firstName}
                  handleChange={handleSignInChange}
                  names={"firstName"}
                  placing={"Please input First name"}
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
                        d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                />
                <ChakraInputs
                  label={"Last Name"}
                  values={signUpDetails.lastName}
                  handleChange={handleSignInChange}
                  names={"lastName"}
                  placing={"Please input lastName"}
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
                        d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                />
                <ChakraInputs
                  label={"Email"}
                  values={signUpDetails.email}
                  handleChange={handleSignInChange}
                  names={"email"}
                  placing={"Email"}
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                />
              </Box>

              <Box className=" mt-[24px] lg:mt-[22px]">
                <ChakraInputs
                  label={"Password"}
                  password
                  values={signUpDetails.password}
                  handleChange={handleSignInChange}
                  names={"password"}
                  placing={"Password"}
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
                        d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 10V8a6 6 0 1112 0v2m-9 0h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2z"
                      />
                    </svg>
                  }
                />
              </Box>
              <Box className=" mt-[24px] lg:mt-[22px]">
                <ChakraInputs
                  label={"Confirm Password"}
                  password
                  values={signUpDetails.confirm_password}
                  handleChange={handleSignInChange}
                  names={"confirm_password"}
                  placing={"Please input Confirm Password"}
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
                        d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 10V8a6 6 0 1112 0v2m-9 0h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2z"
                      />
                    </svg>
                  }
                />
              </Box>

              <Box className="flex justify-center w-full ">
                <Box className=" mt-[56px] w-10/12 m-auto lg:w-fit">
                  <Button
                    isLoading={signUpLoader}
                    onClick={submitLogin}
                    backgroundColor={"#031966"}
                    color={"white"}
                    _hover={{ shadow: "md", backgroundColor: "#FE9534" }}
                    className=" bg-[#031966] hover:bg-[#FE9534] hover:shadow-md duration-500 text-white border flex justify-center shadow-xl items-center w-full lg:w-[420px] h-[48px] rounded-full border-[#FE9534]"
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* Already have account */}
            <Box className="flex justify-center ">
              <Box className=" mt-[20px] mb-[40px]">
                <Text>
                  You already have an account?{" "}
                  <Text as="span" className=" text-[#031966] font-bold">
                    <button
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      Sign in Here
                    </button>
                  </Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
