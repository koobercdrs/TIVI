'use server'
import { getPayload } from '@/library/payload'
import { ILang } from '@/types'

export const getEventById = async (id: string, lang: ILang) => {
  console.log(id)

  const payload = await getPayload()

  const content = await payload.findByID({ id: id, collection: 'events', locale: lang })
  console.log(content)

  return content
}
