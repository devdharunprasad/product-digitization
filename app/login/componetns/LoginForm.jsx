"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { login } from "../utils/login";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {

  return (
    <section className="center-section">
      <h2 className="text-xl mb-4 text-center">Login</h2>
      <form
        action={login}
        className="flex flex-col gap-5 justify-center items-center w-full"
      >
        <input
          type="text"
          name="username"
          placeholder="Name"
          className="border border-black h-12 w-full px-2 rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-black h-12 w-full px-2 rounded-md"
          required
        />
      
      <SubmitButton/>
      </form>
    </section>
  );
};

export default LoginForm;
