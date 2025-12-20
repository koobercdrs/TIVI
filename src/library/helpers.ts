import { Media } from '@/payload-types'

export function getMedia(media: Media | string) {
  if (typeof media == 'string') return { url: '', alt: 'no-alt' }

  if (!media || !media._key) return { url: '', alt: 'no-alt' }

  return { url: `https://utfs.io/f/${media._key}`, alt: media.alt || 'no-alt' }
}
