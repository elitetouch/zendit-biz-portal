"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Jumia from "../../../public/cardAvatar.svg";
import { MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
//  import imp from '../../Dashboard/OrderDetails/${}'

function RidersTable({ setDisplayBtn }) {
  const router = useRouter();
  const column = [
    {
      name: "Courier ID",
      selector: (row) => <Text className="text-[12px]">{row.date}</Text>,
    },
    {
      name: "Name",
      selector: (row) => (
        <Box className=" flex items-center gap-x-[5px]">
          <Image src={row.icon} alt="" />
          <Text className="text-[12px]">{row.client}</Text>
        </Box>
      ),
    },
    {
      name: "Contact",
      selector: (row) => <Text className="text-[12px]">{row.contact}</Text>,
    },
    {
      name: "City",
      selector: (row) => <Text className="text-[12px]">{row.city}</Text>,
    },
    {
      name: "State",
      selector: (row) => <Text className="text-[12px]">{row.state}</Text>,
    },

    {
      name: "Address",
      selector: (row) => <Text className="text-[12px]">{row.address}</Text>,
    },
    {
      name: "Action",
      selector: (row) => (
        <Box>
          <Tooltip label="Delete this user" placement="top" hasArrow>
            <IconButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M10 11v6M14 11v6M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" />
                </svg>
              }
            />
          </Tooltip>
          <Tooltip label="Suspend this user" placement="top" hasArrow>
            <IconButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 15.59L6.41 7 7.83 5.59 18.41 16 17 17.59Z" />
                </svg>
              }
              className=" ml-[10px]"
              marginLeft={3}
            />
          </Tooltip>
        </Box>
      ),
    },

    //       {
    //   name:'Completed',selector:row =><Text className='text-[12px]'>{row.completed}</Text>
    // },
  ];
  const Data = [
    {
      id: 1,
      name: "Alade",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Paid",
      date: "2/08/2050",
      client: "Alade",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
      contact: "09065345627",
      address: "Asherifa, Road H, Ile-Ife Osun State",
      city: "Oritamefa",
      state: "Ibadan",
    },
    {
      id: 2,
      client: "Ruben",
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
      contact: "09065345627",
      address: "Asherifa, Road H, Ile-Ife Osun State",
      city: "Oritamefa",
      state: "Ibadan",
    },
    {
      id: 3,
      name: "GUO",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Unpaid",
      date: "2/08/2050",
      client: "Peter",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
      contact: "09065345627",
      address: "Asherifa, Road H, Ile-Ife Osun State",
      city: "Oritamefa",
      state: "Ibadan",
    },
    {
      id: 4,
      name: "Jumia",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Unpaid",
      date: "2/08/2050",
      client: "Ade",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
      contact: "09065345627",
      address: "Asherifa, Road H, Ile-Ife Osun State",
      city: "Oritamefa",
      state: "Ibadan",
    },
    {
      id: 5,
      client: "Victor James",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Unpaid",
      date: "2/08/2050",
      client: "Victor James",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
      contact: "09065345627",
      address: "Asherifa, Road H, Ile-Ife Osun State",
      city: "Oritamefa",
      state: "Ibadan",
    },
  ];
  const customStyles = {
    headCells: {
      style: {
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
    <Box>
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
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RidersTable;
