"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Box, Button, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
//  import imp from '../../Dashboard/OrderDetails/${}'
import CourierModal from "../Modal/CourierModal";
import { Pagination } from "@/app/Dashboard/page";
function TrackTable({ setDisplayBtn }) {
  const [showModal, setShowModal] = useState(false);
  const toogleModal = () => {
    setShowModal(!showModal);
  };
  const router = useRouter();
  const column = [
    {
      name: "Date Picked",
      selector: (row) => (
        <Text className="text-[12px]">
          {row.date} {row.time}
        </Text>
      ),
      wrap: true,
    },
    {
      name: "Client",
      selector: (row) => <Text className="text-[12px]">{row.Client}</Text>,
      wrap: true,
    },

    {
      name: "location",
      selector: (row) => (
        <Text className="text-[12px]">{row.Pick_Up_Location}</Text>
      ),
      wrap: true,
    },
    {
      name: "Partners",
      selector: (row) => <Text className="text-[12px]">{row.partner}</Text>,
      wrap: true,
    },
    {
      name: "Receiver",
      selector: (row) => (
        <Box>
          <Text className="text-[12px]">
            <span className=" font-semibold">Name:</span>
            {row.Recievers_Name}
          </Text>
          <Text className="text-[12px]">
            <span className=" font-semibold mt-[5px]">Contact:</span>
            {row.Recievers_Number}
          </Text>
        </Box>
      ),
      wrap: true,
    },
    {
      name: "location",
      selector: (row) => (
        <Text className="text-[12px]">{row.Pick_Up_Location}</Text>
      ),
      wrap: true,
    },
    {
      name: "Rider details",
      selector: (row) => (
        <Box>
          <Text className="text-[12px]">
            <span className=" font-semibold">Name:</span>
            {row.Rider_Name}
          </Text>
          <Text className="text-[12px]">
            <span className=" font-semibold mt-[5px]">Contact:</span>
            {row.Rider_Number}
          </Text>
        </Box>
      ),
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <Box
          roundedLeft={"full"}
          roundedRight={"full"}
          backgroundColor={
            (row.Status === "Paid" && "#DEEBFC") ||
            (row.Status === "Unpaid" && "#FFF2D1")
          }
          className={`h-[32px] w-[94px] grid justify-center items-center ${
            row.status === "online" ? "bg-[#1EBD5D]" : "bg-[#DEEBFC]"
          }`}
        >
          <Text
            color={
              (row.Status === "Paid" && "#398EF1") ||
              (row.Status === "Unpaid" && "#FE9534") ||
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
  ];
  const Data = [
    {
      id: 1,
      Item: "Nike Airforce",
      Client: "JUMIA",
      partner: "Leroy",
      RecieverName: "Sazuke",
      City: "Apapa",
      State: "Lagos",
      Status: "Picked",
      order_Id: "#0000248",
      date: "24/04/2023",
      time: "04:25pm",
      Pick_Up_Location: "Ikeja Hub",
      Drop_Off_Location: "Ikeja City Mall, Ikeja Lagos.",
      Recievers_Name: "Mustapha Balarabe",
      Recievers_Number: "+2347065786732",
      Rider_Name: "Oshuperu Emmanuel",
      Rider_Number: "+2347065786732",
    },
    {
      id: 2,
      Item: "Laptop stands",
      Client: "JUMIA",
      partner: "Leroy",
      RecieverName: "Akatsuki",
      City: "Hidden leaf",
      State: "Horkage",
      Status: "Not picked",
      order_Id: "#0000248",
      date: "24/04/2023",
      time: "04:25pm",
      Pick_Up_Location: "Ikeja Hub",
      Drop_Off_Location: "Ikeja City Mall, Ikeja Lagos.",
      Recievers_Name: "Mustapha Balarabe",
      Recievers_Number: "+2347065786732",
      Rider_Name: "Oshuperu Emmanuel",
      Rider_Number: "+2347065786732",
    },
    {
      id: 3,
      Item: "Router",
      Client: "JUMIA",
      partner: "Leroy",
      RecieverName: "Lee",
      City: "Ojuelegba",
      State: "Lagos",
      Status: "Ongoing",
      order_Id: "#0000248",
      date: "24/04/2023",
      time: "04:25pm",
      Pick_Up_Location: "Ikeja Hub",
      Drop_Off_Location: "Ikeja City Mall, Ikeja Lagos.",
      Recievers_Name: "Mustapha Balarabe",
      Recievers_Number: "+2347065786732",
      Rider_Name: "Oshuperu Emmanuel",
      Rider_Number: "+2347065786732",
    },
    {
      id: 4,
      Item: "Mifi",
      Client: "JUMIA",
      partner: "Leroy",
      RecieverName: "Anita",
      City: "Shagari village",
      State: "Akure",
      Status: "Delivered",
      order_Id: "#0000248",
      date: "24/04/2023",
      time: "04:25pm",
      Pick_Up_Location: "Ikeja Hub",
      Drop_Off_Location: "Ikeja City Mall, Ikeja Lagos.",
      Recievers_Name: "Mustapha Balarabe",
      Recievers_Number: "+2347065786732",
      Rider_Name: "Oshuperu Emmanuel",
      Rider_Number: "+2347065786732",
    },
    {
      id: 5,
      Item: "Cupboard",
      Client: "JUMIA",
      partner: "Leroy",
      RecieverName: "Ayomide",
      City: "Ijoka",
      State: "Akure",
      Status: "Delivered",
      order_Id: "#0000248",
      date: "24/04/2023",
      time: "04:25pm",
      Pick_Up_Location: "Ikeja Hub",
      Drop_Off_Location: "Ikeja City Mall, Ikeja Lagos.",
      Recievers_Name: "Mustapha Balarabe",
      Recievers_Number: "+2347065786732",
      Rider_Name: "Oshuperu Emmanuel",
      Rider_Number: "+2347065786732",
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        borderRight: "",
        backgroundColor: "#FE9534",
        color: "white", // Add border to column headers
      },
    },
    // cells: {
    //   style: {
    //     borderRight:``, // Add border between columns in the body
    //   },
    // },
  };
  return (
    <Box className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 z-0 ">
      <Box
        border="1px"
        borderColor="gray.300"
        borderRadius="lg"
        className="pb-[20px] bg-white z-0 overflow-hidden"
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
  );
}

export default TrackTable;
