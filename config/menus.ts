import {
  Application,
  Chart,
  Components,
  DashBoard,
  Stacks2,
  Map,
  Grid,
  Files,
  Graph,
  ClipBoard,
  Cart,
  Envelope,
  Messages,
  Monitor,
  ListFill,
  Calendar,
  Flag,
  Book,
  Note,
  ClipBoard2,
  Note2,
  Note3,
  BarLeft,
  BarTop,
  ChartBar,
  PretentionChartLine,
  PretentionChartLine2,
  Google,
  Pointer,
  Map2,
  MenuBar,
  Icons,
  ChartArea,
  Building,
  Building2,
  Sheild,
  Error,
  Diamond,
  Heroicon,
  LucideIcon,
  CustomIcon,
  Mail,
} from "@/components/svg";

export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[];
  nested?: MenuItemProps[];
  onClick: () => void;
  isHeader?: boolean;
}

export const menusConfig = {
  mainNav: [
    {
      title: "Dashboard",
      icon: DashBoard,
      href: "/dashboard",

      child: [
        {
          title: "Analytics",
          href: "/dashboard",
          icon: Graph,
        },
        {
          title: "Requests",
          href: "/requests",
          icon: Cart,
        },
        {
          title: "Appointments ",
          href: "/project",
          icon: ClipBoard,
        },
        {
          title: "Availability",
          href: "/availability",
          icon: ClipBoard,
        },
        {
          title: "My Patients",
          href: "/my-patients",
          icon: ClipBoard,
        },
        {
          title: "Specialties & services",
          href: "/specialties-services",
          icon: ClipBoard,
        },
        {
          title: "reviews",
          href: "/reviews",
          icon: ClipBoard,
        },
        {
          title: "Accounts",
          href: "/accounts",
          icon: ClipBoard,
        },
      ],
    },
    {
      title: "Application",
      icon: Application,
      child: [
        {
          title: "chat",
          icon: Messages,
          href: "/chat",
        },
        {
          title: "email",
          icon: Envelope,
          href: "/email",
        },
      ],
    },
    {
      title: "Invoices",
      icon: Application,
      child: [
        {
          title: "create invoice",
          icon: Messages,
          href: "/chat",
        },
        {
          title: "Invoice Details",
          icon: Messages,
          href: "/chat",
        },
        {
          title: "invoice list",
          icon: Envelope,
          href: "/email",
        },
      ],
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",

        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Requests",
            href: "/requests",
            icon: Cart,
          },
          {
            title: "Appointments ",
            href: "/project",
            icon: ClipBoard,
          },
          {
            title: "Availability",
            href: "/availability",
            icon: ClipBoard,
          },
          {
            title: "My Patients",
            href: "/my-patients",
            icon: ClipBoard,
          },
          {
            title: "Specialties & services",
            href: "/specialties-services",
            icon: ClipBoard,
          },
          {
            title: "reviews",
            href: "/reviews",
            icon: ClipBoard,
          },
          {
            title: "Accounts",
            href: "/accounts",
            icon: ClipBoard,
          },
        ],
      },
      {
        title: "Application",
        icon: Application,
        child: [
          {
            title: "chat",
            icon: Messages,
            href: "/chat",
          },
          {
            title: "email",
            icon: Envelope,
            href: "/email",
          },
        ],
      },

      {
        title: "Invoice",
        icon: Files,
        href: "#",

        child: [
          {
            title: "Create Invoice",
            href: "/create-invoice",
          },
          {
            title: "Invoice Details",
            href: "/invoice-details",
          },
          {
            title: "Invoice List",
            href: "/invoice-list",
          },
        ],
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",

        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Requests",
            href: "/requests",
            icon: Cart,
          },
          {
            title: "Appointments ",
            href: "/project",
            icon: ClipBoard,
          },
          {
            title: "Availability",
            href: "/availability",
            icon: ClipBoard,
          },
          {
            title: "My Patients",
            href: "/my-patients",
            icon: ClipBoard,
          },
          {
            title: "Specialties & services",
            href: "/specialties-services",
            icon: ClipBoard,
          },
          {
            title: "reviews",
            href: "/reviews",
            icon: ClipBoard,
          },
          {
            title: "Accounts",
            href: "/accounts",
            icon: ClipBoard,
          },
        ],
      },
      {
        isHeader: true,
        title: "Application",
      },
      {
        title: "chat",
        icon: Messages,
        href: "/chat",
      },
      {
        title: "email",
        icon: Envelope,
        href: "/email",
      },

      {
        title: "Invoice",
        icon: Files,
        href: "#",

        child: [
          {
            title: "Create Invoice",
            href: "/create-invoice",
          },
          {
            title: "Invoice Details",
            href: "/invoice-details",
          },
          {
            title: "Invoice List",
            href: "/invoice-list",
          },
        ],
      },
    ],
  },
};
export const patinetMenuConfig = {
  mainNav: [
    {
      title: "Dashboard",
      icon: DashBoard,
      href: "/dashboard",

      child: [
        {
          title: "patient",
          href: "/dashboard",
          icon: Graph,
        },
        {
          title: "Requests",
          href: "/requests",
          icon: Cart,
        },
        {
          title: "Appoitments ",
          href: "/project",
          icon: ClipBoard,
        },
        {
          title: "Availability",
          href: "/availability",
          icon: ClipBoard,
        },
        {
          title: "My Patients",
          href: "/my-patients",
          icon: ClipBoard,
        },
        {
          title: "Specialties & services",
          href: "/specialties-services",
          icon: ClipBoard,
        },
        {
          title: "reviews",
          href: "/reviews",
          icon: ClipBoard,
        },
        {
          title: "Accounts",
          href: "/accounts",
          icon: ClipBoard,
        },
      ],
    },
    {
      title: "Application",
      icon: Application,
      child: [
        {
          title: "chat",
          icon: Messages,
          href: "/chat",
        },
        {
          title: "email",
          icon: Envelope,
          href: "/email",
        },
      ],
    },
    {
      title: "Invoices",
      icon: Application,
      child: [
        {
          title: "create invoice",
          icon: Messages,
          href: "/chat",
        },
        {
          title: "Invoice Details",
          icon: Messages,
          href: "/chat",
        },
        {
          title: "invoice list",
          icon: Envelope,
          href: "/email",
        },
      ],
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",

        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Requests",
            href: "/requests",
            icon: Cart,
          },
          {
            title: "Appointments ",
            href: "/project",
            icon: ClipBoard,
          },
          {
            title: "Availability",
            href: "/availability",
            icon: ClipBoard,
          },
          {
            title: "My Patients",
            href: "/my-patients",
            icon: ClipBoard,
          },
          {
            title: "Specialties & services",
            href: "/specialties-services",
            icon: ClipBoard,
          },
          {
            title: "reviews",
            href: "/reviews",
            icon: ClipBoard,
          },
          {
            title: "Accounts",
            href: "/accounts",
            icon: ClipBoard,
          },
        ],
      },
      {
        title: "Application",
        icon: Application,
        child: [
          {
            title: "chat",
            icon: Messages,
            href: "/chat",
          },
          {
            title: "email",
            icon: Envelope,
            href: "/email",
          },
        ],
      },

      {
        title: "Invoice",
        icon: Files,
        href: "#",

        child: [
          {
            title: "Create Invoice",
            href: "/create-invoice",
          },
          {
            title: "Invoice Details",
            href: "/invoice-details",
          },
          {
            title: "Invoice List",
            href: "/invoice-list",
          },
        ],
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",

        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Requests",
            href: "/requests",
            icon: Cart,
          },
          {
            title: "Appointments ",
            href: "/project",
            icon: ClipBoard,
          },
          {
            title: "Availability",
            href: "/availability",
            icon: ClipBoard,
          },
          {
            title: "My Patients",
            href: "/my-patients",
            icon: ClipBoard,
          },
          {
            title: "Specialties & services",
            href: "/specialties-services",
            icon: ClipBoard,
          },
          {
            title: "reviews",
            href: "/reviews",
            icon: ClipBoard,
          },
          {
            title: "Accounts",
            href: "/accounts",
            icon: ClipBoard,
          },
        ],
      },
      {
        isHeader: true,
        title: "Application",
      },
      {
        title: "chat",
        icon: Messages,
        href: "/chat",
      },
      {
        title: "email",
        icon: Envelope,
        href: "/email",
      },

      {
        title: "Invoice",
        icon: Files,
        href: "#",

        child: [
          {
            title: "Create Invoice",
            href: "/create-invoice",
          },
          {
            title: "Invoice Details",
            href: "/invoice-details",
          },
          {
            title: "Invoice List",
            href: "/invoice-list",
          },
        ],
      },
    ],
  },
};

export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number];
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number];
export type MainNavType = (typeof menusConfig.mainNav)[number];
