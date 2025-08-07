'use client'
import React from 'react'
import { useParams } from 'next/navigation';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react'
import { Georama } from 'next/font/google';
import { Text } from '@chakra-ui/react';

export const Data=[{
    id:1,
    Item:'Shoes',
    Client:'JUMIA',
    RecieverName:'Sazuke',
    City:'Apapa',
    State:'Lagos',
    Status:'Picked',
    ClientContact:'08168848735',
    receiverPhone:'08162540435',
    pickupDate:'2nd Feb',
    pickupTime:'2.00am',
    deliveryType:'Doorstep',
    Address:"Ijoka road Akure",
  },
{
    id:2,
    Item:'Laptop stands',
    Client:'GUO motors',
    RecieverName:'Akatsuki',
    City:'Hidden leaf',
    State:'Horkage',
    Status:'Not picked',
     ClientContact:'08168848735',
    receiverPhone:'08162540435',
    pickupDate:'2nd Feb',
    pickupTime:'2.00am',
    deliveryType:'Doorstep',
    Address:"Ijoka road Akure",
  },
  {
    id:3,
    Item:'Router',
    Client:'JOY MART',
    RecieverName:'Lee',
    City:'Ojuelegba',
    State:'Lagos',
    Status:'Ongoing',
     ClientContact:'08168848735',
    receiverPhone:'08162540435',
    pickupDate:'2nd Feb',
    pickupTime:'2.00am',
    deliveryType:'Doorstep',
    Address:"Ijoka road Akure",
  },
  {
    id:4,
    Item:'Mifi',
    Client:'ANATA',
    RecieverName:'Anita',
    City:'Shagari village',
    State:'Akure',
    Status:'Delivered',
     ClientContact:'08168848735',
    receiverPhone:'08162540435',
    pickupDate:'2nd Feb',
    pickupTime:'2.00am',
    deliveryType:'Doorstep',
    Address:"Ijoka road Akure",
  },
  {
    id:5,
    Item:'Cupboard',
    Client:'LERROY',
    RecieverName:'Ayomide',
    City:'Ijoka',
    State:'Akure',
    Status:'Delivered',
    Address:"Ijoka road Akure",
     ClientContact:'08168848735',
    receiverPhone:'08162540435',
    pickupDate:'2nd Feb',
    pickupTime:'2.00am',
    deliveryType:'Doorstep'
  },

  ]

function Page() {
    const toast = useToast()
   const { id } = useParams();
const data = Data.find((item) => item.id === Number(id));
     const router = useRouter()
     const mainHeaderStyle = `flex justify-center w-11/12 m-auto text-center`;
    const subjectStyle = `grid text-[18px] grid-cols-2  `;
    const objectStyle = ` text-[#332F2F] `;
  
  return (
    <div className={``}>
    <div className={` `} >
      <div>

      <div className='lg:w-10/12 w-11/12  m-auto lg:pt-[10px] pt-[20px]  '>
        <button onClick={()=>router.back()} className=' lg:hidden'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#FE9534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.2602 15.5297L9.74023 11.9997L13.2602 8.46973" stroke="#031966" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <Button onClick={()=>router.back()} className=' hidden  border rounded-lg lg:grid justify-center items-center border-[#D0D5DD] h-[40px] w-[111px]'>
       <div className=' flex items-center gap-x-[10px]'>
       <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.910581 5.58893C0.585145 5.26349 0.585145 4.73586 0.910581 4.41042L4.24392 1.07709C4.56935 0.751649 5.09699 0.751649 5.42243 1.07709C5.74786 1.40252 5.74786 1.93016 5.42243 2.2556L3.51168 4.16634L16.4998 4.16634C16.9601 4.16634 17.3332 4.53944 17.3332 4.99967C17.3332 5.45991 16.9601 5.83301 16.4998 5.83301L3.51168 5.83301L5.42243 7.74375C5.74786 8.06919 5.74786 8.59683 5.42243 8.92226C5.09699 9.2477 4.56935 9.2477 4.24391 8.92226L0.910581 5.58893Z" fill="#475367"/>
</svg>
        <h1 className=' text-[#475367] text-[14px]'>Go back</h1>
       </div>
        </Button>
      </div>
      <div className={` text-center  `} >
        <Text className=' text-[24px] text-[#FE9534] font-bold lg:pt-[10px] '>
           Order Details
        </Text>
      </div>
      <div className='mt-[15px] lg:mt-[20px]'>
        <div className=''>
          <Box border="1px" borderColor="gray.300" className=' shadow-lg border border-[#D2D2D2] rounded-lg w-11/12 lg:w-8/12 m-auto mt-2 pb-[40px] mb-[40px]'>
            <div className='grid lg:w-auto w-11/12 m-auto lg:justify-center mt-[20px] '>
              <Text className={` text-[#3F3A3A] font-bold text-[20px] lg:text-[24px]`}>
                Order ID: {data?.data?.data?.orderCode || ''}
              </Text>
            </div>
            <div className='gap-y-[15px] grid lg:w-8/12 w-11/12 m-auto mt-[30px] '>
              <div className='grid '>
                <div className={subjectStyle}>
                  <div className='grid justify-start w-full'>
                    <Text className='font-bold '>Item Name</Text>
                  </div>
                  <Text className={objectStyle}>{data?.Item || ''}</Text>
                </div>
              </div>
                <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Client</Text>
                  <Text className={objectStyle}>
                  {data?.Client || ''},</Text>
                </div>
              </div>
               <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Client Contact</Text>
                  <Text className={objectStyle}>
                  {data?.ClientContact || ''},</Text>
                </div>
              </div>
              <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Receiver</Text>
                  <Text className={objectStyle}>
                  {data?.RecieverName || ''},</Text>
                </div>
              </div>
              <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>City</Text>
                  <Text className={objectStyle}>{data?.City || ''}</Text>
                </div>
              </div>
              <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>State</Text>
                  <Text className={objectStyle}>{data?.State || ''}</Text>
                </div>
              </div>
                <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-bold '>Address</Text>
                  <Text className={objectStyle}>
                  {data?.Address || ''},</Text>
                </div>
              </div>
              <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Receivers Contact</Text>
                  <Text className={objectStyle}>{data?.receiverPhone || ''}</Text>
                </div>
              </div>
               <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Status</Text>
                  <Text className={objectStyle}>{data?.Status || ''}</Text>
                </div>
              </div>
              <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Confirmation code</Text>
                  <Text className={`${objectStyle} font-bold text-blue-800`}>{data?.data?.data?.confirmCode || ''
                  }</Text>
                </div>
              </div>
              {data?.data?.data?.pickupDate != null && <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Pickup Date</Text>
                  <Text className={objectStyle}>{data?.data?.data?.pickupDate || ''}</Text>
                </div>
              </div>}
             {data?.data?.data?.pickupTime != null && <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>PickUp Time</Text>
                  <Text className={objectStyle}>{data?.data?.data?.pickupTime || ''}</Text>
                </div>
              </div>}
              <div className='grid '>
                <div className={subjectStyle}>
                  <Text className='font-semibold '>Delivery Type</Text>
                  <Text className={objectStyle}>{data?.data?.data?.deliveryType || ''}</Text>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      </div>
        
    </div>
    </div>
  )
}
export default Page