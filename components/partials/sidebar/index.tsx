"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import PopoverSidebar from "./popover";
import MobileSidebar from "./mobile-sidebar";

const Sidebar = ({ trans }: { trans: string }) => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const selectedSidebar = !isDesktop ? (
    <MobileSidebar trans={trans} />
  ) : (
    <PopoverSidebar trans={trans} />
  );

  return <div>{selectedSidebar}</div>;
};

export default Sidebar;
