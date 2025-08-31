"use client";
import React from "react";
import { useState } from "react";
import {
  Box,
  TabPanel,
  TabPanels,
  Text,
  Tabs,
  TabList,
  Tab,
  IconButton,
  Input,
  Button,
} from "@chakra-ui/react";
import DashboardCard from "../Components/Card/DashboardCard";
import { BsBorderStyle } from "react-icons/bs";
import { GiCardPickup } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";
import { useRouter } from "next/navigation";
import OrdersTable from "../Components/Table/OrdersTable";
import { Select } from "@chakra-ui/react";
import { MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
import ClientTable from "../Components/Table/ClientTable";
import AssignedTable from "../Components/Table/Assigned";
import Image from "next/image";
import cardAvatar from "../../public/cardAvatar.svg";
import ClientOverviewTable from "../Components/Table/ClientOverview";
import ClientAssignedTable from "../Components/Table/ClientAssigned";
const Data = [
  {
    id: 1,
    name: "Alex Sunday",
    status: "iun transit",
    orderCode: "ORD094532",
    packageNumber: "45",
    location: "Ojodu Berger, Lagos",
  },
  {
    id: 2,
    name: "Alex Sunday",
    status: "iun transit",
    orderCode: "ORD094532",
    packageNumber: "45",
    location: "Ojodu Berger, Lagos",
  },
  {
    id: 3,
    name: "Alex Sunday",
    status: "iun transit",
    orderCode: "ORD094532",
    packageNumber: "45",
    location: "Ojodu Berger, Lagos",
  },
];
export const AddCourier = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as="button">
        <Box>
          <Box
            backgroundColor="#031966"
            color="white"
            cursor="pointer"
            className="h-[44px] w-[148px] rounded-lg grid items-center"
          >
            <Box className="flex items-center gap-x-[10px] justify-center pl-[10px] pr-[10px]">
              {/* Add Rider Icon */}
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8346 8.33529C10.8346 7.87505 10.4615 7.50195 10.0013 7.50195C9.54107 7.50195 9.16797 7.87505 9.16797 8.33529V10.002H7.5013C7.04107 10.002 6.66797 10.3751 6.66797 10.8353C6.66797 11.2955 7.04107 11.6686 7.5013 11.6686H9.16797V13.3353C9.16797 13.7955 9.54107 14.1686 10.0013 14.1686C10.4615 14.1686 10.8346 13.7955 10.8346 13.3353V11.6686H12.5013C12.9615 11.6686 13.3346 11.2955 13.3346 10.8353C13.3346 10.3751 12.9615 10.002 12.5013 10.002H10.8346V8.33529Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0013 2.50195C5.39893 2.50195 1.66797 6.23291 1.66797 10.8353C1.66797 15.4377 5.39893 19.1686 10.0013 19.1686C14.6037 19.1686 18.3346 15.4377 18.3346 10.8353C18.3346 6.23291 14.6037 2.50195 10.0013 2.50195ZM3.33464 10.8353C3.33464 7.15339 6.3194 4.16862 10.0013 4.16862C13.6832 4.16862 16.668 7.15339 16.668 10.8353C16.668 14.5172 13.6832 17.502 10.0013 17.502C6.3194 17.502 3.33464 14.5172 3.33464 10.8353Z"
                  fill="white"
                />
              </svg>
              <Text className="text-[14px] text-white">Add Rider</Text>
            </Box>
          </Box>
        </Box>
      </MenuButton>

      <MenuList>
        <MenuItem width={"full"}>
          <Box className=" w-full">
            <Box className="rounded-lg w-full">
              <Box>
                <Box className=" flex items-center gap-x-[10px]">
                  {/* Avatar Icon */}
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.2969 11.8633C22.2969 17.9384 17.372 22.8633 11.2969 22.8633C5.22174 22.8633 0.296875 17.9384 0.296875 11.8633C0.296875 5.78815 5.22174 0.863281 11.2969 0.863281C17.372 0.863281 22.2969 5.78815 22.2969 11.8633ZM11.2938 21.3633C8.39984 21.3633 3.10805 19.4306 4.53713 16.8633C5.7945 14.6044 8.33776 12.3633 11.2938 12.3633C14.2498 12.3633 16.7931 14.6044 18.0505 16.8633C19.5021 19.4712 14.1878 21.3633 11.2938 21.3633ZM11.2969 11.8633C13.506 11.8633 15.2969 10.0724 15.2969 7.86328C15.2969 5.65414 13.506 3.86328 11.2969 3.86328C9.08774 3.86328 7.29688 5.65414 7.29688 7.86328C7.29688 10.0724 9.08774 11.8633 11.2969 11.8633Z"
                      fill="#667185"
                    />
                  </svg>
                  <Text className="text-[14px]">Add rider</Text>
                </Box>
              </Box>

              {/* 🛠 Prevent menu from closing on input click */}
              <Box mt="10px" onClick={(e) => e.stopPropagation()}>
                <Input
                  backgroundColor={"white"}
                  placeholder="Enter rider’s ID"
                  color={"#344054"}
                  fontSize={"14px"}
                  className="flex-1"
                />
              </Box>

              <Box mt="10px" onClick={(e) => e.stopPropagation()}>
                <Box
                  width="full"
                  className="grid items-center justify-center h-[40px] bg-[#031966] rounded"
                  cursor="pointer"
                >
                  <Text className="text-white text-[14px]">Submit</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const OrderCards = ({
  name,
  status,
  orderCode,
  packageNumber,
  location,
}) => {
  return (
    <Box
      border="1px"
      borderColor="gray.100"
      className=" shadow-lg rounded-lg w-full"
    >
      <Box className=" flex items-center justify-between pt-[20px] pl-[10px] pr-[10px]">
        <Box className=" flex items-center gap-x-[10px]">
          <Box>
            <Image src={cardAvatar} alt="" />
          </Box>
          <Box>
            <Box>
              <Text>{name}</Text>
            </Box>
            <Box className=" flex items-center gap-x-[10px]">
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4.83594" r="4" fill="#591BA9" />
              </svg>
              <Text className=" text-[12px]">{status}</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <IconButton
            icon={
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.18003 5.83478C4.18003 5.70217 4.23271 5.575 4.32648 5.48123C4.42025 5.38746 4.54742 5.33478 4.68003 5.33478H7.68003C7.81264 5.33478 7.93982 5.38746 8.03359 5.48123C8.12735 5.575 8.18003 5.70217 8.18003 5.83478C8.18003 5.96739 8.12735 6.09457 8.03359 6.18833C7.93982 6.2821 7.81264 6.33478 7.68003 6.33478H4.68003C4.54742 6.33478 4.42025 6.2821 4.32648 6.18833C4.23271 6.09457 4.18003 5.96739 4.18003 5.83478ZM4.68003 7.33478C4.54742 7.33478 4.42025 7.38746 4.32648 7.48123C4.23271 7.575 4.18003 7.70217 4.18003 7.83478C4.18003 7.96739 4.23271 8.09457 4.32648 8.18833C4.42025 8.2821 4.54742 8.33478 4.68003 8.33478H6.68003C6.81264 8.33478 6.93982 8.2821 7.03359 8.18833C7.12735 8.09457 7.18003 7.96739 7.18003 7.83478C7.18003 7.70217 7.12735 7.575 7.03359 7.48123C6.93982 7.38746 6.81264 7.33478 6.68003 7.33478H4.68003ZM0.180033 6.83478C0.180288 5.51383 0.616458 4.22988 1.42088 3.18211C2.22531 2.13434 3.35302 1.38132 4.62907 1.03986C5.90513 0.698404 7.25821 0.787596 8.4784 1.2936C9.6986 1.79961 10.7177 2.69415 11.3776 3.83844C12.0376 4.98274 12.3014 6.31283 12.1283 7.62239C11.9551 8.93195 11.3547 10.1478 10.42 11.0812C9.48538 12.0147 8.26881 12.6136 6.95904 12.7852C5.64927 12.9567 4.3195 12.6911 3.17603 12.0298L0.838033 12.8098C0.751655 12.8386 0.659041 12.8433 0.570187 12.8234C0.481333 12.8034 0.399612 12.7596 0.333845 12.6966C0.268078 12.6336 0.220762 12.5539 0.197004 12.466C0.173246 12.3781 0.173947 12.2853 0.199033 12.1978L0.911033 9.70678C0.431053 8.82563 0.17972 7.83818 0.180033 6.83478ZM6.18003 1.83478C5.29721 1.83473 4.43012 2.06841 3.66689 2.51209C2.90366 2.95576 2.2715 3.59361 1.83468 4.36078C1.39787 5.12796 1.17196 5.99711 1.17992 6.87989C1.18789 7.76268 1.42944 8.62761 1.88003 9.38678C1.9147 9.44543 1.93702 9.51054 1.94562 9.57812C1.95421 9.6457 1.94891 9.71432 1.93003 9.77978L1.42103 11.5598L3.07903 11.0078C3.14945 10.9843 3.22421 10.9768 3.2979 10.9858C3.37158 10.9947 3.44234 11.02 3.50503 11.0598C4.1603 11.4745 4.90305 11.7311 5.67456 11.8093C6.44607 11.8875 7.2252 11.7852 7.95037 11.5104C8.67553 11.2357 9.32685 10.796 9.85284 10.2262C10.3788 9.65641 10.7651 8.97207 10.981 8.22728C11.197 7.4825 11.2368 6.69768 11.0972 5.93488C10.9576 5.17208 10.6426 4.45219 10.1769 3.83213C9.71118 3.21206 9.10764 2.70881 8.41397 2.36216C7.7203 2.01551 6.9555 1.83496 6.18003 1.83478Z"
                  fill="#031966"
                />
              </svg>
            }
            borderRadius={"full"}
          />
          <IconButton
            icon={
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4217 9.72683V11.4768C12.4224 11.6393 12.3891 11.8001 12.324 11.9489C12.2589 12.0978 12.1635 12.2314 12.0438 12.3412C11.924 12.4511 11.7827 12.5347 11.6288 12.5867C11.4749 12.6388 11.3118 12.6581 11.15 12.6435C9.35503 12.4485 7.6308 11.8351 6.11588 10.8527C4.70645 9.95705 3.51149 8.76209 2.61588 7.35266C1.63003 5.83086 1.01652 4.09824 0.825047 2.29516C0.81047 2.13385 0.829641 1.97127 0.881339 1.81777C0.933037 1.66428 1.01613 1.52323 1.12533 1.40361C1.23452 1.28398 1.36743 1.18841 1.51559 1.12297C1.66375 1.05752 1.82391 1.02365 1.98588 1.02349H3.73588C4.01898 1.02071 4.29343 1.12096 4.50807 1.30555C4.72272 1.49015 4.86293 1.7465 4.90255 2.02683C4.97641 2.58687 5.11339 3.13675 5.31088 3.66599C5.38936 3.87478 5.40635 4.10169 5.35983 4.31984C5.3133 4.53799 5.20522 4.73823 5.04838 4.89683L4.30755 5.63766C5.13795 7.09806 6.34715 8.30725 7.80755 9.13766L8.54838 8.39683C8.70698 8.23999 8.90722 8.13191 9.12537 8.08538C9.34351 8.03886 9.57042 8.05584 9.77921 8.13433C10.3085 8.33181 10.8583 8.4688 11.4184 8.54266C11.7017 8.58264 11.9605 8.72536 12.1455 8.9437C12.3305 9.16203 12.4288 9.44075 12.4217 9.72683Z"
                  stroke="#031966"
                  stroke-width="0.900635"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            borderRadius={"full"}
            marginLeft={"2"}
          />
        </Box>
      </Box>
      <Box className=" flex items-center justify-between pt-[20px] pl-[10px] pr-[10px]">
        <Box className=" flex items-center gap-x-[10px]">
          <Box className=" ">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4117_53834)">
                <path
                  d="M21 17.3669V8.11914C21 7.98606 20.9646 7.85538 20.8974 7.74051C20.8302 7.62563 20.7337 7.5307 20.6177 7.46546L12.3677 2.82483C12.2554 2.76169 12.1288 2.72852 12 2.72852C11.8712 2.72852 11.7446 2.76169 11.6323 2.82483L3.3823 7.46546C3.26632 7.5307 3.16978 7.62563 3.10259 7.74051C3.03541 7.85538 3 7.98606 3 8.11914V17.3669C3 17.4999 3.03541 17.6306 3.10259 17.7455C3.16978 17.8604 3.26632 17.9553 3.3823 18.0206L11.6323 22.6612C11.7446 22.7243 11.8712 22.7575 12 22.7575C12.1288 22.7575 12.2554 22.7243 12.3677 22.6612L20.6177 18.0206C20.7337 17.9553 20.8302 17.8604 20.8974 17.7455C20.9646 17.6306 21 17.4999 21 17.3669Z"
                  stroke="#FE9534"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5958 15.0381V10.1631L7.5 5.14648"
                  stroke="#FE9534"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.8943 7.73531L12.0867 12.739L3.10156 7.73438"
                  stroke="#FE9534"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.088 12.7402L12 22.7547"
                  stroke="#FE9534"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4117_53834">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.335938)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Box>
            <Text>{orderCode}</Text>
          </Box>
        </Box>
        <Box className=" h-[27px] w-[94px] bg-[#DEEBFC] grid items-center justify-center rounded-l-full rounded-r-full">
          <Text className=" text-[#031966] text-[13px]">
            {packageNumber} packages
          </Text>
        </Box>
      </Box>
      <Box className=" flex items-center justify-between mt-[20px] pl-[10px] pr-[10px] gap-x-[10px] pb-[10px]">
        <Box className=" flex items-center gap-x-[10px]">
          <Box>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4117_53844)">
                <path
                  d="M10.001 0.835938C6.73078 0.835938 4.05078 3.50794 4.05078 6.76914C4.05078 8.03274 4.45438 9.20714 5.13738 10.1723L9.27478 17.3249C9.85418 18.0819 10.2394 17.9381 10.7212 17.2849L15.2848 9.51894C15.3768 9.35214 15.4492 9.17454 15.5122 8.99314C15.8018 8.28743 15.9507 7.53195 15.9506 6.76914C15.9508 3.50794 13.2716 0.835938 10.001 0.835938ZM10.001 3.61594C11.7622 3.61594 13.1626 5.01314 13.1626 6.76914C13.1626 8.52514 11.7622 9.92174 10.001 9.92174C8.23998 9.92174 6.83898 8.52534 6.83898 6.76914C6.83898 5.01314 8.23998 3.61614 10.001 3.61614V3.61594Z"
                  fill="#FE9534"
                />
                <path
                  d="M13.7826 10.6172L13.773 10.6424C13.776 10.6348 13.7784 10.627 13.7814 10.6194L13.7826 10.6172ZM6.8012 14.647C3.976 15.0462 2 16.0012 2 17.407C2 19.3006 5.3016 20.8356 10 20.8356C14.6984 20.8356 18 19.3006 18 17.407C18 16.0012 16.0242 15.0462 13.1992 14.647L12.8078 15.3134C14.937 15.6088 16.4 16.2296 16.4 16.95C16.4 17.96 13.5346 18.7786 10 18.7786C6.4654 18.7786 3.6 17.96 3.6 16.95C3.5998 16.232 5.0532 15.6118 7.189 15.3152C7.06 15.0924 6.9304 14.87 6.8012 14.647Z"
                  fill="#FE9534"
                />
              </g>
              <defs>
                <clipPath id="clip0_4117_53844">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.835938)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Box>
            <Text className=" text-[13px]">{location}</Text>
          </Box>
        </Box>
        <Box>
          <Button backgroundColor={"transparent"}>
            <Text className=" text-[#031966] text-[13px]">View map</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Pagination = () => {
  return (
    <Box className=" mt-[20px] flex items-center justify-between">
      <Box>
        <Text className=" text-[14px]">
          Showing <span className=" text-[#031966]">001 - 008</span> from{" "}
          <span className=" text-[#031966]">100</span> data
        </Text>
      </Box>
      <Box className=" flex items-center gap-x-[10px]">
        <Box cursor={"pointer"} className=" pr-[5px]">
          <svg
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7563 19.6925L0.946768 10.8429C0.526787 10.4829 0.526787 9.82291 0.946768 9.46292L10.7563 0.613326C11.3863 0.0433516 12.4062 0.463332 12.4062 1.30329L12.4062 19.0025C12.4062 19.8425 11.3863 20.2624 10.7563 19.6925Z"
              fill="#A098AE"
            />
          </svg>
        </Box>
        <Box>
          <Box
            backgroundColor={"#031966"}
            color={"white"}
            className=" h-[40px] w-[40px] text-[14px] rounded-full grid justify-center items-center"
          >
            <Text>1</Text>
          </Box>
        </Box>
        <Box>
          <Box
            border="1px"
            borderColor="gray.300"
            backgroundColor={"transparent"}
            color={"black"}
            className=" h-[40px] w-[40px] text-[14px] rounded-full grid justify-center items-center"
          >
            <Text>2</Text>
          </Box>
        </Box>
        <Box>
          <Box
            border="1px"
            borderColor="gray.300"
            backgroundColor={"transparent"}
            color={"black"}
            className=" h-[40px] w-[40px] text-[14px] rounded-full grid justify-center items-center"
          >
            <Text>3</Text>
          </Box>
        </Box>
        <Box>
          <Box cursor={"pointer"} className=" pl-[5px]">
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.78665 0.614177L11.5962 9.46378C12.0162 9.82376 12.0162 10.4837 11.5962 10.8437L1.78664 19.6933C1.15667 20.2633 0.136719 19.8433 0.136719 19.0033L0.136719 1.30415C0.136719 0.464185 1.15667 0.0442031 1.78665 0.614177Z"
                fill="#A098AE"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function Page() {
  const [itemsPage, setItemsPage] = useState(1);
  const router = useRouter();
  return (
    <div>
      <Box className=" pl-[10px] pr-[10px] mt-[20px]">
        <Box className=" grid w-full justify-end">
          <Menu>
            <MenuButton as={"button"}>
              {/* <Button backgroundColor={'#007460'} color={'white'}> */}
              <Box
              //border="1px" borderColor="gray.300"
              //className='h-[57px] w-[181px] justify-center rounded-lg grid items-center'
              >
                <Box
                  border="1px"
                  borderColor="gray.300"
                  color={"black"}
                  cursor={"pointer"}
                  className=" h-[44px] w-[130px] justify-center rounded-lg grid items-center"
                >
                  <Box className=" flex items-center gap-x-[10px] pl-[2px] pr-[2px]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.66797 0.103516C6.12821 0.103516 6.5013 0.476612 6.5013 0.936849V1.77018H11.5013V0.936849C11.5013 0.476612 11.8744 0.103516 12.3346 0.103516C12.7949 0.103516 13.168 0.476612 13.168 0.936849V1.77018H14.0013C15.8423 1.77018 17.3346 3.26257 17.3346 5.10352V14.2702C17.3346 16.1111 15.8423 17.6035 14.0013 17.6035H4.0013C2.16035 17.6035 0.667969 16.1111 0.667969 14.2702V5.10352C0.667969 3.26257 2.16035 1.77018 4.0013 1.77018H4.83464V0.936849C4.83464 0.476612 5.20773 0.103516 5.66797 0.103516ZM11.5013 3.43685C11.5013 3.89709 11.8744 4.27018 12.3346 4.27018C12.7949 4.27018 13.168 3.89709 13.168 3.43685H14.0013C14.9218 3.43685 15.668 4.18304 15.668 5.10352V5.52018H2.33464V5.10352C2.33464 4.18304 3.08083 3.43685 4.0013 3.43685H4.83464C4.83464 3.89709 5.20773 4.27018 5.66797 4.27018C6.12821 4.27018 6.5013 3.89709 6.5013 3.43685H11.5013ZM15.668 7.18685H2.33464V14.2702C2.33464 15.1907 3.08083 15.9368 4.0013 15.9368H14.0013C14.9218 15.9368 15.668 15.1907 15.668 14.2702V7.18685Z"
                        fill="#344054"
                      />
                    </svg>
                    <Text className=" text-[14px]">This week</Text>
                    <svg
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.344229 1.54368L6.85642 7.67281C7.49817 8.27681 8.49922 8.27681 9.14097 7.67281L15.6532 1.54369C15.9883 1.22826 16.0043 0.70086 15.6889 0.365715C15.3734 0.0305703 14.846 0.0145891 14.5109 0.330019L7.9987 6.45915L1.4865 0.330018C1.15136 0.0145879 0.623964 0.030569 0.308534 0.365714C-0.00689679 0.700859 0.00908518 1.22825 0.344229 1.54368Z"
                        fill="#667185"
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
              {/* </Button> */}
            </MenuButton>
            <MenuList>
              <Box className=" pl-[2px]">
                <Text className=" text-[14px]">Last Week</Text>
              </Box>
            </MenuList>
          </Menu>
        </Box>
        <Box className=" mt-[30px] w-full">
          <Box className=" grid lg:grid-cols-6 grid-cols-2 gap-y-[20px] w-full gap-x-[10px]">
            <Box>
              <DashboardCard
                textColor={"#031966"}
                bgColor={"#3D25CF17"}
                routeFunc={() => setItemsPage(1)}
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
                title={"Received"}
                Total_number={"300"}
                formPage={itemsPage}
              />
            </Box>
            <Box>
              <DashboardCard
                bgColor={"#8FADFF33"}
                textColor={"#398EF1"}
                routeFunc={() => setItemsPage(2)}
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5435 2.83594H9.66408C7.94196 2.83594 7.55927 3.69701 7.33922 4.75899L6.55469 8.50938H17.6528L16.8683 4.75899C16.6483 3.69701 16.2656 2.83594 14.5435 2.83594Z"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.0294 14.6231C19.106 15.4364 18.4554 16.1348 17.623 16.1348H16.3218C15.5756 16.1348 15.4703 15.8191 15.3364 15.4173L15.1929 15.0058C15.0015 14.4413 14.8772 14.0586 13.8726 14.0586H10.3231C9.32809 14.0586 9.17501 14.4892 9.00279 15.0058L8.85929 15.4173C8.72534 15.8095 8.62011 16.1348 7.87385 16.1348H6.57269C5.74032 16.1348 5.08974 15.4364 5.16628 14.6231L5.55855 10.3944C5.65422 9.35154 5.85513 8.5 7.67293 8.5H16.5228C18.3406 8.5 18.5415 9.35154 18.6371 10.3944L19.0294 14.6231Z"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.55388 6.42383H5.85547"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3469 6.42383H17.6484"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.94141 11.2852H10.0175"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.1875 11.2852H16.2636"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.1016 17.1875V18.1442"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.1016 21.0156V21.9724"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.49189 18.1445L2.53516 21.9715"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.7148 18.1445L21.6716 21.9715"
                      stroke="#398EF1"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title={"Assigned"}
                Total_number={"200"}
                formPage={itemsPage}
              />
            </Box>
            <Box>
              <DashboardCard
                textColor={"#FE9534"}
                bgColor={"#F7C56F33"}
                routeFunc={() => setItemsPage(3)}
                icon={
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9497 2.83594H9.07033C7.34821 2.83594 6.96552 3.69701 6.74547 4.75899L5.96094 8.50938H17.0591L16.2746 4.75899C16.0545 3.69701 15.6718 2.83594 13.9497 2.83594Z"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.4357 14.6231C18.5122 15.4364 17.8616 16.1348 17.0293 16.1348H15.7281C14.9818 16.1348 14.8766 15.8191 14.7427 15.4173L14.5991 15.0058C14.4078 14.4413 14.2834 14.0586 13.2788 14.0586H9.72935C8.73434 14.0586 8.58126 14.4892 8.40904 15.0058L8.26554 15.4173C8.13159 15.8095 8.02636 16.1348 7.2801 16.1348H5.97894C5.14657 16.1348 4.49599 15.4364 4.57253 14.6231L4.9648 10.3944C5.06047 9.35154 5.26138 8.5 7.07918 8.5H15.929C17.7468 8.5 17.9477 9.35154 18.0434 10.3944L18.4357 14.6231Z"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.96013 6.42383H5.26172"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.7531 6.42383H17.0547"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.34766 11.2852H9.42379"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5938 11.2852H15.6699"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.5078 17.1875V18.1442"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.5078 21.0156V21.9724"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.89814 18.1445L1.94141 21.9715"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.1211 18.1445L21.0778 21.9715"
                      stroke="#FE9534"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title={"Picked"}
                Total_number={"50"}
                formPage={itemsPage}
              />
            </Box>
            <Box>
              <DashboardCard
                textColor={"#FF5252"}
                bgColor={"#F77F6F21"}
                routeFunc={() => setItemsPage(1)}
                icon={
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6751 2.15039H7.75555C6.37219 2.15039 6.06478 2.84208 5.88802 3.69515L5.25781 6.7078H14.1728L13.5426 3.69515C13.3659 2.84208 13.0585 2.15039 11.6751 2.15039Z"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.2777 11.6179C15.3392 12.2711 14.8166 12.8322 14.148 12.8322H13.1028C12.5033 12.8322 12.4188 12.5785 12.3112 12.2558L12.1959 11.9253C12.0422 11.4718 11.9423 11.1644 11.1353 11.1644H8.28404C7.48477 11.1644 7.3618 11.5102 7.22346 11.9253L7.10819 12.2558C7.00059 12.5709 6.91605 12.8322 6.3166 12.8322H5.27139C4.60276 12.8322 4.08016 12.2711 4.14164 11.6179L4.45674 8.22095C4.53359 7.38325 4.69498 6.69922 6.1552 6.69922H13.2642C14.7244 6.69922 14.8858 7.38325 14.9626 8.22095L15.2777 11.6179Z"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.25634 5.03125H4.69531"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.729 5.03125H14.168"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.37109 8.93555H8.03883"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.3906 8.93555H13.0584"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.71484 13.6777V14.4463"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.71484 16.752V17.5205"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.79588 14.4473L2.02734 17.5214"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.6328 14.4473L17.4013 17.5214"
                      stroke="#FF5252"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title={"Pending"}
                Total_number={"300"}
                formPage={itemsPage}
              />
            </Box>

            <Box>
              <DashboardCard
                bgColor={"#6FF79121"}
                textColor={"#1EBD5D"}
                routeFunc={() => setItemsPage(4)}
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7583 2.83594H9.87893C8.1568 2.83594 7.77411 3.69701 7.55406 4.75899L6.76953 8.50938H17.8677L17.0832 4.75899C16.8631 3.69701 16.4804 2.83594 14.7583 2.83594Z"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2443 14.6231C19.3208 15.4364 18.6702 16.1348 17.8379 16.1348H16.5367C15.7904 16.1348 15.6852 15.8191 15.5512 15.4173L15.4077 15.0058C15.2164 14.4413 15.092 14.0586 14.0874 14.0586H10.5379C9.54293 14.0586 9.38985 14.4892 9.21764 15.0058L9.07413 15.4173C8.94019 15.8095 8.83495 16.1348 8.08869 16.1348H6.78753C5.95517 16.1348 5.30459 15.4364 5.38112 14.6231L5.77339 10.3944C5.86906 9.35154 6.06997 8.5 7.88777 8.5H16.7376C18.5554 8.5 18.7563 9.35154 18.852 10.3944L19.2443 14.6231Z"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.76873 6.42383H6.07031"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.5617 6.42383H17.8633"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.15625 11.2852H10.2324"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.4023 11.2852H16.4785"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3164 17.1875V18.1442"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3164 21.0156V21.9724"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.70674 18.1445L2.75 21.9715"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.9297 18.1445L21.8864 21.9715"
                      stroke="#1EBD5D"
                      stroke-width="1.43511"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title={"Unassigned"}
                Total_number={"50"}
                formPage={itemsPage}
              />
            </Box>
            <Box>
              <DashboardCard
                textColor={"#1EBD5D"}
                bgColor={"#6FF79121"}
                routeFunc={() => setItemsPage(1)}
                icon={
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9681 2.15039H8.04852C6.66516 2.15039 6.35775 2.84208 6.18099 3.69515L5.55078 6.7078H14.4658L13.8356 3.69515C13.6588 2.84208 13.3514 2.15039 11.9681 2.15039Z"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5707 11.6179C15.6322 12.2711 15.1096 12.8322 14.4409 12.8322H13.3957C12.7963 12.8322 12.7117 12.5785 12.6041 12.2558L12.4889 11.9253C12.3351 11.4718 12.2352 11.1644 11.4283 11.1644H8.57701C7.77774 11.1644 7.65477 11.5102 7.51643 11.9253L7.40115 12.2558C7.29356 12.5709 7.20902 12.8322 6.60956 12.8322H5.56436C4.89573 12.8322 4.37312 12.2711 4.43461 11.6179L4.74971 8.22095C4.82656 7.38325 4.98795 6.69922 6.44817 6.69922H13.5571C15.0173 6.69922 15.1787 7.38325 15.2556 8.22095L15.5707 11.6179Z"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.54931 5.03125H4.98828"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.022 5.03125H14.4609"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66406 8.93555H8.33179"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.6836 8.93555H13.3513"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0078 13.6777V14.4463"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0078 16.752V17.5205"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.08885 14.4473L2.32031 17.5214"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9258 14.4473L17.6943 17.5214"
                      stroke="#1EBD5D"
                      stroke-width="1.1528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title={"Delivered"}
                Total_number={"300"}
                formPage={itemsPage}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className=" lg:flex grid pl-[10px] pr-[10px] mt-[40px] lg:justify-between gap-x-[10px]">
        <Box>
          <Text className=" text-[20px] font-bold">Riders</Text>
          <Box className=" flex items-center gap-x-[10px] mt-[20px]">
            <Box>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6.83594" r="6" fill="#398EF1" />
              </svg>
            </Box>
            <Box>
              <Text className=" text-[14px] text-[#A098AE]">
                3 riders in transit
              </Text>
            </Box>
          </Box>
          <Box className=" mt-[20px]">
            <AddCourier />
          </Box>
        </Box>
        <Box className=" grid lg:grid-cols-3 grid-cols-1 gap-y-[20px] mt-[20px] gap-x-[10px] lg:gap-x-[30px]">
          {Data.map((item) => {
            return (
              <Box key={item.id}>
                <OrderCards
                  name={item.name}
                  orderCode={item.orderCode}
                  location={item.location}
                  packageNumber={item.packageNumber}
                  status={item.status}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className=" mt-[50px]">
        <Tabs>
          <TabList
            borderBottom="none"
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
            gap={2}
            pl={4}
            pr={4}
          >
            <Tab>
              <h1 className=" lg:text-[16px] text-[14px] text-[#031966]">
                All Orders
              </h1>
            </Tab>
            <Tab>
              <h1 className=" lg:text-[16px] text-[14px] text-[#031966]">
                Assigned
              </h1>
            </Tab>
            <Tab>
              <h1 className=" lg:text-[16px] text-[14px] text-[#031966]">
                Unassigned
              </h1>
            </Tab>
            <Tab>
              <h1 className=" lg:text-[16px] text-[14px] text-[#031966]">
                Picked
              </h1>
            </Tab>
            <Tab>
              <h1 className=" lg:text-[16px] text-[14px] text-[#031966]">
                Returned
              </h1>
            </Tab>
            <Tab marginLeft={5}>
              {" "}
              <h1 className=" lg:text-[16px] text-[14px] text-[#031966]">
                Delivered
              </h1>
            </Tab>
          </TabList>
          <Box className=" pl-[20px] pr-[20px] mt-[20px]">
            <Box className=" flex items-center gap-x-[10px]">
              <Box>
                <Text className=" text-[18px] text-[#332F2F] font-semibold">
                  Pick up details
                </Text>
              </Box>
              <Box
                border={"1px"}
                borderColor={"gray.200"}
                borderRadius="lg"
                className=" grid items-center justify-center h-[31px] w-[69px]"
              >
                <Text className=" text-[14px]">Live data</Text>
              </Box>
            </Box>
          </Box>

          <TabPanels>
            <TabPanel>
              <Box className="lg:pl-[20px] lg:pr-[20px] pl-[10px] pr-[10px] lg:pt-[20px] pt-[10px]">
                <Box className=" mt-[10px] lg:mt-[20px] w-full">
                  <OrdersTable Client />
                </Box>
              </Box>
              {/* <Box
        shadow={'lg'}
        roundedBottom={'lg'}
        className=' mt-[40px] pl-[20px] pr-[20px]'>
          <Box className=''>
            <Box className=' mt-[20px] justify-between flex items-center'>
              <Box>
                <Text className=' font-semibold'>Package Overview</Text>
              </Box>
              <Box cursor={'pointer'} className=' flex items-center gap-x-[10px]'>
                <Text className=' text-[12px]'>More</Text>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33203 6.30729H10.6654M10.6654 6.30729L5.9987 1.64062M10.6654 6.30729L5.9987 10.974" stroke="#8E95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </Box>
            </Box>
            <Box className=' mt-[20px] justify-between flex items-center'>
              <Text className='font-semibold lg:text-[18px] text-[14px]'>
                 Package Received (90)
              </Text>
              <Text className='font-semibold lg:text-[18px] text-[14px]'>
                 Package Assigned (90)
              </Text>
            </Box>
            <Box className=' mt-[30px] pb-[30px]'>
              <ClientOverviewTable />
            </Box>

          </Box>
        </Box> */}
            </TabPanel>
            <TabPanel>
              <ClientAssignedTable />
            </TabPanel>
            <TabPanel>
              <Box className=" mt-[20px] pl-[20px] pr-[20px]">
                <OrdersTable Client />
              </Box>
            </TabPanel>
            <TabPanel>
              <ClientAssignedTable
              // status={''}
              />
            </TabPanel>
            <TabPanel>
              <ClientAssignedTable status={"Returned"} />
            </TabPanel>
            <TabPanel>
              <ClientAssignedTable status={"Completed"} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default Page;
