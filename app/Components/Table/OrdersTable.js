"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Box, Button, Select, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
//  import imp from '../../Dashboard/OrderDetails/${}'
import CourierModal from "../Modal/CourierModal";
import { Pagination } from "@/app/Dashboard/page";
function OrdersTable({ Client }) {
  const [showModal, setShowModal] = useState(false);
  const toogleModal = () => {
    setShowModal(!showModal);
  };
  const router = useRouter();
  const column = [
    {
      name: "Order ID",
      selector: (row) => (
        <Text className="text-[12px]">
          {row.Item} ({row.order_Id})
        </Text>
      ),
    },
    {
      name: "Date",
      selector: (row) => (
        <Text className="text-[12px]">
          {row.date} {row.time}
        </Text>
      ),
    },

    {
      name: "Pick up location",
      selector: (row) => (
        <Text className="text-[12px]">{row.Pick_Up_Location}</Text>
      ),
    },
    {
      name: "Drop off location",
      selector: (row) => (
        <Text className="text-[12px]">{row.Drop_Off_Location}</Text>
      ),
    },
    {
      name: "Riders Details",
      selector: (row) => (
        <Box>
          <Text className="text-[12px]">
            <span className=" font-semibold">Name:</span>
            {row.Rider_Name}
          </Text>
          <Text className="text-[12px] pt-[5px]">
            <span className=" font-semibold pt-[5px]">Contact:</span>
            {row.Rider_Number}
          </Text>
        </Box>
      ),
    },
    {
      name: "Receiver Details",
      selector: (row) => (
        <Box>
          <Text className="text-[12px]">
            <span className=" font-semibold">Name:</span>
            {row.Recievers_Name}
          </Text>
          <Text className="text-[12px] pt-[5px]">
            <span className=" font-semibold pt-[5px]">Contact:</span>
            {row.Recievers_Number}
          </Text>
        </Box>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <Box className=" flex ">
          {/* <Button
          
            roundedLeft={'full'}
            roundedRight={'full'}
            width={100}
            backgroundColor={'#DEEBFC'} color={'#398EF1'} onClick={()=>{toogleModal()}}>
                <Text className=' text-[12px]'>Assign to</Text>
            </Button> */}
          {Client ? (
            <Select
              backgroundColor={"#DEEBFC"}
              roundedLeft={"full"}
              roundedRight={"full"}
              color={"#398EF1"}
              fontSize={10}
              placeholder="SELECT RIDER"
            >
              <option>Oyeniyan Ayomide</option>
              <option>Oshuperu Emmanuel</option>
              {/* <option>JUO</option> */}
            </Select>
          ) : (
            <Select
              backgroundColor={"#DEEBFC"}
              roundedLeft={"full"}
              roundedRight={"full"}
              color={"#398EF1"}
              fontSize={10}
              placeholder="SELECT PARTNER"
            >
              <option>JUO</option>
              <option>LERROY</option>
              {/* <option>JUO</option> */}
            </Select>
          )}
        </Box>
      ),
    },
  ];
  const Data = [
    {
      id: 1,
      Item: "Nike Airforce",
      Client: "JUMIA",
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
      Rider_Name: "John Doe",
      Rider_Number: "+2347065786732",
    },
    {
      id: 2,
      Item: "Laptop stands",
      Client: "GUO motors",
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
      Rider_Name: "John Doe",
      Rider_Number: "+2347065786732",
    },
    {
      id: 3,
      Item: "Router",
      Client: "JOY MART",
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
      Rider_Name: "John Doe",
      Rider_Number: "+2347065786732",
    },
    {
      id: 4,
      Item: "Mifi",
      Client: "ANATA",
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
      Rider_Name: "John Doe",
      Rider_Number: "+2347065786732",
    },
    {
      id: 17,
      Item: "Cupboard",
      Client: "LERROY",
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
      Rider_Name: "John Doe",
      Rider_Number: "+2347065786732",
    },
    ,
    {
      id: 18,
      Item: "Cupboard",
      Client: "LERROY",
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
      Rider_Name: "John Doe",
      Rider_Number: "+2347065786732",
    },
    ,
    {
      id: 19,
      Item: "Cupboard",
      Client: "LERROY",
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
      Rider_Name: "John Doe",
      Rider_Number: "+2347065786732",
    },
    ,
    {
      id: 20,
      Item: "Cupboard",
      Client: "LERROY",
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
      Rider_Name: "John Doe",
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
    <Box className="grid gap-4">
      <Box
        border="1px"
        borderColor="gray.300"
        borderRadius="lg"
        className="pb-[20px] bg-white rounded-lg w-full overflow-hidden"
      >
        {/* Table container with horizontal scroll on small devices */}
        <Box className="overflow-x-auto">
          <DataTable
            columns={column}
            data={Data}
            highlightOnHover
            customStyles={customStyles}
            responsive
          />
        </Box>
      </Box>

      {/* Pagination stays below table */}
      <Box className="">
        <Pagination />
      </Box>

      {/* Modal stays above content */}
      {showModal && (
        <CourierModal
          setOpenSuccessfull={toogleModal}
          openSuccessfull={showModal}
        />
      )}
    </Box>
  );
}

export default OrdersTable;
