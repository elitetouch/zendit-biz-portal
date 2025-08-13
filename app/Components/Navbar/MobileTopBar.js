import React from 'react'
import { Box } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
function MobileTopBar({toogleSideNav}) {
  return (
    <Box className='lg:hidden h-[68px] grid items-center w-full'>
      <Box className=' flex justify-between w-11/12 m-auto items-center'>
              <Box>
              </Box>
                             <Box className=' flex items-center gap-x-[10px]'>
                              
                                          <IconButton
                                          backgroundColor={'transparent'}
                                          icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6219 12.6209L19.168 19.167M8.08464 14.5003C11.6285 14.5003 14.5013 11.6275 14.5013 8.08366C14.5013 4.53983 11.6285 1.66699 8.08464 1.66699C4.54081 1.66699 1.66797 4.53983 1.66797 8.08366C1.66797 11.6275 4.54081 14.5003 8.08464 14.5003Z" stroke="#454545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}
                                          />
                                          <IconButton
                                          onClick={toogleSideNav}
                                          backgroundColor={'transparent'}
                                          // onClick={toogleFunc}
                                          icon={<svg width="20" height="20" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66797 1.16699H20.3346M1.66797 7.00033H20.3346M1.66797 12.8337H20.3346" stroke="#454545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                              }
                                          />
                             </Box>
      </Box>
    </Box>
  )
}

export default MobileTopBar