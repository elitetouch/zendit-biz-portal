import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import DesktopSideBar from '../Navbar/MobileTopBar'
import DesktopTopBar from '../Navbar/DesktopTopBar'
function Wrapper({children}) {
  return (
  <ChakraProvider>
        {children}
    </ChakraProvider>
  )
}

export default Wrapper