import { getPayload as getPayloadFn } from 'payload'

import payloadConfig from '@/payload.config'
import { Media } from '@/payload-types'

export const getPayload = () => {
  return getPayloadFn({ config: payloadConfig })
}

export function getMedia(media: Media) {
  if (!media || !media._key) return { url: '', alt: 'no-alt' }

  return { url: `https://utfs.io/f/${media._key}`, alt: media.alt || 'no-alt' }
}
