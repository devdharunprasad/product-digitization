"use server"
import { cookies } from "next/headers"

export const logout = () => {
    const cookieStore = cookies()
    cookieStore.delete("username")
    cookieStore.delete("password")
    cookieStore.delete("uid")
    return true
}