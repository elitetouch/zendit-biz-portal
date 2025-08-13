'use client'
import React from 'react'
import { useState } from 'react'
import { Box, TabPanel, TabPanels, Text , Tabs, TabList, Tab, IconButton} from '@chakra-ui/react'
import DashboardCard from '../Components/Card/DashboardCard'
import { BsBorderStyle } from "react-icons/bs";
import { GiCardPickup } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";
import { useRouter } from 'next/navigation'
import OrdersTable from '../Components/Table/OrdersTable'
import { Select } from '@chakra-ui/react'
import { MenuButton, MenuList, Menu, MenuItem } from '@chakra-ui/react'
import ClientTable from '../Components/Table/ClientTable'
import AssignedTable from '../Components/Table/Assigned'
export const Pagination =()=>{
  return (
     <Box className=' mt-[20px] flex items-center justify-between'>
          <Box>
            <Text className=' lg:text-[14px] text-[12px]'>
              Showing <span className=' text-[#031966]'>001 - 008</span>  from <span className=' text-[#031966]'>100</span> data
            </Text>
          </Box>
           <Box className=' flex items-center gap-x-[10px]'>
            <Box
            cursor={'pointer'}
            className=' pr-[5px]'>
             <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7563 19.6925L0.946768 10.8429C0.526787 10.4829 0.526787 9.82291 0.946768 9.46292L10.7563 0.613326C11.3863 0.0433516 12.4062 0.463332 12.4062 1.30329L12.4062 19.0025C12.4062 19.8425 11.3863 20.2624 10.7563 19.6925Z" fill="#A098AE"/>
</svg>
            </Box>
            <Box>
               <Box backgroundColor={'#031966'} color={'white'} className=' h-[40px] w-[40px] lg:text-[14px] text-[12px] rounded-full grid justify-center items-center'>
                <Text>1</Text>
               </Box>
            </Box>
            <Box >
              <Box
              border="1px" borderColor="gray.300"
              backgroundColor={'transparent'} color={'black'} className=' h-[40px] w-[40px] lg:text-[14px] text-[12px] rounded-full grid justify-center items-center'>
                <Text>2</Text>
               </Box>
            </Box>
             <Box>
              <Box
              border="1px" borderColor="gray.300"
              backgroundColor={'transparent'} color={'black'} className=' h-[40px] w-[40px] lg:text-[14px] text-[12px] rounded-full grid justify-center items-center'>
                <Text>3</Text>
               </Box>
             </Box>
            <Box>
              <Box
              cursor={'pointer'}
            className=' pl-[5px]'
              >
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.78665 0.614177L11.5962 9.46378C12.0162 9.82376 12.0162 10.4837 11.5962 10.8437L1.78664 19.6933C1.15667 20.2633 0.136719 19.8433 0.136719 19.0033L0.136719 1.30415C0.136719 0.464185 1.15667 0.0442031 1.78665 0.614177Z" fill="#A098AE"/>
</svg>
              </Box>
            </Box>
           </Box>
        </Box>
  )
}

function Page() {
  const [itemsPage, setItemsPage]= useState(1)
  const router = useRouter()
  return (
    <div>
      <Box className=' pl-[20px] pr-[20px] m-auto mt-[20px]'>
      <Box className=' flex gap-x-[5px] lg:gap-x-[10px]'>
        <Box className=' lg:block hidden'>
          <Menu>
  <MenuButton  as={'button'}>
    {/* <Button backgroundColor={'#007460'} color={'white'}> */}
    <Box
    //border="1px" borderColor="gray.300"
    //className='h-[57px] w-[181px] justify-center rounded-lg grid items-center'
    >
    <Box  
    border="1px" borderColor="gray.300"
    color={'black'} cursor={'pointer'} className=' h-[44px] w-[130px] justify-center rounded-lg grid items-center'>
      <Box className=' flex items-center gap-x-[10px] pl-[2px] pr-[2px]'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66797 0.103516C6.12821 0.103516 6.5013 0.476612 6.5013 0.936849V1.77018H11.5013V0.936849C11.5013 0.476612 11.8744 0.103516 12.3346 0.103516C12.7949 0.103516 13.168 0.476612 13.168 0.936849V1.77018H14.0013C15.8423 1.77018 17.3346 3.26257 17.3346 5.10352V14.2702C17.3346 16.1111 15.8423 17.6035 14.0013 17.6035H4.0013C2.16035 17.6035 0.667969 16.1111 0.667969 14.2702V5.10352C0.667969 3.26257 2.16035 1.77018 4.0013 1.77018H4.83464V0.936849C4.83464 0.476612 5.20773 0.103516 5.66797 0.103516ZM11.5013 3.43685C11.5013 3.89709 11.8744 4.27018 12.3346 4.27018C12.7949 4.27018 13.168 3.89709 13.168 3.43685H14.0013C14.9218 3.43685 15.668 4.18304 15.668 5.10352V5.52018H2.33464V5.10352C2.33464 4.18304 3.08083 3.43685 4.0013 3.43685H4.83464C4.83464 3.89709 5.20773 4.27018 5.66797 4.27018C6.12821 4.27018 6.5013 3.89709 6.5013 3.43685H11.5013ZM15.668 7.18685H2.33464V14.2702C2.33464 15.1907 3.08083 15.9368 4.0013 15.9368H14.0013C14.9218 15.9368 15.668 15.1907 15.668 14.2702V7.18685Z" fill="#344054"/>
</svg>
 <Text className=' lg:text-[14px] text-[12px]'>This week</Text> 
<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.344229 1.54368L6.85642 7.67281C7.49817 8.27681 8.49922 8.27681 9.14097 7.67281L15.6532 1.54369C15.9883 1.22826 16.0043 0.70086 15.6889 0.365715C15.3734 0.0305703 14.846 0.0145891 14.5109 0.330019L7.9987 6.45915L1.4865 0.330018C1.15136 0.0145879 0.623964 0.030569 0.308534 0.365714C-0.00689679 0.700859 0.00908518 1.22825 0.344229 1.54368Z" fill="#667185"/>
</svg>
      </Box>
    </Box>

    </Box>
                        {/* </Button> */}
  </MenuButton>
   <MenuList>
    <Box className=' pl-[2px]'>
      <Text className=' lg:text-[14px] text-[12px]'>Last Week</Text>
    </Box>
   </MenuList>
</Menu>
        </Box>
        <Box className=' grid lg:grid-cols-5 grid-cols-2 gap-y-[20px] w-full gap-x-[20px]'>
          <Box>
            <DashboardCard
            textColor={'#031966'}
            bgColor={'#3D25CF17'}
            routeFunc={()=>setItemsPage(1)}
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.13281 2.83594H3.79754C4.83082 2.83594 5.64404 3.7257 5.55793 4.74941L4.76384 14.2785C4.6299 15.838 5.86408 17.1774 7.43313 17.1774H17.6224C19.0001 17.1774 20.2056 16.0485 20.3108 14.6804L20.8275 7.50482C20.9423 5.91664 19.7368 4.62503 18.139 4.62503H5.78756" stroke="#031966" stroke-width="1.43511" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7662 21.9719C16.4267 21.9719 16.9622 21.4365 16.9622 20.776C16.9622 20.1155 16.4267 19.5801 15.7662 19.5801C15.1057 19.5801 14.5703 20.1155 14.5703 20.776C14.5703 21.4365 15.1057 21.9719 15.7662 21.9719Z" stroke="#031966" stroke-width="1.43511" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.11389 21.9719C8.77438 21.9719 9.30981 21.4365 9.30981 20.776C9.30981 20.1155 8.77438 19.5801 8.11389 19.5801C7.4534 19.5801 6.91797 20.1155 6.91797 20.776C6.91797 21.4365 7.4534 21.9719 8.11389 21.9719Z" stroke="#031966" stroke-width="1.43511" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.83203 8.57812H20.3129" stroke="#031966" stroke-width="1.43511" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
            title={'Received'} 
            Total_number={'300'}
            formPage={itemsPage}
            />
          </Box>
          <Box>
            <DashboardCard
            bgColor={'#8FADFF33'}
            textColor={'#398EF1'}
             routeFunc={()=>setItemsPage(2)}
             icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5435 2.83594H9.66408C7.94196 2.83594 7.55927 3.69701 7.33922 4.75899L6.55469 8.50938H17.6528L16.8683 4.75899C16.6483 3.69701 16.2656 2.83594 14.5435 2.83594Z" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0294 14.6231C19.106 15.4364 18.4554 16.1348 17.623 16.1348H16.3218C15.5756 16.1348 15.4703 15.8191 15.3364 15.4173L15.1929 15.0058C15.0015 14.4413 14.8772 14.0586 13.8726 14.0586H10.3231C9.32809 14.0586 9.17501 14.4892 9.00279 15.0058L8.85929 15.4173C8.72534 15.8095 8.62011 16.1348 7.87385 16.1348H6.57269C5.74032 16.1348 5.08974 15.4364 5.16628 14.6231L5.55855 10.3944C5.65422 9.35154 5.85513 8.5 7.67293 8.5H16.5228C18.3406 8.5 18.5415 9.35154 18.6371 10.3944L19.0294 14.6231Z" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.55388 6.42383H5.85547" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3469 6.42383H17.6484" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.94141 11.2852H10.0175" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1875 11.2852H16.2636" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1016 17.1875V18.1442" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1016 21.0156V21.9724" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.49189 18.1445L2.53516 21.9715" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.7148 18.1445L21.6716 21.9715" stroke="#398EF1" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
            title={'Assigned'} 
            Total_number={'200'}
             formPage={itemsPage}
            />
          </Box>
          <Box>
            <DashboardCard 
            textColor={'#FE9534'}
            bgColor={'#F7C56F33'}
             routeFunc={()=>setItemsPage(3)}
             icon={<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9497 2.83594H9.07033C7.34821 2.83594 6.96552 3.69701 6.74547 4.75899L5.96094 8.50938H17.0591L16.2746 4.75899C16.0545 3.69701 15.6718 2.83594 13.9497 2.83594Z" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4357 14.6231C18.5122 15.4364 17.8616 16.1348 17.0293 16.1348H15.7281C14.9818 16.1348 14.8766 15.8191 14.7427 15.4173L14.5991 15.0058C14.4078 14.4413 14.2834 14.0586 13.2788 14.0586H9.72935C8.73434 14.0586 8.58126 14.4892 8.40904 15.0058L8.26554 15.4173C8.13159 15.8095 8.02636 16.1348 7.2801 16.1348H5.97894C5.14657 16.1348 4.49599 15.4364 4.57253 14.6231L4.9648 10.3944C5.06047 9.35154 5.26138 8.5 7.07918 8.5H15.929C17.7468 8.5 17.9477 9.35154 18.0434 10.3944L18.4357 14.6231Z" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.96013 6.42383H5.26172" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.7531 6.42383H17.0547" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.34766 11.2852H9.42379" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5938 11.2852H15.6699" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5078 17.1875V18.1442" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5078 21.0156V21.9724" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.89814 18.1445L1.94141 21.9715" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1211 18.1445L21.0778 21.9715" stroke="#FE9534" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
            title={'Returned'} 
            Total_number={'50'}
             formPage={itemsPage}
            />
          </Box>
          <Box>
            <DashboardCard 
            bgColor={'#EBEAE94A'}
            textColor={'gray'}
             routeFunc={()=>setItemsPage(4)}
             icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.352 2.83594H9.47268C7.75055 2.83594 7.36786 3.69701 7.14781 4.75899L6.36328 8.50938H17.4614L16.6769 4.75899C16.4569 3.69701 16.0742 2.83594 14.352 2.83594Z" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.838 14.6231C18.9145 15.4364 18.264 16.1348 17.4316 16.1348H16.1304C15.3842 16.1348 15.2789 15.8191 15.145 15.4173L15.0015 15.0058C14.8101 14.4413 14.6858 14.0586 13.6812 14.0586H10.1317C9.13668 14.0586 8.9836 14.4892 8.81139 15.0058L8.66788 15.4173C8.53394 15.8095 8.4287 16.1348 7.68244 16.1348H6.38128C5.54892 16.1348 4.89834 15.4364 4.97487 14.6231L5.36714 10.3944C5.46281 9.35154 5.66372 8.5 7.48152 8.5H16.3313C18.1491 8.5 18.3501 9.35154 18.4457 10.3944L18.838 14.6231Z" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.36248 6.42383H5.66406" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1554 6.42383H17.457" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.75 11.2852H9.82613" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9961 11.2852H16.0722" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9102 17.1875V18.1442" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9102 21.0156V21.9724" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.30049 18.1445L2.34375 21.9715" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5234 18.1445L21.4802 21.9715" stroke="#A098AE" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
            title={'Unassigned'}
            Total_number={'50'}
             formPage={itemsPage}
            />
          </Box>
          <Box>
            <DashboardCard 
            bgColor={'#6FF79121'}
            textColor={'#1EBD5D'}
             routeFunc={()=>setItemsPage(4)}
             icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7583 2.83594H9.87893C8.1568 2.83594 7.77411 3.69701 7.55406 4.75899L6.76953 8.50938H17.8677L17.0832 4.75899C16.8631 3.69701 16.4804 2.83594 14.7583 2.83594Z" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.2443 14.6231C19.3208 15.4364 18.6702 16.1348 17.8379 16.1348H16.5367C15.7904 16.1348 15.6852 15.8191 15.5512 15.4173L15.4077 15.0058C15.2164 14.4413 15.092 14.0586 14.0874 14.0586H10.5379C9.54293 14.0586 9.38985 14.4892 9.21764 15.0058L9.07413 15.4173C8.94019 15.8095 8.83495 16.1348 8.08869 16.1348H6.78753C5.95517 16.1348 5.30459 15.4364 5.38112 14.6231L5.77339 10.3944C5.86906 9.35154 6.06997 8.5 7.88777 8.5H16.7376C18.5554 8.5 18.7563 9.35154 18.852 10.3944L19.2443 14.6231Z" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.76873 6.42383H6.07031" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5617 6.42383H17.8633" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.15625 11.2852H10.2324" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4023 11.2852H16.4785" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3164 17.1875V18.1442" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3164 21.0156V21.9724" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.70674 18.1445L2.75 21.9715" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9297 18.1445L21.8864 21.9715" stroke="#1EBD5D" stroke-width="1.43511" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
            title={'Delivered'}
            Total_number={'50'}
             formPage={itemsPage}
            />
          </Box>
        </Box>
      </Box>
      </Box>
      <Box className=' lg:mt-[50px] mt-[20px] '>
        <Tabs>
         <TabList    borderBottom="none"
  display="grid"
  gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
  gap={2}
  pl={4}
  pr={4}
  >
    <Tab><h1 className=' lg:text-[16px] text-[14px] text-[#031966] text-center'>All Orders</h1></Tab>
     <Tab><h1 className=' lg:text-[16px] text-[14px] text-[#031966] text-center'>Assigned</h1></Tab>
      <Tab><h1 className=' lg:text-[16px] text-[14px] text-[#031966] text-center'>Unassigned</h1></Tab>
       <Tab><h1 className=' lg:text-[16px] text-[14px] text-[#031966] text-center'>Picked</h1></Tab>
        <Tab><h1 className=' lg:text-[16px] text-[14px] text-[#031966] text-center'>Returned</h1></Tab>
    <Tab ><h1 className=' lg:text-[16px] text-[14px] text-[#031966] text-center'>Delivered</h1></Tab>
  </TabList>
 
   
<TabPanels>
  <TabPanel>
   <Box className=' lg:w-11/12 lg:m-auto pt-[20px]'>
        <Box className=' mt-[20px]'>
          <OrdersTable />
        </Box>
      </Box>
      <Box
        shadow={'lg'}
        roundedBottom={'lg'}
        className=' mt-[20px] lg:mt-[40px] lg:w-11/12 lg:m-auto'>
          <Box className=' lg:pl-[20px] lg:pr-[20px] pr-[10px] pl-[10px]'>
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
              <Text className=' font-semibold lg:text-[18px] text-[14px]'>
                 Package Received (90)
              </Text>
              <Text className=' font-semibold lg:text-[18px] text-[14px]'>
                 Package Assigned (90)
              </Text>
            </Box>
            <Box className=' mt-[30px] pb-[30px]'>
              <ClientTable />
            </Box>

          </Box>
        </Box>
  </TabPanel>
  <TabPanel>
    <AssignedTable />
  </TabPanel>
  <TabPanel>
    <Box className=' mt-[20px] '>
          <OrdersTable />
        </Box>
  </TabPanel>
  <TabPanel>
        <AssignedTable
        // status={''}
        />
  </TabPanel>
  <TabPanel>
     <AssignedTable
         status={'Returned'}
        />
  </TabPanel>
  <TabPanel>
    <AssignedTable
         status={'Completed'}
        />
  </TabPanel>
</TabPanels>
        </Tabs>

      </Box>
     
    </div>
  )
}

export default Page