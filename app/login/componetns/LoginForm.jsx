"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { login } from "../utils/login";
import SubmitButton from "./SubmitButton";
import ErrorLogin from "../error";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LoginForm = ({loginPage}) => {
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
    
        <SubmitButton loginPage={loginPage} />
      </form>
      <p className="text-center mt-5">
        {loginPage?.isNew}
        <Link href="/register" className="text-primary underline">
          {loginPage?.register}
        </Link>
      </p>
    </section>
  );
};

export default LoginForm;
