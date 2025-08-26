"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Box, Button, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Jumia from "../../../public/leroy.svg";
import { Select } from "@chakra-ui/react";
//  import imp from '../../Dashboard/OrderDetails/${}'

function FinancePartnersTable({ setDisplayBtn }) {
  const router = useRouter();
  const column = [
    {
      name: "Date",
      selector: (row) => <Text className="text-[12px]">{row.date}</Text>,
    },
    {
      name: "Partners",
      selector: (row) => (
        <Box className=" flex items-center gap-x-[5px]">
          <Image src={row.icon} alt="" />
          <Text className="text-[12px]">{row.client}</Text>
        </Box>
      ),
    },

    {
      name: "Assigned",
      selector: (row) => <Text className="text-[12px]">{row.assigned}</Text>,
    },
    {
      name: "Picked",
      selector: (row) => <Text className="text-[12px]">{row.picked}</Text>,
    },
    {
      name: "Completed",
      selector: (row) => <Text className="text-[12px]">{row.completed}</Text>,
    },
    {
      name: "Return",
      selector: (row) => <Text className="text-[12px]">{row.returned}</Text>,
    },
    {
      name: "Status",
      selector: (row) => (
        <Select
          size={"sm"}
          placeholder={row.Status}
          roundedLeft={"full"}
          roundedRight={"full"}
          fontSize={"12px"}
          color={
            (row.Status === "Paid" && "#398EF1") ||
            (row.Status === "Unpaid" && "red")
          }
          backgroundColor={
            (row.Status === "Paid" && "#DEEBFC") ||
            (row.Status === "Unpaid" && "#FFF2D1")
          }
          className={`h-[32px] w-[94px] grid justify-center items-center ${
            row.status === "online" ? "bg-[#1EBD5D]" : "bg-[#DEEBFC]"
          }`}
        >
          {/* <Text
            color={
              (row.Status === "Paid" && "#398EF1") ||
              (row.Status === "Unpaid" && "#FE9534") ||
              (row.Status === "Ongoing" && "gray") ||
              (row.Status === "Delivered" && "green")
            }
            className="text-[12px] font-semibold"
          >
            {row.Status}
          </Text> */}
          <option value="option1">Paid</option>
          <option value="option1">Unpaid</option>
        </Select>
      ),
    },
  ];
  const Data = [
    {
      id: 1,
      name: "Leroy",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Paid",
      date: "2/08/2050",
      client: "Leroy",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
    },
    {
      id: 2,
      client: "Leroy",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Unpaid",
      date: "2/08/2050",
      //client:'Jumia',
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
    },
    {
      id: 3,
      name: "Leroy",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Paid",
      date: "2/08/2050",
      client: "Leroy",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
    },
    {
      id: 4,
      name: "Leroy",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Paid",
      date: "2/08/2050",
      client: "Leroy",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
    },
    {
      id: 5,
      client: "Leroy",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Paid",
      date: "2/08/2050",
      client: "Jumia",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
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

export default FinancePartnersTable;
