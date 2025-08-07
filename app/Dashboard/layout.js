import Wrapper from "../Components/Wrapper/Wrapper";
import { Box } from "@chakra-ui/react";
import DesktopSideBar from "../Components/Sidebar/DesktopSideBar";
import DesktopTopBar from "../Components/Navbar/DesktopTopBar";
export default function RootLayout({ children }) {
  return (
             <Box className=' flex'>
                  <Box className=" fixed">
                    <DesktopSideBar />
                  </Box>
                   <Box className=' flex-1 pl-[250px]'>
                    <DesktopTopBar />
                    {children}
                   </Box>
                </Box>
     
  );
}
