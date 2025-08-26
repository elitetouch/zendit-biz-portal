"use client";
import Wrapper from "../Components/Wrapper/Wrapper";
import { Box } from "@chakra-ui/react";
import DesktopSideBar from "../Components/Sidebar/DesktopSideBar";
import DesktopTopBar from "../Components/Navbar/DesktopTopBar";
import DashboardMobileSide from "../Components/Sidebar/DashboardMobileSide";
import MobileTopBar from "../Components/Navbar/MobileTopBar";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
export default function RootLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toogleSideMenu, setToogleSideMenu] = useState(false);
  const toogleFunc = () => {
    setToogleSideMenu(!toogleSideMenu);
    //  toogleMobile()
  };
  const [extendNav, setExtendNav] = useState(true);
  return (
    <Box className=" lg:flex w-full ">
      <Box className=" lg:fixed lg:grid hidden">
        <DesktopSideBar extendNav={extendNav} setExtendNav={setExtendNav} />
      </Box>
      <Box className=" lg:hidden w-full">
        <DashboardMobileSide
          extendNav={extendNav}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Box>

      <Box
        className={`lg:flex-1 ${
          extendNav ? " lg:pl-[210px]" : "pl-[100px]"
        } grid w-full`}
      >
        <Box className=" lg:hidden grid w-full bg-amber-600">
          <MobileTopBar toogleSideNav={!isOpen ? onOpen : onClose} />
        </Box>
        <Box className=" lg:grid hidden">
          <DesktopTopBar />
        </Box>
        {children}
      </Box>
    </Box>
  );
}
