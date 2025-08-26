import React from "react";
import DashboardCard from "@/app/Components/Card/DashboardCard";
import { Box, Text } from "@chakra-ui/react";
import { MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
import PartnersTable from "@/app/Components/Table/Partners";
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
            <Text className=" font-semibold">Zendit Partners</Text>
          </Box>
          {/* <Box cursor={'pointer'} className=' flex items-center gap-x-[10px]'>
                    <Text className=' text-[12px]'>More</Text>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33203 6.30729H10.6654M10.6654 6.30729L5.9987 1.64062M10.6654 6.30729L5.9987 10.974" stroke="#8E95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
                  </Box> */}
        </Box>
        <Box className=" pt-[20px] w-11/12 m-auto pb-[40px] mb-[20px]">
          <PartnersTable />
        </Box>
      </Box>
    </div>
  );
}

export default Page;
