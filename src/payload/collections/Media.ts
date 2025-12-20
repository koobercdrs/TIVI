import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
    formatOptions: {
      format: 'webp',
      options: { quality: 100 },
    },
    resizeOptions: {
      width: 1920,
      height: 1080,
    },
  },
  admin: { description: 'ატვირთეთ სურათები თქვენი საიტისთვის' },
  labels: { singular: 'ფაილი', plural: 'ფაილები' },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: false,
      label: 'Alt ტექსტი',
      admin: { description: 'სურათის აღწერა accessibility-სთვის' },
    },
  ],
}
