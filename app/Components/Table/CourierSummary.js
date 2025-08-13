'use client'
import React, { useState } from 'react' 
import DataTable from 'react-data-table-component'
import { Box, Button, Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
//  import imp from '../../Dashboard/OrderDetails/${}'


function CourierSummary({setDisplayBtn}) {
  const router = useRouter()
  const column=[
      {
        name:'Rider',selector:row =><Text className='text-[12px]'>{row.rider}</Text>
      },
     
      {
        name:'Assigned',selector:row =><Text className='text-[12px]'>{row.assigned}</Text>
      },
       {
        name:'Pending',selector:row =><Text className='text-[12px]'>{row.pending}</Text>
      },
       {
        name:'Picked',selector:row =><Text className='text-[12px]'>{row.picked}</Text>
      },
      {
        name:'Ongoing',selector:row =><Text className='text-[12px]'>{row.ongoing}</Text>
      },
            {
        name:'Completed',selector:row =><Text className='text-[12px]'>{row.completed}</Text>
      },
  ]
  const Data=[{
    id:1,
    rider:'John Philip',
    assigned:'10',
    pending:'5',
    picked:'5',
    ongoing:'5',
    completed:'10',
  },
{
    id:2,
 rider:'John Philip',
    assigned:'10',
    pending:'5',
    picked:'5',
    ongoing:'5',
    completed:'10',
  },
  {
    id:3,
    rider:'Joseph Peter',
    assigned:'10',
    pending:'5',
    picked:'5',
    ongoing:'5',
    completed:'10',
  },
  {
    id:4,
 rider:'Joseph Peter',
 assigned:'10',
    pending:'5',
    picked:'5',
    ongoing:'5',
    completed:'10',
  },
  {
    id:5,
 rider:'John Philip',
 assigned:'10',
    pending:'5',
    picked:'5',
    ongoing:'5',
    completed:'10',
  },

  ]
  const customStyles = {
    headCells: {
      style: {
        borderRight:'',
        backgroundColor:'gray',
        color:'white', // Add border to column headers
      },
    },
    // cells: {
    //   style: {
    //     borderRight:``, // Add border between columns in the body
    //   },
    // },
  };
  return (
   <Box>
      <Box className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 z-0 ">
  <Box 
    border="1px" 
    borderColor="gray.300" 
    borderRadius="lg" 
    className="pb-[20px] bg-white z-0 overflow-hidden"
  >
    <Box 
      position="unset" 
      className="overflow-x-auto z-0"
    >
       <DataTable
        columns={column}
        data={Data}
        highlightOnHover
        customStyles={customStyles}
      
      />
    </Box>
      
  </Box>
</Box>

    </Box>

  )
}

export default CourierSummary