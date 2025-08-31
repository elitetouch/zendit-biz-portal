"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Box, Button, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useToast } from "@chakra-ui/react";
import courier_image from "../../../public/cardAvatar.svg";
//  import imp from '../../Dashboard/OrderDetails/${}'

function CourierTable({ setDisplayBtn }) {
  const router = useRouter();
  const toast = useToast();
  const AssignFunction = () => {
    toast({
      title: "Assign Order",
      description:
        "Success! you have just successfully assigned order to Anata Logistics Company, Check Logistics Company Panel To Track Order",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  const column = [
    {
      name: "Name of Courier",
      selector: (row) => (
        <Box className=" flex items-center gap-x-[10px]">
          <Box className=" h-[20px] w-[20px] rounded-full">
            <Image
              alt=""
              src={row.courier_image}
              width={20}
              height={20}
              className=" rounded-full"
            />
          </Box>
          <Text className="text-[12px]">{row.courier_firstName}</Text>
        </Box>
      ),
    },
    {
      name: "Phone Number",
      selector: (row) => <Text className="text-[12px]">{row.phoneNumber}</Text>,
    },
    {
      name: "Package Assigned",
      selector: (row) => (
        <Text className="text-[12px]">{row.package_assigned}</Text>
      ),
    },
    {
      name: "Location",
      selector: (row) => <Text className="text-[12px]">{row.location}</Text>,
    },
    {
      name: "Status",
      selector: (row) => (
        <Box
          roundedLeft={"full"}
          roundedRight={"full"}
          backgroundColor={
            (row.Status === "online" && "#1EBD5D") ||
            (row.Status === "offline" && "#DEEBFC")
          }
          className={`h-[32px] w-[94px] grid justify-center items-center ${
            row.status === "online" ? "bg-[#1EBD5D]" : "bg-[#DEEBFC]"
          }`}
        >
          <Text
            color={
              (row.Status === "online" && "white") ||
              (row.Status === "offline" && "#667185") ||
              (row.Status === "Ongoing" && "gray") ||
              (row.Status === "Delivered" && "green")
            }
            className="text-[12px] font-semibold"
          >
            {row.Status}
          </Text>
        </Box>
      ),
    },

    //       {
    //         name:'Action',selector:row =><Box className=' flex'>
    //             <Button backgroundColor={'#DEEBFC'} onClick={AssignFunction}
    //               width={120}

    //               roundedLeft={'full'}
    //               roundedRight={'full'}
    //               >
    //               <Box className=' flex items-center gap-x-[10px]'>
    //                 <Text className=' text-[12px] text-[#398EF1]'>Assign Package</Text>
    //                 <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path d="M6 1.67969V6.67969M6 6.67969V11.6797M6 6.67969H11M6 6.67969H1" stroke="#398EF1" stroke-width="2" stroke-linecap="round"/>
    // </svg>
    //               </Box>
    //             </Button>
    //         </Box>
    //       },
  ];
  const Data = [
    {
      id: 1,
      firstName: "Orochimaru",
      lastName: "Seenju",
      address: "Iyanapaja",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Nike Airforce",
      Client: "LERROY",
      order_Id: "#0000248",
      package_assigned: "50",
      courier_firstName: "Oyesola",
      courier_image: courier_image,
    },
    {
      id: 2,
      firstName: "Juraya",
      lastName: "Kokichibo",
      address: "Mile2",
      state: "Lagos",
      city: "Lekki",
      Status: "offline",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Laptop stands",
      order_Id: "#0000248",
      package_assigned: "20",
      courier_firstName: "Samson",
      courier_image: courier_image,
    },
    {
      id: 3,
      firstName: "Orochimaru",
      lastName: "Seenju",
      address: "Iyanapaja",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Router",
      order_Id: "#0000248",
      package_assigned: "90",
      courier_firstName: "Oyeniyan",
      courier_image: courier_image,
    },
    {
      id: 4,
      firstName: "Juraya",
      lastName: "Kokichibo",
      address: "Mile2",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Mifi",
      order_Id: "#0000248",
      package_assigned: "2",
      courier_firstName: "Okopuje",
      courier_image: courier_image,
    },
    {
      id: 16,
      firstName: "Ashirama",
      lastName: "Sazuke",
      address: "Mile2",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Cupboard",
      order_Id: "#0000248",
      package_assigned: "5",
      courier_firstName: "Goddey",
      courier_image: courier_image,
    },
    {
      id: 17,
      firstName: "Ashirama",
      lastName: "Sazuke",
      address: "Mile2",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Iphone",
      order_Id: "#0000248",
      package_assigned: "10",
      courier_firstName: "Samson",
      courier_image: courier_image,
    },
    {
      id: 18,
      firstName: "Ashirama",
      lastName: "Sazuke",
      address: "Mile2",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Cupboard",
      order_Id: "#0000248",
      package_assigned: "8",
      courier_firstName: "Peter",
      courier_image: courier_image,
    },
    {
      id: 19,
      firstName: "Ashirama",
      lastName: "Sazuke",
      address: "Mile2",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Bag",
      order_Id: "#0000248",
      package_assigned: "5",
      courier_firstName: "Oshuperu",
      courier_image: courier_image,
    },
    {
      id: 20,
      firstName: "Ashirama",
      lastName: "Sazuke",
      address: "Mile2",
      state: "Lagos",
      city: "Lekki",
      Status: "online",
      phoneNumber: "08168848735",
      location: "Paris Hotel Quarry Rd, Bourdilon, Ikeja Lagos.",
      Item: "Cupboard",
      order_Id: "#0000248",
      package_assigned: "9",
      courier_firstName: "Justin",
      courier_image: courier_image,
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        borderRight: "",
        backgroundColor: "#E5E7EB",
        color: "#1F2024", // Add border to column headers
      },
    },
    // cells: {
    //   style: {
    //     borderRight:``, // Add border between columns in the body
    //   },
    // },
  };
  return (
    <Box className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 z-0 lg:grid max-h-[40vh] ">
      <Box
        border="1px"
        borderColor="gray.300"
        borderRadius="lg"
        //marginBottom={20}
        className="pb-[10px] bg-white z-0 overflow-hidden mb-[10px] "
      >
        <Box position="unset" className="overflow-x-auto z-0">
          <DataTable
            columns={column}
            data={Data}
            highlightOnHover
            customStyles={customStyles}
            responsive
          />
        </Box>
      </Box>
    </Box>
    //    <Box className="lg:grid max-h-[40vh]">
    //   <Box border="1px" borderColor="gray.300" borderRadius="lg" className="pb-[20px]  bg-white rounded-lg">
    //     <Box className="overflow-x-auto">
    //       <DataTable
    //         columns={column}
    //         data={Data}
    //         highlightOnHover
    //         customStyles={customStyles}
    //       />
    //     </Box>
    //   </Box>
    // </Box>
  );
}

export default CourierTable;
