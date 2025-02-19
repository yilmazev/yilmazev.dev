import { NextRequest, NextResponse } from "next/server"

const locales = [ "en", "tr" ]
const defaultLocale = "en"

export default async function middleware(req: NextRequest) {
  let locale = req.cookies.get("locale")?.value

  if (!locale) {
    const acceptLanguage = req.headers.get("accept-language")

    if (acceptLanguage) {
      const acceptedLanguages = acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim().toLowerCase().split("-")[0])
      locale = acceptedLanguages.find((lang) => locales.includes(lang)) || defaultLocale
    } else {
      locale = defaultLocale
    }

    const response = NextResponse.next()
    response.cookies.set("locale", locale, { path: "/" })

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [ "/((?!api|_next/static|_next/image|favicon.ico).*)" ]
}