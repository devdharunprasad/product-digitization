"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export const register = async (formData) => {
  const cookieStore = cookies();
  const username = formData.get("username");
  const password = formData.get("password");

  const { data } = await axios.post(
    "https://ondchackathon-production.up.railway.app/register",
    {
      username,
      password,
    }
  );
  if (data) {
    cookieStore.set("username", username);
    cookieStore.set("password", password);
    cookieStore.set("uid", data?.id);
    cookieStore.set("lang", "lang")

    redirect("/");
  } else {
    console.log(err.message)
    throw new Error("Something went wrong");
  } // throw new Error(err.message);

  // redirect("/")
};
