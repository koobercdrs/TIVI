import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  auth: true,
  fields: [],
  slug: 'users',
  admin: { useAsTitle: 'email' },
  labels: { plural: 'ადმინები', singular: 'ადმინი' },
}
