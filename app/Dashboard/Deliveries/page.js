import React from 'react'
import DeliveriesTable from '@/app/Components/Table/DeliveryTable'
import { Box, Text } from '@chakra-ui/react'
// Get all orders and also displayed in tabs such as asigned others pending orders, delivered orders
function Page() {
  return (
    <div>
        <Box  className=' w-11/12 m-auto mt-[20px]'>
          <DeliveriesTable />
        </Box>
    </div>
  )
}

export default Page