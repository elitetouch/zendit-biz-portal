'use client'
import React, { useState } from 'react' 
import DataTable from 'react-data-table-component'
import { Box, Button, Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Jumia from '../../../public/leroy.svg'
//  import imp from '../../Dashboard/OrderDetails/${}'


function RidersTable({setDisplayBtn}) {
  const router = useRouter()
  const column=[
      {
        name:'Courier ID',selector:row =><Text className='text-[12px]'>{row.date}</Text>
      },
      {
        name:'Name',selector:row => 
        <Box className=' flex items-center gap-x-[5px]'>
            <Image
            src={row.icon}
            alt=''
            />
          <Text className='text-[12px]'>{row.client}</Text>
        </Box>
      },
        {
        name:'Contact',selector:row =><Text className='text-[12px]'>{row.contact}</Text>
      },
       {
        name:'City',selector:row =><Text className='text-[12px]'>{row.picked}</Text>
      },
       {
        name:'State',selector:row =><Text className='text-[12px]'>{row.picked}</Text>
      },
      
     
      {
        name:'Address',selector:row =><Text className='text-[12px]'>{row.assigned}</Text>
      },
       
      

       
      //       {
      //   name:'Completed',selector:row =><Text className='text-[12px]'>{row.completed}</Text>
      // },
  ]
  const Data=[{
    id:1,
    name:'Leroy courier',
    assigned:'59',
    picked:'50',
    completed:'50',
    returned:'9',
    Status:'Paid',
    date:'2/08/2050',
    client:'Leroy courier',
    assigned:'90',
    picked:'70',
    completed:'46',
    returned:'24',
    icon:Jumia,
    contact:'09065345627'
  },
{
    id:2,
    client:'Abs_Express',
    assigned:'59',
    picked:'50',
    completed:'50',
    returned:'9',
    Status:'Unpaid',
    date:'2/08/2050',
     //client:'Jumia',
    assigned:'90',
    picked:'70',
    completed:'46',
    returned:'24',
    icon:Jumia,
      contact:'09065345627'
  },
  {
    id:3,
      name:'GUO',
 assigned:'59',
    picked:'50',
    completed:'50',
    returned:'9',
    Status:'Unpaid',
    date:'2/08/2050',
     client:'G2G',
    assigned:'90',
    picked:'70',
    completed:'46',
    returned:'24',
    icon:Jumia,
      contact:'09065345627'
  },
  {
    id:4,
     name:'Jumia',
    assigned:'59',
    picked:'50',
    completed:'50',
    returned:'9',
    Status:'Unpaid',
date:'2/08/2050',
 client:'Adeway',
    assigned:'90',
    picked:'70',
    completed:'46',
    returned:'24',
    icon:Jumia,
      contact:'09065345627'
},
  {
    id:5,
      client:'Victor James',
    assigned:'59',
    picked:'50',
    completed:'50',
    returned:'9',
    Status:'Unpaid',
    date:'2/08/2050',
     client:'Victor James',
    assigned:'90',
    picked:'70',
    completed:'46',
    returned:'24',
    icon:Jumia,
      contact:'09065345627'
  },

  ]
  const customStyles = {
    headCells: {
      style: {
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

export default RidersTable