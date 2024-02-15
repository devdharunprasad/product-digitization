"use client";
import React from "react";
import { login } from "../utils/login";
import SubmitButton from "./SubmitButton";
import Link from "next/link";
import { loginPage } from "@/app/shared/utils/lang";
import { useLangNumStore } from "@/app/zustand/store";
import ErrorLogin from "../error";

const LoginForm = () => {

    const {langNum} = useLangNumStore(state => state)

  return (
    <section className="center-section">
      <h2 className="text-xl mb-4 text-center">{loginPage.title[langNum]}</h2>
      <form
        action={login}
        className="flex flex-col gap-5 justify-center items-center w-full"
      >
        <input
          type="text"
          name="username"
          placeholder={loginPage.name_field[langNum]}
          className="border border-black h-12 w-full px-2 rounded-md"
          lang="tam"
          defaultValue="seller"
          required
        />
        <input
          type="password"
          name="password"
          defaultValue="seller123"
          placeholder={loginPage.pass_field[langNum]}
          className="border border-black h-12 w-full px-2 rounded-md"
          required
        />
    
        <SubmitButton button = {loginPage.button[langNum]} />
      </form>
      <p className="text-center mt-5">
        {loginPage?.isNew[langNum]}
        <Link href="/register" className="text-primary underline ml-2">
          {loginPage?.register[langNum]}
        </Link>
      </p>
    </section>
  );
};

export default LoginForm;
