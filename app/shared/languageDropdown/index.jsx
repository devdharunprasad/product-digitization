"use client";
import { useLangNumStore } from "@/app/zustand/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const LANG = ["English", "हिंदी"];

const LanguageDropDown = () => {
  const { langNum, changeLangNum } = useLangNumStore((state) => state);
  console.log({ langNum });
  return (
    <div className="">
      <Select onValueChange={(e) => changeLangNum(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={LANG[langNum]} />
        </SelectTrigger>
        <SelectContent>
          {LANG.map((lang, index) => (
            <SelectItem key={lang} value={index}>
              {lang}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageDropDown;
