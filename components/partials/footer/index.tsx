import React from "react";
import { useSidebar, useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileFooter from "./mobile-footer";
import FooterLayout from "./footer-layout";
import { useMounted } from "@/hooks/use-mounted";

const Footer = ({ handleOpenSearch }: { handleOpenSearch: () => void }) => {
  const { collapsed } = useSidebar();
  const mounted = useMounted();
  const isMobile = useMediaQuery("(min-width: 768px)");

  if (!mounted) {
    return null;
  }
  if (!isMobile) {
    return <MobileFooter handleOpenSearch={handleOpenSearch} />;
  }

  return (
    <FooterLayout
      className={`sticky bottom-0 ${
        collapsed
          ? "ltr:xl:ml-[72px] rtl:xl:mr-[72px]"
          : "ltr:xl:ml-[248px] rtl:xl:mr-[300px]"
      }`}
    >
      <FooterContent />
    </FooterLayout>
  );
};

export default Footer;

const FooterContent = () => {
  return (
    <div className="block md:flex md:justify-between text-muted-foreground">
      <p className="sm:mb-0 text-xs md:text-sm">
        COPYRIGHT © {new Date().getFullYear()} DashTail All rights Reserved
      </p>
      <p className="mb-0 text-xs md:text-sm">
        Hand-crafted & Made by{" "}
        <a
          className="text-primary"
          target="__blank"
          href="https://codeshaper.net"
        >
          Codeshaper
        </a>
      </p>
    </div>
  );
};
