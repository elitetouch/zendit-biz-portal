'use client'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Box, Text, Button } from '@chakra-ui/react'
import FinanceTable from '@/app/Components/Table/FinanceTable'
import ClientTable from '@/app/Components/Table/ClientTable'
import DashboardCard from '@/app/Components/Card/DashboardCard'
import { BsBorderStyle } from "react-icons/bs";
import { Clients_Overview } from '../Partners/page'
function Page() {
  return (
    <div className='  min-h-screen bg-gray-100'>
      <Box>
        <Clients_Overview />
<Box>
<Box className=' mt-[20px] ml-[20px] mr-[20px] bg-white rounded-lg'>
     <Box className=' mt-[20px] justify-between flex items-center w-11/12 m-auto pt-[20px] '>
                  <Box>
                    <Text className=' font-semibold'>Partners Finance</Text>
                  </Box>
                  <Box cursor={'pointer'} className=' flex items-center gap-x-[10px]'>
                    <Text className=' text-[12px]'>More</Text>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33203 6.30729H10.6654M10.6654 6.30729L5.9987 1.64062M10.6654 6.30729L5.9987 10.974" stroke="#8E95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
                  </Box>
                </Box>
<Box className=' pt-[20px] w-11/12 m-auto pb-[40px]'>
    <Box>
      <FinanceTable />
     </Box>

</Box>
</Box>

</Box>
      </Box>
    </div>
  )
}

export default Page