import { NextResponse } from "next/server"

const { cookies } = require("next/headers")


import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'ta', 'te', 'hi'] // English, Tamil, Telugu, Hindi
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'
 const middleware = async(req) => {

    const {pathname} = req.nextUrl
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    if(pathnameHasLocale) return

    

    const cookieStore = cookies()

    const uid = cookieStore.has("uid")
    const uidvalue = cookieStore.get("uid")

        console.log({uidvalue})
    if( !uid &&  req.nextUrl.pathname !==  "/login"){
        return NextResponse.redirect(`${req.nextUrl.origin}/login`)
    }
}
export const config = {
    matcher: ['/', "/voice-input", "/add-product-page", "/login"],
  }

  export default middleware