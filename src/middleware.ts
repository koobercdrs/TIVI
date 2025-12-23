import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const locales = ['en', 'ka']
const defaultLocale = 'en'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return NextResponse.next()

  const acceptLanguage = req.headers.get('accept-language')
  let locale = defaultLocale

  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()

    if (locales.includes(preferredLocale)) locale = preferredLocale
  }

  req.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(req.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
