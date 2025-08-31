import React from "react";
import DashboardCard from "@/app/Components/Card/DashboardCard";
import { Box, Text } from "@chakra-ui/react";
import { MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
import ClientPartnersTable from "@/app/Components/Table/ClientPartners";
export const Clients_Overview = () => {
  return (
    <Box className=" flex gap-x-[10px] pt-[20px] pl-[20px] pr-[20px]">
      <Box className=" grid lg:grid-cols-3 grid-cols-1 gap-y-[20px] w-full gap-x-[10px] lg:gap-x-[20px]">
        <Box>
          <DashboardCard
            partners
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
            title={"Total Number of Partners"}
            Total_number={"300"}
          />
        </Box>
        {/* <Box>
          <DashboardCard
            partners
            bgColor={"#8FADFF33"}
            textColor={"#398EF1"}
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
            title={"Males"}
            Total_number={"200"}
          />
        </Box>
        <Box>
          <DashboardCard
            partners
            bgColor={"#CF392517"}
            textColor={"#1EBD5D"}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5907 16.7832V18.7254C10.5907 20.371 9.05991 21.7008 7.17514 21.7008C5.29036 21.7008 3.75 20.371 3.75 18.7254V16.7832C3.75 18.4288 5.2808 19.596 7.17514 19.596C9.05991 19.596 10.5907 18.4192 10.5907 16.7832Z"
                  stroke="#FF5252"
                  stroke-width="1.43511"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5924 14.1514C10.5924 14.6298 10.4585 15.0699 10.2288 15.4526C9.66436 16.3806 8.5067 16.9642 7.16727 16.9642C5.82783 16.9642 4.67017 16.371 4.10569 15.4526C3.87608 15.0699 3.74219 14.6298 3.74219 14.1514C3.74219 13.3286 4.12486 12.5919 4.73717 12.0562C5.35905 11.5108 6.21052 11.1855 7.15769 11.1855C8.10486 11.1855 8.95638 11.5204 9.57826 12.0562C10.2097 12.5824 10.5924 13.3286 10.5924 14.1514Z"
                  stroke="#FF5252"
                  stroke-width="1.43511"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5907 14.1532V16.7842C10.5907 18.4298 9.05991 19.597 7.17514 19.597C5.29036 19.597 3.75 18.4202 3.75 16.7842V14.1532C3.75 12.5076 5.2808 11.1777 7.17514 11.1777C8.12231 11.1777 8.97383 11.5126 9.59571 12.0483C10.208 12.5841 10.5907 13.3304 10.5907 14.1532Z"
                  stroke="#FF5252"
                  stroke-width="1.43511"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.3447 11.1477V13.1186C21.3447 13.6448 20.9238 14.0753 20.388 14.0945H18.5128C17.4795 14.0945 16.5323 13.3387 16.4462 12.3054C16.3888 11.7026 16.6184 11.1382 17.0202 10.7459C17.3742 10.3823 17.8622 10.1719 18.398 10.1719H20.388C20.9238 10.191 21.3447 10.6215 21.3447 11.1477Z"
                  stroke="#FF5252"
                  stroke-width="1.43511"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.21875 10.6991V8.78564C2.21875 6.18331 3.7878 4.36551 6.22748 4.05936C6.47623 4.02109 6.73455 4.00195 7.00244 4.00195H15.6131C15.8618 4.00195 16.101 4.01151 16.3306 4.04978C18.799 4.3368 20.3968 6.16418 20.3968 8.78564V10.1729H18.4067C17.871 10.1729 17.383 10.3834 17.029 10.7469C16.6272 11.1392 16.3976 11.7037 16.455 12.3064C16.5411 13.3397 17.4883 14.0955 18.5215 14.0955H20.3968V15.4828C20.3968 18.353 18.4833 20.2665 15.6131 20.2665H13.2212"
                  stroke="#031966"
                  stroke-width="1.43511"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Females"}
            Total_number={"50"}
          />
        </Box> */}
      </Box>
      <Box className=" lg:block hidden">
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
            <Text className=" font-semibold">Package Overview</Text>
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
          <ClientPartnersTable />
        </Box>
      </Box>
    </div>
  );
}

export default Page;
