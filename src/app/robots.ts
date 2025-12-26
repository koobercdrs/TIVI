import type { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_APP_URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      userAgent: '*',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}
