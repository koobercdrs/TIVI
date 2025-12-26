import type { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_APP_URL || ''

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: URL,
      priority: 1.0,
      changeFrequency: 'daily',
      images: ['/images/hero-img-1.jpg', '/images/hero-img-2.jpg'],
      alternates: { languages: { ka: `${URL}/ka`, en: `${URL}en` } },
    },
  ]
}
