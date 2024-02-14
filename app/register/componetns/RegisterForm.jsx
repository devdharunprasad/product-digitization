"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import SubmitButton from "./SubmitButton";
import { register } from "../utils/register";
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { registerPage } from "@/app/shared/utils/lang";
import { useLangNumStore } from "@/app/zustand/store";

const RegisterForm = () => {

  const {langNum} = useLangNumStore(state => state)

  return (
    <section className="center-section">
      <h2 className="text-xl mb-4 text-center">{registerPage.title[langNum]}</h2>
      <form
        action={register}
        className="flex flex-col gap-5 justify-center items-center w-full"
      >
        <input
          type="text"
          name="username"
          placeholder={registerPage.name_field[langNum]}
          className="border border-black h-12 w-full px-2 rounded-md"
          lang="tam"
          required
        />
        <input
          type="password"
          name="password"
          placeholder={registerPage.pass_field[langNum]}
          className="border border-black h-12 w-full px-2 rounded-md"
          required
        />
    
        <SubmitButton button = {registerPage.button[langNum]} />
      </form>
      <p className="text-center mt-5">
        {registerPage?.isNew[langNum]}
        <Link href="/login" className="text-primary underline ml-2">
          {registerPage?.login[langNum]}
        </Link>
      </p>
    </section>
  );
}
export default RegisterForm;
