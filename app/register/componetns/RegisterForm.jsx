"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import SubmitButton from "./SubmitButton";
import { registerPage } from "@/app/shared/utils/lang";
import { register } from "../utils/register";
import Link from "next/link";

const RegisterForm = () => {

    

  return (
    <section className="center-section">
      <h2 className="text-xl mb-4 text-center">{registerPage.title}</h2>
      <form
        action={register}
        className="flex flex-col gap-5 justify-center items-center w-full"
      >
        <input
          type="text"
          name="username"
          placeholder={registerPage.name_field}
          className="border border-black h-12 w-full px-2 rounded-md"
          lang="tam"
          required
        />
        <input
          type="password"
          name="password"
          placeholder={registerPage.pass_field}
          className="border border-black h-12 w-full px-2 rounded-md"
          required
        />
      
      <SubmitButton/>
      </form>
      <p className="text-center mt-5">New? <Link href = "/login" className="text-primary underline">Login</Link></p>

    </section>
  );
};

export default RegisterForm;
