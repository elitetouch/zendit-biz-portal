"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Box, Button, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Jumia from "../../../public/cardAvatar.svg";
import ClientAssignedTable from "./ClientAssigned";
import ModalComponent from "./ModalComponent";
import CourierModal from "../Modal/CourierModal";
//  import imp from '../../Dashboard/OrderDetails/${}'

function ClientPartnersTable({ setDisplayBtn }) {
  const router = useRouter();
  const [Assigned, setAssigned] = useState(false);
  const AssignedFunc = () => {
    setAssigned(!Assigned);
  };
  const [Pending, setPending] = useState(false);
  const PendingFunc = () => {
    setPending(!Pending);
  };
  const [Picked, setPicked] = useState(false);
  const PickedFunc = () => {
    setPicked(!Picked);
  };
  const [Completed, setCompleted] = useState(false);
  const CompletedFunc = () => {
    setCompleted(!Completed);
  };
  const [Riders, setRiders] = useState(false);
  const RidersFunc = () => {
    setRiders(!Riders);
  };
  const column = [
    {
      name: "Date",
      selector: (row) => <Text className="text-[12px]">{row.date}</Text>,
    },
    {
      name: "Riders",
      selector: (row) => (
        <Box
          cursor={"pointer"}
          onClick={RidersFunc}
          className=" flex items-center gap-x-[5px]"
        >
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
      name: "Address",
      selector: (row) => <Text className="text-[12px]">{row.address}</Text>,
    },
    {
      name: "Assigned",
      selector: (row) => (
        <Box cursor={"pointer"} onClick={AssignedFunc}>
          <Text className="text-[12px]">{row.assigned}</Text>
        </Box>
      ),
    },
    {
      name: "Pending",
      selector: (row) => (
        <Box cursor={"pointer"} onClick={PendingFunc}>
          <Text className="text-[12px]">{row.returned}</Text>
        </Box>
      ),
    },
    {
      name: "Picked",
      selector: (row) => (
        <Box cursor={"pointer"} onClick={PickedFunc}>
          <Text className="text-[12px]">{row.picked}</Text>
        </Box>
      ),
    },

    {
      name: "Completed",
      selector: (row) => (
        <Box cursor={"pointer"} onClick={CompletedFunc}>
          <Text className="text-[12px]">{row.completed}</Text>
        </Box>
      ),
    },
  ];
  const Data = [
    {
      id: 1,
      name: "Leroy courier",
      assigned: "59",
      picked: "50",
      completed: "50",
      returned: "9",
      Status: "Paid",
      date: "2/08/2050",
      client: "Oshuperu Joy",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
      contact: "09065345627",
      address: "Shagari village roadH, Akure Ondostate",
      packageAssigned: 3,
    },
    {
      id: 2,
      client: "Oshuperu Joy",
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
      address: "Shagari village roadH, Akure Ondostate",
      packageAssigned: 3,
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
      client: "Oyesola John",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
      contact: "09065345627",
      address: "Shagari village roadH, Akure Ondostate",
      packageAssigned: 3,
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
      client: "Wilson James",
      assigned: "90",
      picked: "70",
      completed: "46",
      returned: "24",
      icon: Jumia,
      contact: "09065345627",
      address: "Shagari village roadH, Akure Ondostate",
      packageAssigned: 3,
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
      address: "Shagari village roadH, Akure Ondostate",
      packageAssigned: 3,
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
      {Riders && (
        <CourierModal
          setOpenSuccessfull={RidersFunc}
          openSuccessfull={Riders}
        />
      )}
      {Assigned && (
        <ModalComponent
          setOpenSuccessfull={AssignedFunc}
          openSuccessfull={Assigned}
          modal_title={"Assigned"}
        >
          <ClientAssignedTable />
        </ModalComponent>
      )}
      {Pending && (
        <ModalComponent
          setOpenSuccessfull={PendingFunc}
          openSuccessfull={Pending}
          modal_title={"Pending"}
        >
          <ClientAssignedTable />
        </ModalComponent>
      )}
      {Picked && (
        <ModalComponent
          setOpenSuccessfull={PickedFunc}
          openSuccessfull={Picked}
          modal_title={"Picked"}
        >
          <ClientAssignedTable />
        </ModalComponent>
      )}
      {Completed && (
        <ModalComponent
          setOpenSuccessfull={CompletedFunc}
          openSuccessfull={Completed}
          modal_title={"Completed"}
        >
          <ClientAssignedTable status={"Completed"} />
        </ModalComponent>
      )}
    </Box>
  );
}

export default ClientPartnersTable;
