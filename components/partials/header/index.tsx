"use client";
import React from "react";
import { cn } from "@/lib/utils";
import ThemeButton from "./theme-button";
import { useSidebar, useThemeStore } from "@/store";
import ProfileInfo from "./profile-info";
import VerticalHeader from "./vertical-header";
import Inbox from "./inbox";
import NotificationMessage from "./notification-message";
import Language from "./language";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileMenuHandler from "./mobile-menu-handler";
import FullScreen from "./full-screen";
import ClassicHeader from "./layout/classic-header";

const NavTools = ({ isDesktop }: { isDesktop: boolean }) => (
  <div className="nav-tools flex items-center gap-2">
    {isDesktop && <Language />}
    {isDesktop && <FullScreen />}
    <ThemeButton />
    <Inbox />
    <NotificationMessage />
    <div className="ltr:pl-2 rtl:pr-2">
      <ProfileInfo />
    </div>
    {!isDesktop && <MobileMenuHandler />}
  </div>
);

const Header = ({ handleOpenSearch }: { handleOpenSearch: () => void }) => {
  const { collapsed } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <ClassicHeader
      className={cn("", {
        "ltr:xl:ml-[248px] rtl:xl:mr-[300px] sticky top-0": !collapsed,
        "ltr:xl:ml-[72px] rtl:xl:mr-[72px] sticky top-0": collapsed,
      })}
    >
      <div className="w-full bg-card/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b">
        <div className="flex justify-between items-center h-full">
          <VerticalHeader handleOpenSearch={handleOpenSearch} />
          <NavTools isDesktop={isDesktop} />
        </div>
      </div>
    </ClassicHeader>
  );
};

export default Header;
