"use client";
import React from "react";
import Header from "@/components/partials/header";
import Sidebar from "@/components/partials/sidebar";

import { useSidebar } from "@/store";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "@/components/partials/footer";
import { useMediaQuery } from "@/hooks/use-media-query";
import ThemeCustomize from "@/components/partials/customizer/theme-customizer";
import MobileSidebar from "@/components/partials/sidebar/mobile-sidebar";
import HeaderSearch from "@/components/header-search";
import { useMounted } from "@/hooks/use-mounted";
import LayoutLoader from "@/components/layout-loader";
import { menusConfig, patinetMenuConfig } from "@/config/menus";
import { cn } from "@/lib/utils";
const DashBoardLayoutProvider = ({
  children,
  trans,
}: {
  children: React.ReactNode;
  trans: any;
}) => {
  const { collapsed } = useSidebar();
  console.log(collapsed);
  const [open, setOpen] = React.useState(false);

  const location = usePathname();
  const isMobile = useMediaQuery("(min-width: 768px)");
  const mounted = useMounted();
  let role = "patinet";

  let menus = patinetMenuConfig;
  if (role === "patinet") {
    menus = patinetMenuConfig;
  }

  if (role === "doctor") {
    menus = menusConfig;
  }

  if (!mounted) {
    return <LayoutLoader />;
  }

  return (
    <>
      <Header handleOpenSearch={() => setOpen(true)} />
      <Sidebar trans={trans} />

      <div
        className={cn("content-wrapper transition-all duration-150", {
          "ltr:xl:ml-[240px] rtl:xl:mr-[300px]": !collapsed,
          "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
        })}
      >
        <div className={cn(" layout-padding px-6 pt-6  page-min-height ")}>
          <LayoutWrapper
            isMobile={isMobile}
            setOpen={setOpen}
            open={open}
            location={location}
            trans={trans}
          >
            {children}
          </LayoutWrapper>
        </div>
      </div>
      <Footer handleOpenSearch={() => setOpen(true)} />
      {isMobile && <ThemeCustomize />}
    </>
  );
};

export default DashBoardLayoutProvider;

const LayoutWrapper = ({
  children,
  isMobile,
  setOpen,
  open,
  location,
  trans,
}: {
  children: React.ReactNode;
  isMobile: boolean;
  setOpen: any;
  open: boolean;
  location: any;
  trans: any;
}) => {
  return (
    <>
      <motion.div
        key={location}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
          pageExit: {
            opacity: 0,
            y: -50,
          },
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <main>{children}</main>
      </motion.div>

      <MobileSidebar trans={trans} className="left-[300px]" />
      <HeaderSearch open={open} setOpen={setOpen} />
    </>
  );
};