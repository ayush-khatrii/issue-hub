// "use client";
// import React, { useState } from "react";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
// import { navLinks } from "./constants/index.js";
// import { PiBugDroidFill } from "react-icons/pi";
// import Link from 'next/link'
// import { usePathname } from "next/navigation.js";
// import classNames from "classnames";

// export default function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const currentPathName = usePathname();

//   return (
//     <Navbar onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent justify="start">
//         <NavbarBrand>
//           <Link href="/" className="flex items-center justify-center gap-1">
//             <PiBugDroidFill size={20} />
//             <p className="font-bold text-base">issueHub</p>
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//       </NavbarContent>
//       <NavbarContent className="hidden sm:flex gap-4" justify="end">
//         {
//           navLinks.map((item, index) => (
//             <NavbarItem key={index}>
//               <Link
//                 className={classNames({
//                   "font-medium text-zinc-800 dark:text-zinc-300": currentPathName === item.href,
//                   "text-zinc-600 dark:text-zinc-300": currentPathName !== item.href,
//                   "hover:dark:text-white hover:text-black": true
//                 })}
//                 href={item.href}
//               >
//                 {item.name}
//               </Link>
//             </NavbarItem>
//           ))
//         }
//       </NavbarContent>
//       <NavbarMenu>
//         {navLinks.map((item, index) => (
//           <NavbarMenuItem key={index}>
//             <Link
//               className={classNames({
//                 "font-medium text-zinc-800 dark:text-zinc-300": currentPathName === item.href,
//                 "text-zinc-600 dark:text-zinc-300": currentPathName !== item.href,
//                 "hover:dark:text-white hover:text-black": true
//               })}
//               href={item.href}
//             >
//               {item.name}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar >
//   );
// }
"use client";
import React, { useState } from "react";
import { navLinks } from "./constants/index.js";
import { PiBugDroidFill } from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from "next/navigation.js";
import classNames from "classnames";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPathName = usePathname();

  return (
    <nav className="bg-white dark:bg-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center justify-center">
              <PiBugDroidFill size={20} className="" />
              <p className="font-black text-xl dark:text-white">hub</p>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={classNames(
                  "px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  {
                    "text-blue-600 dark:text-blue-400": currentPathName === item.href,
                    "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white": currentPathName !== item.href,
                  }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={classNames(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  {
                    "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-zinc-700": currentPathName === item.href,
                    "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-700": currentPathName !== item.href,
                  }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}