import { NextResponse } from "next/server"

const { cookies } = require("next/headers")

 const middleware = async() => {
    const cookieStore = cookies()
    const username = cookieStore.has("username")
    const password = cookieStore.has("password")
        console.log({username, password})
    if(!username && !password){
        return NextResponse.redirect(`${process.env.URL}/login`)
    }
}
export const config = {
    matcher: ['/', "/voice-input", "/add-product-page"],
  }

export default middleware