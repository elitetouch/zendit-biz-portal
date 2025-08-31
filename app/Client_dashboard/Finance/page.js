"use client";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Text, Button } from "@chakra-ui/react";
import FinanceTable from "@/app/Components/Table/FinanceTable";
import ClientTable from "@/app/Components/Table/ClientTable";
import DashboardCard from "@/app/Components/Card/DashboardCard";
import { BsBorderStyle } from "react-icons/bs";
import { Clients_Overview } from "../Partners/page";
function Page() {
  return (
    <div className="  min-h-screen bg-gray-100">
      <Box>
        <Clients_Overview />
        <Box>
          <Box className=" mt-[20px] ml-[20px] mr-[20px] bg-white rounded-lg">
            <Box className=" mt-[20px] justify-between flex items-center pl-[20px]  m-auto pt-[20px] ">
              <Box>
                <Text className=" font-semibold">Partners Finance</Text>
              </Box>
            </Box>
            <Box className=" pt-[20px] pb-[40px]">
              <Box>
                <FinanceTable Client />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Page;
