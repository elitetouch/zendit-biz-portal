'use client'
import React, { useState } from 'react' 
import DataTable from 'react-data-table-component'
import { Box, Button, Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
//  import imp from '../../Dashboard/OrderDetails/${}'


function PackageOverview({setDisplayBtn}) {
  const router = useRouter()
  const column=[
      {
        name:'First name',selector:row =><Text className='text-[12px]'>{row.firstName}</Text>
      },
     
      {
        name:'Last Name',selector:row =><Text className='text-[12px]'>{row.lastName}</Text>
      },
       {
        name:'Phone Number',selector:row =><Text className='text-[12px]'>{row.phoneNumber}</Text>
      },
       {
        name:'Address',selector:row =><Text className='text-[12px]'>{row.address}</Text>
      },
      {
        name:'State',selector:row =><Text className='text-[12px]'>{row.state}</Text>
      },
            {
        name:'City',selector:row =><Text className='text-[12px]'>{row.city}</Text>
      },
      {
        name:'Status',selector:row =><Text color={row.Status==='Picked'&&'green'||row.Status==='Not Picked'&&'red.500'||row.Status==='Ongoing'&&'gray'||row.Status==='Delivered'&&'green'} className='text-[12px] font-semibold'>{row.Status}</Text>
      },
      {
        name:'Action',selector:row =><Box className=' flex'>
            <Button backgroundColor={'#DEEBFC'} onClick={()=>router.push(`../../Dashboard/Deliveries`)}>
                <Text className=' text-[12px]'>Assign Package</Text>
            </Button>
        </Box>
      },  
  ]
  const Data=[{
    id:1,
    firstName:'Orochimaru',
    lastName:'Seenju',
    address:'Iyanapaja',
    state:'Lagos',
    city:'Lekki',
    Status:'not active',
    phoneNumber:'08168848735'
  },
{
    id:2,
    firstName:'Juraya',
    lastName:'Kokichibo',
    address:'Mile2',
    state:'Lagos',
    city:'Lekki',
    Status:'active',
     phoneNumber:'08168848735'
  },
  {
    id:3,
    firstName:'Orochimaru',
    lastName:'Seenju',
    address:'Iyanapaja',
    state:'Lagos',
    city:'Lekki',
    Status:'not active',
     phoneNumber:'08168848735'
  },
  {
    id:4,
    firstName:'Juraya',
    lastName:'Kokichibo',
    address:'Mile2',
    state:'Lagos',
    city:'Lekki',
    Status:'active',
     phoneNumber:'08168848735'
  },
  {
    id:5,
 firstName:'Ashirama',
    lastName:'Sazuke',
    address:'Mile2',
    state:'Lagos',
    city:'Lekki',
    Status:'active',
     phoneNumber:'08168848735'
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
   <Box className="lg:grid hidden">
  <Box border="1px" borderColor="gray.300" borderRadius="lg" className="pb-[20px] bg-white rounded-lg">
    <Box className="overflow-x-auto">
      <DataTable
        columns={column}
        data={Data}
        highlightOnHover
        customStyles={customStyles}
      />
    </Box>
  </Box>
</Box>

  )
}

export default PackageOverview