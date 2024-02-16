"use client";
import { DotsThreeVertical, Notepad, SignOut } from "phosphor-react";
import React from "react";
import { logout } from "../utils/logout";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageDropDown from "../languageDropdown";
import { useLangNumStore } from "@/app/zustand/store";
import { logoutContent } from "../utils/lang";

const PageTitle = ({ title, icon, isDropDownVisible = false }) => {
  const {langNum} = useLangNumStore(state => state)
  const router = useRouter();
  const handleLogout = () => {
    const hasLoggedOut = logout();
    if (hasLoggedOut) {
      router.push("/login");
    }
  };

  console.log(router);
  return (
    <h1 className="py-5 px-2 text-white bg-primary flex items-center gap-3">
      {icon === "Product" && <Notepad size={32} color="white" />}
      <span className="text-center">{title}</span>

      {isDropDownVisible && (
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-auto">
            <DotsThreeVertical size={32} color="white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-2 p-2">
            <p onClick={handleLogout}>{logoutContent[langNum]}</p>
            <LanguageDropDown />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </h1>
  );
};

export default PageTitle;
