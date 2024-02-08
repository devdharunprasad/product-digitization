"use server";

import { cookies } from "next/headers";
import {  redirect } from "next/navigation";

export const login = async (formData) => {
  const cookieStore = cookies();
  const username = formData.get("username");
  const password = formData.get("password");
  cookieStore.set("username", username)
  cookieStore.set("password", password)

 redirect("/")
};
