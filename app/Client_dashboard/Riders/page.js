import React from "react";
import DashboardCard from "@/app/Components/Card/DashboardCard";
import { Box, Text } from "@chakra-ui/react";
import { MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
import RidersTable from "@/app/Components/Table/RidersTable";
import { AddCourier } from "../page";
export const Clients_Overview = () => {
  return (
    <Box className=" flex gap-x-[10px] pt-[20px] pl-[20px] pr-[20px]">
      <Box className=" grid lg:flex justify-between lg:grid-cols-2 grid-cols-1 gap-y-[20px] w-full gap-x-[20px]">
        <Box className=" lg:w-6/12">
          <DashboardCard
            partners
            Add_Riders
            textColor={"#031966"}
            bgColor={"#3D25CF17"}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.13281 2.83594H3.79754C4.83082 2.83594 5.64404 3.7257 5.55793 4.74941L4.76384 14.2785C4.6299 15.838 5.86408 17.1774 7.43313 17.1774H17.6224C19.0001 17.1774 20.2056 16.0485 20.3108 14.6804L20.8275 7.50482C20.9423 5.91664 19.7368 4.62503 18.139 4.62503H5.78756"
                  stroke="#031966"
                  stroke-width="1.43511"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7662 21.9719C16.4267 21.9719 16.9622 21.4365 16.9622 20.776C16.9622 20.1155 16.4267 19.5801 15.7662 19.5801C15.1057 19.5801 14.5703 20.1155 14.5703 20.776C14.5703 21.4365 15.1057 21.9719 15.7662 21.9719Z"
                  stroke="#031966"
                  stroke-width="1.43511"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.11389 21.9719C8.77438 21.9719 9.30981 21.4365 9.30981 20.776C9.30981 20.1155 8.77438 19.5801 8.11389 19.5801C7.4534 19.5801 6.91797 20.1155 6.91797 20.776C6.91797 21.4365 7.4534 21.9719 8.11389 21.9719Z"
                  stroke="#031966"
                  stroke-width="1.43511"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.83203 8.57812H20.3129"
                  stroke="#031966"
                  stroke-width="1.43511"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Total"}
            Total_number={"300"}
          />
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};
function Page() {
  return (
    <div className=" min-h-screen bg-[#F5F5F8]">
      <Clients_Overview />
      <Box className=" mt-[20px] ml-[20px] mr-[20px] bg-white rounded-lg">
        <Box className=" mt-[20px] justify-between flex items-center w-11/12 m-auto pt-[20px] ">
          <Box>
            <Text className=" font-semibold">Your Riders</Text>
          </Box>
          <Box cursor={"pointer"} className=" flex items-center gap-x-[10px]">
            <Text className=" text-[12px]">More</Text>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33203 6.30729H10.6654M10.6654 6.30729L5.9987 1.64062M10.6654 6.30729L5.9987 10.974"
                stroke="#8E95A9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>
        <Box className=" pt-[20px] w-11/12 m-auto pb-[40px]">
          <RidersTable />
        </Box>
      </Box>
    </div>
  );
}

export default Page;
