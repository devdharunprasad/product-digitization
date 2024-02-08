"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { login } from "../utils/login";
import { useFormStatus } from 'react-dom'


const LoginForm = () => {
const form = useFormStatus()
console.log(form)
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
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-black h-12 w-full px-2 rounded-md"
        />
        <Button
        // aria-disabled = {pending}
          variant="blue"
          className="bg-primary_blue text-white rounded-full px-6"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default LoginForm;
