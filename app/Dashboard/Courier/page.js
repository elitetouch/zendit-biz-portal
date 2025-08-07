import React from 'react'
import CourierSummary from '@/app/Components/Table/CourierSummary'
import { Box, Text } from '@chakra-ui/react'
import DashboardCard from '@/app/Components/Card/DashboardCard'
import { BsBorderStyle } from "react-icons/bs";
function Page() {
  return (
    <div>
       <Box className=' w-11/12 m-auto'>
          <Text className=' text-[25px] pt-[20px] font-semibold'>Courier Overview</Text>
          <Text className=' mt-[10px]'>Manage your delivery leaderboard</Text>
        </Box>
         <Box className=' grid grid-cols-3 gap-x-[40px] w-11/12 m-auto mt-[20px]'>
      <DashboardCard
            icon={<BsBorderStyle className=' w-[20px] h-[20px]' />}
            title={'Total Assigned'} 
            Total_number={'300'}
            />
            <DashboardCard
            icon={<BsBorderStyle className=' w-[20px] h-[20px]' />}
            title={'Total Pending'} 
            Total_number={'300'}
            />
            <DashboardCard
            icon={<BsBorderStyle className=' w-[20px] h-[20px]' />}
            title={'Total Delivered'} 
            Total_number={'300'}
            />
     </Box>
      <Box className=' w-11/12 m-auto mt-[30px]'>
        <CourierSummary />
      </Box>
    </div>
  )
}

export default Page