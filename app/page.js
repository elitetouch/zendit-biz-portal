'use client'
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import ChakraInputs from "./Components/Inputs/ChakraInputs";
import signIn from '../public/logo.svg'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
//  import imp from './Dashboard'
export default function Home() {
   const router = useRouter()
  const toast = useToast()
  const formdata={
    email:'',
    password:''
  }
  const [signInDetails, setSignInDetails] = useState(formdata)
  const [signInLoader, setSignInLoader] = useState(false)
  const handleSignInChange= (e)=>{
    setSignInDetails({...signInDetails,[e.target.name]:e.target.value})
  }
   const submitLogin=()=>{
    const formData = new FormData()
    formData.append('email', signInDetails.email)
     formData.append('password', signInDetails.password)
   }
  return (
    <div>
    <div className=" lg:min-h-screen ">
      {/* <button onClick={()=>router.push('/')}>
        payment link
      </button> */}
      <div className="   grid grid-cols-1 lg:grid-cols-2">
        <div className="grid justify-center  bg-[#031966] min-h-screen ">
          <div className=" w-9/12 ml-auto mr-auto">
             <div className="
              rounded-lg w-fit pt-[90px]  ">
              <Image             
                alt=""
                src={signIn}
                className="rounded-lg h-fit "
              />
            </div>
            <div className="grid mt-[100px]">
              <Text className=" text-white text-center lg:text-left font-bold text-[32px] lg:text-[40px] grid  ">
                Welcome  Admin!
              </Text>
              <p className=" text-[15px] mb-[32px] pt-[80px] font-medium text-white leading-12">
               Welcome to Zendit Technology  Admin dashboard
Carefully input your login details to get started on today’s activities.
              </p>
            </div>
           
          </div>
        </div>
        <Box className=" bg-[#FE9534]">
        <div className=" lg:mt-[55px] lg:w-8/12 w-full m-auto">
        <Box>
          <Text className=" text-[30px] text-center font-semibold text-white  mt-[40px]">Log in</Text>
        </Box>
          <div className=" mt-[48px] lg:pt-[80px]">         
              <div>
                <ChakraInputs
                label={'Email'}
                whiteBorder
//                  values={signInDetails.email} handleChange={handleSignInChange} names={'email'} placing={'Email'} icon={<svg
//   width="20"
//   height="20"
//   viewBox="0 0 20 20"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     fillRule="evenodd"
//     clipRule="evenodd"
//     d="M15.8323 17.5C17.6732 17.5 19.1656 16.0076 19.1656 14.1667V6.68557C19.1659 6.67283 19.1659 6.66005 19.1656 6.64725V5.83333C19.1656 3.99238 17.6732 2.5 15.8323 2.5H4.16559C2.32464 2.5 0.832253 3.99238 0.832253 5.83333V6.64726C0.831957 6.66005 0.831958 6.67282 0.832253 6.68557V14.1667C0.832253 16.0076 2.32464 17.5 4.16559 17.5H15.8323ZM2.49892 14.1667C2.49892 15.0871 3.24511 15.8333 4.16559 15.8333H15.8323C16.7527 15.8333 17.4989 15.0871 17.4989 14.1667V7.89753L11.2369 10.4023C10.4422 10.7202 9.55565 10.7202 8.76095 10.4023L2.49892 7.89753V14.1667ZM10.6179 8.85488L17.4989 6.10247V5.83333C17.4989 4.91286 16.7527 4.16667 15.8323 4.16667H4.16559C3.24511 4.16667 2.49892 4.91286 2.49892 5.83333V6.10247L9.37993 8.85488C9.77729 9.01382 10.2206 9.01382 10.6179 8.85488Z"
//     fill="#A5A6AB"
//   />
// </svg>
// } 
                />
              </div>
              <div className=" mt-[24px] lg:mt-[40px]">
                <ChakraInputs
                label={'Password'}
                whiteBorder
//                  password values={signInDetails.password} handleChange={handleSignInChange} names={'password'} placing={'Password'} icon={<svg
//   width="20"
//   height="20"
//   viewBox="0 0 20 20"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     d="M10.8346 12.4997C10.8346 12.0394 10.4615 11.6663 10.0013 11.6663C9.54106 11.6663 9.16797 12.0394 9.16797 12.4997V14.1663C9.16797 14.6266 9.54106 14.9997 10.0013 14.9997C10.4615 14.9997 10.8346 14.6266 10.8346 14.1663V12.4997Z"
//     fill="#A5A6AB"
//     fillOpacity="0.88"
//   />
//   <path
//     fillRule="evenodd"
//     clipRule="evenodd"
//     d="M15.0013 5.83301C15.0013 3.07158 12.7627 0.833008 10.0013 0.833008C7.23988 0.833008 5.0013 3.07158 5.0013 5.83301V7.49967C3.16035 7.49967 1.66797 8.99206 1.66797 10.833V15.833C1.66797 17.674 3.16035 19.1663 5.0013 19.1663H15.0013C16.8423 19.1663 18.3346 17.674 18.3346 15.833V10.833C18.3346 8.99206 16.8423 7.49967 15.0013 7.49967V5.83301ZM6.66797 5.83301C6.66797 3.99206 8.16035 2.49967 10.0013 2.49967C11.8423 2.49967 13.3346 3.99206 13.3346 5.83301V7.49967H6.66797V5.83301ZM3.33464 10.833C3.33464 9.91253 4.08083 9.16634 5.0013 9.16634H15.0013C15.9218 9.16634 16.668 9.91253 16.668 10.833V15.833C16.668 16.7535 15.9218 17.4997 15.0013 17.4997H5.0013C4.08083 17.4997 3.33464 16.7535 3.33464 15.833V10.833Z"
//     fill="#A5A6AB"
//     fillOpacity="0.88"
//   />
// </svg>

// }
                />
              </div>
              <div className=" mt-[40px] flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  
                    <input type="checkbox" className=" h-[24px] w-[24px]" />
                 
                  <div className=" text-[15px] text-white">Remember me</div>
                </div>
                {/* <button  className="text-[#FF5252] text-[15px]">Forget password?</button> */}
              </div>
              <div className="flex justify-center w-full ">
                <div className=" mt-[70px] w-10/12 m-auto lg:w-fit">
                  <Button
                  onClick={()=>router.push(`/./Dashboard`)}
                  backgroundColor={'#031966'}
                  color={'white'}
                  _hover={{shadow:'md',
                    backgroundColor:'#FE9534'
                  }}
                    className=" bg-[#031966] hover:bg-[#FE9534] hover:shadow-md duration-500 text-white border flex justify-center shadow-xl items-center w-full lg:w-[420px] h-[48px] rounded-full border-[#FE9534]"
                  >
                      login                 
                  </Button>
                    <Button
                  onClick={()=>router.push(`/./Client_dashboard`)}
                  backgroundColor={'#031966'}
                  color={'white'}
                  marginTop={5}
                  _hover={{shadow:'md',
                    backgroundColor:'#FE9534'
                  }}
                    className=" bg-[#031966] hover:bg-[#FE9534] mt-[20px] hover:shadow-md duration-500 text-white border flex justify-center shadow-xl items-center w-full lg:w-[420px] h-[48px] rounded-full border-[#FE9534]"
                  >
                      login Client                
                  </Button>
                </div>
              </div>
           
          </div>
          <div className="flex justify-center ">
            <div className=" mt-[20px]">
              <h1 className=" text-white">
                You dont have an account?{" "}
                <span className=" text-[#031966] font-bold">
                  <button onClick={() => {
                    router.push("/./SignUp")}}>
                    Sign up Here
                  </button>
                </span>{" "}
              </h1>
            </div>
          </div>
          
        </div>

        </Box>
      </div>
    </div>
    </div>
  );
}
