import { getPayload as getPayloadFn } from 'payload'

import payloadConfig from '@/payload.config'

export const getPayload = () => {
  return getPayloadFn({ config: payloadConfig })
}
