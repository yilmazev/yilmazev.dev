import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const locale = cookieStore.get("locale")?.value ?? "en"

  const messages = (await import(`./locales/${locale}.json`)).default

  return {
    locale,
    messages
  }
})