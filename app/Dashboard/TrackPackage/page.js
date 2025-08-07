'use client'
import React from 'react'
import { Clients_Overview } from '../Client/page'
import { Box, Input, Text, Button } from '@chakra-ui/react'
import TrackTable from '@/app/Components/Table/TrackTable'
function Page() {
  return (
    <div className=' min-h-screen bg-gray-100'>
            <Box>
                <Clients_Overview />
            </Box>
            <Box className=' mt-[20px] ml-[20px] mr-[20px] bg-white rounded-lg'>
     <Box className=' mt-[20px] justify-between flex items-center w-11/12 m-auto pt-[20px] '>
                  <Box>
                    <Text className=' font-semibold'>Track package</Text>
                  </Box>
                  <Box cursor={'pointer'} className=' flex items-center gap-x-[10px]'>
                    <Text className=' text-[12px]'>More</Text>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33203 6.30729H10.6654M10.6654 6.30729L5.9987 1.64062M10.6654 6.30729L5.9987 10.974" stroke="#8E95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
                  </Box>
                </Box>

                <Box className=' bg-gray-200 rounded-lg w-11/12 m-auto mt-[20px] '>
                  <Box className=' flex items-center gap-x-[10px] pt-[20px] w-11/12 m-auto'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.2969 11.8633C22.2969 17.9384 17.372 22.8633 11.2969 22.8633C5.22174 22.8633 0.296875 17.9384 0.296875 11.8633C0.296875 5.78815 5.22174 0.863281 11.2969 0.863281C17.372 0.863281 22.2969 5.78815 22.2969 11.8633ZM11.2938 21.3633C8.39984 21.3633 3.10805 19.4306 4.53713 16.8633C5.7945 14.6044 8.33776 12.3633 11.2938 12.3633C14.2498 12.3633 16.7931 14.6044 18.0505 16.8633C19.5021 19.4712 14.1878 21.3633 11.2938 21.3633ZM11.2969 11.8633C13.506 11.8633 15.2969 10.0724 15.2969 7.86328C15.2969 5.65414 13.506 3.86328 11.2969 3.86328C9.08774 3.86328 7.29688 5.65414 7.29688 7.86328C7.29688 10.0724 9.08774 11.8633 11.2969 11.8633Z" fill="#667185"/>
</svg>
                    <Text className=' text-[#332F2F]'>Enter tracking ID</Text>
                  </Box>
                  <Box className=' flex items-center justify-between mt-[20px] w-11/12 m-auto gap-x-[20px] pb-[30px]'>
                    <Input
                    className=' flex-1 bg-white'
                    backgroundColor={'white'}
                    maxW={915}
                    />

                   <Box>
                                     <Button
                                      onClick={()=>{}}
                                      backgroundColor={'#031966'}
                                      color={'white'}
                                      _hover={{shadow:'md',
                                        backgroundColor:'#FE9534'
                                      }}
                                        className=" bg-[#031966] hover:bg-[#FE9534] hover:shadow-md duration-500 text-white border flex justify-center shadow-xl items-center w-full lg:w-[360px] h-[48px] rounded-full border-[#FE9534]"
                                      >
                                        Submit                 
                                      </Button>
                  </Box>
                  </Box>

                </Box>
<Box className=' pt-[20px] w-11/12 m-auto pb-[40px]'>
    <Box>
      <TrackTable />
     </Box>

</Box>
</Box>
    </div>
  )
}

export default Page