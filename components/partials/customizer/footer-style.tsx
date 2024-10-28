// "use client";
// import { useThemeStore } from "@/store";
// import { cn } from "@/lib/utils";
// import { useTheme } from "next-themes";
// import { themes } from "@/config/thems";
// import { Check } from "lucide-react";

// const FooterStyle = () => {
//   const { theme: mode } = useTheme();
//   const { theme: config, setTheme: setConfig } = useThemeStore();
//   const newTheme = themes.find((theme) => theme.name === config);

//   return (
//     <div
//       style={
//         {
//           "--theme-primary": `hsl(${
//             newTheme?.cssVars[mode === "dark" ? "dark" : "light"].primary
//           })`,
//         } as React.CSSProperties
//       }
//     >
//       <div className="mb-3 relative inline-block px-3 py-[3px] rounded before:bg-[--theme-primary] before:absolute before:top-0 before:left-0 before:w-full  before:h-full before:rounded before:opacity-10 before:z-[-1]  text-[--theme-primary]  text-xs font-medium">
//         Footer Type
//       </div>
//       <div className="flex flex-wrap items-center gap-3">
//         {["sticky", "static", "hidden"].map((value, index) => (
//           <label
//             htmlFor={`nav-type-${index}`}
//             key={`nav-type-${index}`}
//             className="flex  items-center gap-2 cursor-pointer"
//           >
//             <input
//               type="radio"
//               id={`nav-type-${index}`}
//               value={value}
//               className="hidden"
//             />
//             <div
//               className={cn(
//                 "w-4 h-4 flex justify-center items-center rounded-full border border-default-400"
//               )}
//             ></div>
//             <span className="text-sm text-default-500 capitalize">{value}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FooterStyle;
