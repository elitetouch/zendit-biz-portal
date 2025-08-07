'use client'
import React, { useState } from 'react' 
import DataTable from 'react-data-table-component'
import { Box, Button, Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

//  import imp from '../../Dashboard/OrderDetails/${}'
export const ActivityButton=()=>{
    const [showDropdown, setShowDropDown] = useState(false)
    return (
        <Box className=' '>
                  <Button onClick={()=>setShowDropDown(!showDropdown)}>
                <Text className=' text-[12px]'>Assign</Text>
            </Button>
        {/* {
           showDropdown &&     <Box className=' absolute bg-white bottom-0 left-0 h-[100px] w-[100px] rounded-lg'>
            <Box>
           hello
            </Box>
           </Box>
        } */}
        </Box>
    )
}

function DeliveriesTable({setDisplayBtn}) {
  const router = useRouter()
  const column=[
      {
        name:'Item',selector:row =><Text className='text-[12px]'>{row.Item}</Text>
      },
      {
        name:'Client',selector:row =><Text className='text-[12px]'>{row.Client}</Text>
      },
     
      {
        name:'Reciever Name',selector:row =><Text className='text-[12px]'>{row.RecieverName}</Text>
      },
       {
        name:'From',selector:row =><Text className='text-[12px]'>{row.City}</Text>
      },
      {
        name:'To',selector:row =><Text className='text-[12px]'>{row.State}</Text>
      },
      {
        name:'Status',selector:row =><Text color={row.Status==='Picked'&&'green'||row.Status==='Not Picked'&&'red.500'||row.Status==='Ongoing'&&'gray'||row.Status==='Delivered'&&'green'} className='text-[12px] font-semibold'>{row.Status}</Text>
      },
      {
        name:'Action',selector:row =><Box className=' flex'>
            <Button onClick={()=>{router.push(`/../../Dashboard/OrderDetails/${row.id}`)}}>
                <Text className=' text-[12px]'>View details</Text>
            </Button>
        </Box>
      },  
       {
        name:'Action',selector:row =><Box className=' flex'>
          <Button onClick={()=>{router.push(`/../../Dashboard/Couriers/${row.id}`)}}>
                <Text className=' text-[12px]'>Assign</Text>
            </Button>
        </Box>
      },  
  ]
  const Data=[{
    id:1,
    Item:'Shoes',
    Client:'JUMIA',
    RecieverName:'Sazuke',
    City:'Apapa',
    State:'Lagos',
    Status:'Picked',
  },
{
    id:2,
    Item:'Laptop stands',
    Client:'GUO motors',
    RecieverName:'Akatsuki',
    City:'Hidden leaf',
    State:'Horkage',
    Status:'Not picked',
  },
  {
    id:3,
    Item:'Router',
    Client:'JOY MART',
    RecieverName:'Lee',
    City:'Ojuelegba',
    State:'Lagos',
    Status:'Ongoing',
  },
  {
    id:4,
    Item:'Mifi',
    Client:'ANATA',
    RecieverName:'Anita',
    City:'Shagari village',
    State:'Akure',
    Status:'Delivered',
  },
  {
    id:5,
    Item:'Cupboard',
    Client:'LERROY',
    RecieverName:'Ayomide',
    City:'Ijoka',
    State:'Akure',
    Status:'Delivered',
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
   <Box 
   
   className="lg:grid hidden">
    <Box className=' flex items-center justify-between mt-[20px] mb-[20px]'>
        <Box className=' flex items-center gap-x-[20px]'>
            <Box>
                <Text className=' text-[20px] font-semibold'>Pick ups</Text>
            </Box>
            <Box border="1px" borderColor="gray.300" borderRadius="lg" className=' h-[34px] w-[74px] grid justify-center items-center '>
            <Text className=' text-[14px]'>Live Data</Text>    
            </Box>
        </Box>
        <Box className=' flex items-center gap-x-[20px]'>
            <Box>
                <Button backgroundColor={'#C1C0FE'}>
                    <Text className=' text-[14px] text-[#031966]'>Inter - State</Text>
                </Button>
            </Box>
            <Box>
                <Button backgroundColor={'#ECEAEF'}>
                    <Text className=' text-[14px] text-[#031966]'>Intra - State</Text>
                </Button>
            </Box>
        </Box>
    </Box>
  <Box border="1px" borderColor="gray.300" borderRadius="lg" className="pb-[20px] bg-white rounded-lg">
    <Box className="overflow-x-auto relative ">
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

export default DeliveriesTable