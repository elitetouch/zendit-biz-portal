"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import DesktopSideBar from "./DesktopSideBar";

function DashboardMobileSide({ onClose, isOpen, extendNav }) {
  // const [mobileTog, setMobileRTog] = useState(false)
  const mobileTogFunc = () => {
    onClose();
  };
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent w="fit-content" maxW="70vw" p={0} h={"100vh"}>
        <DrawerBody p={0}>
          <DesktopSideBar
            extendNav={extendNav}
            client
            mobileTog
            toogleMobile={() => mobileTogFunc()}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DashboardMobileSide;
