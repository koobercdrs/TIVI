import type { CollectionConfig } from 'payload'

export const Menu: CollectionConfig = {
  slug: 'menu',
  labels: { plural: 'მენუ' },
  admin: { useAsTitle: 'name' },
  fields: [
    {
      label: 'მენიუს ტიპი (სასმელი | საჭმელი)',
      required: true,
      type: 'select',
      name: 'type',
      options: [
        { label: 'საკვები', value: 'dish' },
        { label: 'სასმელი', value: 'drink' },
      ],
    },
    {
      label: 'დასახელება',
      localized: true,
      required: true,
      name: 'name',
      type: 'text',
    },
    {
      label: 'აღწერა',
      type: 'textarea',
      localized: true,
      required: true,
      name: 'desc',
    },
    {
      label: 'ფასი',
      type: 'number',
      localized: true,
      required: true,
      name: 'price',
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      label: 'სურათი',
      relationTo: 'media',
    },
  ],
}
