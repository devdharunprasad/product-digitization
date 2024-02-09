"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { login } from "../utils/login";
import SubmitButton from "./SubmitButton";
import { loginPage } from "@/app/shared/utils/lang";
import ErrorLogin from "../error";

const LoginForm = () => {

    

  return (
    <section className="center-section">
      <h2 className="text-xl mb-4 text-center">{loginPage.title}</h2>
      <form
        action={login}
        className="flex flex-col gap-5 justify-center items-center w-full"
      >
        <input
          type="text"
          name="username"
          placeholder={loginPage.name_field}
          className="border border-black h-12 w-full px-2 rounded-md"
          lang="tam"
          required
        />
        <input
          type="password"
          name="password"
          placeholder={loginPage.pass_field}
          className="border border-black h-12 w-full px-2 rounded-md"
          required
        />
      
      <SubmitButton/>
      </form>
  
    </section>
  );
};

export default LoginForm;
