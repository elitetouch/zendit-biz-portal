"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { useToast, Text, Select } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import CourierTable from "../Table/CourierTable";
// import { useToast } from '@chakra-ui/react';
function CourierModal({
  openSuccessfull,
  setOpenSuccessfull,
  setVerifyPayment,
}) {
  const toast = useToast();
  const router = useRouter();
  //   const AssignFunction =()=>{
  //      toast({
  //       title: 'Assign Order',
  //       description: 'Success! you have just successfully assigned order to Anata Logistics Company, Check Logistics Company Panel To Track Order',
  //       status: 'success',
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   }
  return (
    <>
      <Box
        opacity={0.97}
        zIndex={999}
        onClick={setOpenSuccessfull}
        className={`fixed inset-0  flex lg:justify-center lg:flex-row flex-col justify-end h-screen items-center  transition-colors  ${
          openSuccessfull ? "visible bg-[#1D1D29] " : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-lg lg:grid lg:max-h-none max-h-[80vh]  items-center lg:mt-auto mt-[240px] fixed lg:relative bottom-0 overscroll-y-auto custom-scrollbar flex flex-col lg:flex-none lg:w-9/12 w-full m-auto  shadow lg:h-fit  overflow-y-scroll  p-6 transition-all  `}
        >
          {/* <Box cursor={'pointer'} className='flex justify-center w-full lg:justify-end '>
                  <ImCancelCircle onClick={setOpenSuccessfull} color='#FF5252' className=' h-[27px] w-[27px] lg:grid hidden'/>
                  <div className=' bg-[#8C8E98] w-6/12 h-1 rounded-sm lg:hidden'></div>
                  </Box> */}
          <Box>
            <Box className=" flex items-center justify-between pt-[5px] lg:pt-[20px] lg:w-11/12 m-auto">
              <Text className=" font-semibold text-[20px]">Couriers</Text>
              <IconButton
                backgroundColor={"transparent"}
                onClick={() => setOpenSuccessfull()}
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99912 7.55879L17.4241 0.133789L19.5451 2.25479L12.1201 9.67979L19.5451 17.1048L17.4241 19.2258L9.99912 11.8008L2.57413 19.2258L0.453125 17.1048L7.87813 9.67979L0.453125 2.25479L2.57413 0.133789L9.99912 7.55879Z"
                      fill="#636267"
                    />
                  </svg>
                }
              />
            </Box>

            <Box className=" mt-[20px] lg:w-11/12 m-auto">
              <Box
                borderBottom="1px"
                borderColor="gray.300"
                className=" w-full"
              >
                <Box
                  borderBottom="1px"
                  borderColor="#031966"
                  className=" w-fit"
                >
                  <Text className=" pb-[2px]">All Couriers</Text>
                </Box>
              </Box>
              <Box className=" mt-[20px] mb-[20px]">
                <CourierTable />
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}
export default CourierModal;
