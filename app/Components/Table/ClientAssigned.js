'use client'
import React, { useState } from 'react' 
import DataTable from 'react-data-table-component'
import { Box, Button, Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Jumia from '../../../public/ImageAva.svg'
//  import imp from '../../Dashboard/OrderDetails/${}'
import { Pagination } from '@/app/Dashboard/page'

function ClientAssignedTable({setDisplayBtn, status}) {
  const [showModal, setShowModal] = useState(false)
  const toogleModal=()=>{
    setShowModal(!showModal)
  }
  const router = useRouter()
  const column=[
      
      {
        name:'Date',selector:row =><Text className='text-[12px]'>{row.date} {row.time}</Text>
      },
     {
        name:'Order ID',selector:row =><Text className='text-[12px]'>{row.Item} ({row.order_Id})</Text>
      },
      {
        name:'Pick up location',selector:row =><Text className='text-[12px]'>{row.Pick_Up_Location}</Text>
      },
       {
        name:'Drop off location',selector:row =><Text className='text-[12px]'>{row.Drop_Off_Location}</Text>
      },
      {
        name:'Receiver Details',selector:row =><Box><Text className='text-[12px]'><span className=' font-semibold'>Name:</span>{row.Recievers_Name}</Text>
        <Text className='text-[12px]'><span className=' font-semibold mt-[5px]'>Contact:</span>{row.Recievers_Number}</Text>
         </Box>
      },
       {
        name:'Rider',selector:row =><Box className=' flex items-center gap-x-[5px]'>
                    <Image
                    src={row.icon}
                    alt=''
                    />
                  <Text className='text-[12px]'>{row.Client}</Text>
                </Box>
      },
      {
        name:'Status',selector:row =><Box className=' flex '>
            <Box
           className=' h-[37px] w-[90px] grid justify-center items-center'
            roundedLeft={'full'}
            roundedRight={'full'}
            width={100}
            backgroundColor={row.Status==='Picked'&&'#DEEBFC'||row.Status==='Completed'&&'#C2FFC0'||row.Status==='Pending'&&'#FFF2D1'} color={'#398EF1'} >
                <Text
                color={row.Status==='Picked'&&'#398EF1'||row.Status==='Completed'&&'#1EBD5D'||row.Status==='Pending'&&'#F5B546'}
                className=' text-[12px]'>{status ?status : row.Status}</Text>
            </Box>
        </Box>
      },  
  ]
   const Data=[{
    id:1,
    Item:'Nike Airforce',
    Client:'Alex Mayor',
    RecieverName:'Sazuke',
    City:'Apapa',
    State:'Lagos',
    Status:'Picked',
    order_Id:'#0000248',
    date:'24/04/2023',
    time:'04:25pm',
    Pick_Up_Location:'Ikeja Hub',
    Drop_Off_Location:'Ikeja City Mall, Ikeja Lagos.',
    Recievers_Name:'Mustapha Balarabe',
    Recievers_Number:'+2347065786732',
    icon:Jumia
  },
{
    id:2,
    Item:'Laptop stands',
    Client:'Paul Mason',
    RecieverName:'Akatsuki',
    City:'Hidden leaf',
    State:'Horkage',
    Status:'Completed',
     order_Id:'#0000248',
    date:'24/04/2023',
    time:'04:25pm',
    Pick_Up_Location:'Ikeja Hub',
    Drop_Off_Location:'Ikeja City Mall, Ikeja Lagos.',
    Recievers_Name:'Mustapha Balarabe',
    Recievers_Number:'+2347065786732',
     icon:Jumia
  },
  {
    id:3,
    Item:'Router',
    Client:'Paul Mason',
    RecieverName:'Lee',
    City:'Ojuelegba',
    State:'Lagos',
    Status:'Pending',
     order_Id:'#0000248',
    date:'24/04/2023',
    time:'04:25pm',
    Pick_Up_Location:'Ikeja Hub',
    Drop_Off_Location:'Ikeja City Mall, Ikeja Lagos.',
    Recievers_Name:'Mustapha Balarabe',
    Recievers_Number:'+2347065786732',
     icon:Jumia
  },
  {
    id:4,
    Item:'Mifi',
    Client:'Paul Mason',
    RecieverName:'Anita',
    City:'Shagari village',
    State:'Akure',
    Status:'Completed',
     order_Id:'#0000248',
    date:'24/04/2023',
    time:'04:25pm',
    Pick_Up_Location:'Ikeja Hub',
    Drop_Off_Location:'Ikeja City Mall, Ikeja Lagos.',
    Recievers_Name:'Mustapha Balarabe',
    Recievers_Number:'+2347065786732',
     icon:Jumia
  },
  {
    id:5,
    Item:'Cupboard',
    Client:'Paul Mason',
    RecieverName:'Ayomide',
    City:'Ijoka',
    State:'Akure',
   Status:'Completed',
     order_Id:'#0000248',
    date:'24/04/2023',
    time:'04:25pm',
    Pick_Up_Location:'Ikeja Hub',
    Drop_Off_Location:'Ikeja City Mall, Ikeja Lagos.',
    Recievers_Name:'Mustapha Balarabe',
    Recievers_Number:'+2347065786732',
     icon:Jumia
  },

  ]
  const customStyles = {
    headCells: {
      style: {
        borderRight:'',
        backgroundColor:'#FE9534',
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
        responsive
      />
    </Box>
  </Box>
</Box>
  )
}

export default ClientAssignedTable