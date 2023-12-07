"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  role: string;
}

const Sidebar: FC<SidebarProps> = ({ role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Ref for the sidebar
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Function to handle outside click
  const handleOutsideClick = (event: MouseEvent) => {
    if (sidebarOpen && !sidebarRef.current?.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Adding click event listener
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Removing the event listener on cleanup
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebarOpen]);

  // Acquired Path name
  const path = usePathname();

  // get menu
  const menu = path.split("/")[2];

  return (
    <div className="z-40">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-4 ms-4 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed left-0 z-40 w-[17rem] h-screen transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : " -translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-8 py-4 overflow-y-auto bg-[#FFFCDB] text-black pt-12">
          <ul className={`${role === "caterer" ? "hidden" : ""} space-y-4 font-medium`}>
            <li>
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-32 h-32 mx-auto"
              />
            </li>
            <p className="text-[#323F07] text-center font-bold">SMART DORMITORY</p>

            <li>
              <a
                href="/"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "" ? "bg-gray-700" : ""
                }`}
              >
                <img src="/images/home.png" alt="class" className="w-7 h-7" />
                <span className="ml-6">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/Kuota"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "kuota" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/pesanan.png"
                  alt="kuota"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">
                  Kuota
                </span>
              </a>
            </li>
            <li>
              <a
                href="/Pesan"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "pesan" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/menu.png"
                  alt="pesan"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">Pesan</span>
              </a>
            </li>
            <li>
              <a
                href="/orderHistory"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "history" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/history.png"
                  alt="history"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">Sejarah Pesanan</span>
              </a>
            </li>
            <li>
              <a
                href="/Profil"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "profil" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/profil.png"
                  alt="profil"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">Profil</span>
              </a>
            </li>
          </ul>
          <ul className={`${role === "user" ? "hidden" : ""} space-y-4 font-medium`}>
            <li>
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-32 h-32 mx-auto"
              />
            </li>
            <p className="text-[#323F07] text-center font-bold">SMART DORMITORY</p>

            <li>
              <a
                href="/LihatPesanan"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "lihatPesanan" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/pesanan.png"
                  alt="lihatPesanan"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">
                  Lihat Pesanan
                </span>
              </a>
            </li>
            <li>
              <a
                href="/TambahMenu"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "tambahMenu" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/menu.png"
                  alt="tambahMenu"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">Tambah Menu</span>
              </a>
            </li>
            <li>
              <a
                href="/Profil"
                className={`flex items-center p-2  hover:bg-[#323F07] hover:text-white group ${
                  menu == "profil" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/profil.png"
                  alt="profil"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">Profil</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;