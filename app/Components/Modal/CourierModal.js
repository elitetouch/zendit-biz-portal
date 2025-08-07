'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import { useToast, Text, Select} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import CourierTable from '../Table/CourierTable';
// import { useToast } from '@chakra-ui/react';
function CourierModal({openSuccessfull,setOpenSuccessfull,setVerifyPayment }) {
  const toast = useToast()
  const router = useRouter();
//   const AssignFunction =()=>{
//      toast({
//       title: 'Assign Order',
//       description: 'Success! you have just successfully assigned order to Anata Logistics Company, Check Logistics Company Panel To Track Order',
//       status: 'success',
//       duration: 9000,
//       isClosable: true,
//     });
//   }
    return (
    <>
    <Box
     opacity={0.97}
     zIndex={999}
    onClick={setOpenSuccessfull} className={`fixed inset-0  flex lg:justify-center lg:flex-row flex-col justify-end h-screen items-center  transition-colors  ${openSuccessfull?"visible bg-[#1D1D29] ":"invisible"}`}>
            <div onClick={(e)=>e.stopPropagation()} className={`bg-white rounded-lg lg:grid lg:max-h-none max-h-[80vh]  items-center lg:mt-auto mt-[240px] fixed lg:relative bottom-0 overscroll-y-auto custom-scrollbar flex flex-col lg:flex-none lg:w-8/12 w-full m-auto  shadow lg:h-fit  overflow-y-scroll  p-6 transition-all  `}>
            {/* <Box cursor={'pointer'} className='flex justify-center w-full lg:justify-end '>
                  <ImCancelCircle onClick={setOpenSuccessfull} color='#FF5252' className=' h-[27px] w-[27px] lg:grid hidden'/>
                  <div className=' bg-[#8C8E98] w-6/12 h-1 rounded-sm lg:hidden'></div>
                  </Box> */}
                <Box>
                    <Box className=' flex items-center justify-between pt-[20px] w-11/12 m-auto'>
                        <Text className=' font-semibold text-[20px]'>Couriers</Text>
                        <IconButton
                        backgroundColor={'transparent'}
                        onClick={()=>setOpenSuccessfull()}
                        icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99912 7.55879L17.4241 0.133789L19.5451 2.25479L12.1201 9.67979L19.5451 17.1048L17.4241 19.2258L9.99912 11.8008L2.57413 19.2258L0.453125 17.1048L7.87813 9.67979L0.453125 2.25479L2.57413 0.133789L9.99912 7.55879Z" fill="#636267"/>
</svg>
}
                        />
                    </Box>
                    <Box className=' flex items-center gap-x-[20px] justify-between mt-[20px] w-11/12 m-auto'>
                        <Box className=' flex items-center gap-x-[10px]'>
                            <Box>
                                <Select placeholder='Select Couriers'>
                                    <option>Raikage</option>
                                </Select>
                            </Box>
                            <Box
                            border="1px" borderColor="gray.300" borderRadius="lg"
                            className=' h-[36px] w-[85px] grid items-center justify-center'
                            >
                                <Box className=' flex items-center gap-x-[10px]'>
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.332031 1.68001C0.332031 1.21978 0.705127 0.84668 1.16536 0.84668H12.832C13.2923 0.84668 13.6654 1.21978 13.6654 1.68001C13.6654 2.14025 13.2923 2.51335 12.832 2.51335H1.16536C0.705127 2.51335 0.332031 2.14025 0.332031 1.68001Z" fill="#344054"/>
<path d="M1.9987 6.68001C1.9987 6.21978 2.37179 5.84668 2.83203 5.84668H11.1654C11.6256 5.84668 11.9987 6.21978 11.9987 6.68001C11.9987 7.14025 11.6256 7.51335 11.1654 7.51335H2.83203C2.37179 7.51335 1.9987 7.14025 1.9987 6.68001Z" fill="#344054"/>
<path d="M4.4987 10.8467C4.03846 10.8467 3.66536 11.2198 3.66536 11.68C3.66536 12.1403 4.03846 12.5133 4.4987 12.5133H9.4987C9.95893 12.5133 10.332 12.1403 10.332 11.68C10.332 11.2198 9.95893 10.8467 9.4987 10.8467H4.4987Z" fill="#344054"/>
</svg>
                                <Text className=' text-[14px]'>Filter</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box className=' flex items-center gap-x-[10px]'>
                            <Box>
                                <Box  className=' rounded-lg h-[36px] w-[41px] grid items-center text-[14px] justify-center bg-[#667185] text-white'>All</Box>
                            </Box>
                            <Box>
                                <Select placeholder='Lagos' >
                                    <option>Raikage</option>
                                </Select>
                            </Box>
                        </Box>
                    </Box>
                    <Box className=' mt-[20px] w-11/12 m-auto'>
                       <Box
                        borderBottom="1px" borderColor="gray.300" 
                        className=' w-full'
                       >
                        <Box
                         borderBottom="1px" borderColor="#031966" 
                         className=' w-fit'
                         >
                            <Text className=' pb-[2px]'>All Couriers</Text>
                        </Box>
                        </Box> 
                       <Box className=' mt-[20px]'>
                        <CourierTable />
                        </Box>   
                    </Box>
                </Box>
                </div>
    </Box>
    </>
  );
}
export default CourierModal;