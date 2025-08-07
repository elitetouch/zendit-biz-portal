import React from 'react'
import CourierTable from '@/app/Components/Table/CourierTable'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import DashboardCard from '@/app/Components/Card/DashboardCard'
function Page() {
  return (
    <div>
        
        <Box>
            <Box className=' flex items-center gap-x-[20px] mt-[20px] w-11/12 m-auto mb-[20px]'>
                        <Box>
                            <Text className=' text-[20px] font-semibold'>Couriers</Text>
                        </Box>
                        <Box border="1px" borderColor="gray.300" borderRadius="lg" className=' h-[34px] w-[120px] grid justify-center items-center '>
                        <Text className=' text-[14px]'>Active Couriers</Text>    
                        </Box>
                    </Box>
            <Box className=' w-11/12 m-auto'>
                <CourierTable />
            </Box>
        </Box>
    </div>
  )
}

export default Page