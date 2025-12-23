import type { CollectionConfig } from 'payload'
import { event_packages } from '../config'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: { useAsTitle: 'name' },
  labels: { plural: 'ევენთები', singular: 'ევენთი' },
  fields: [
    {
      label: 'დასახელება',
      localized: true,
      required: true,
      name: 'name',
      type: 'text',
    },

    {
      label: 'აღწერა',
      localized: true,
      required: true,
      name: 'desc',
      type: 'text',
    },

    {
      required: true,
      label: 'ფასი',
      name: 'price',
      type: 'text',
    },

    {
      relationTo: 'media',
      label: 'სურათი',
      required: true,
      type: 'upload',
      name: 'image',
    },

    {
      name: 'menu',
      type: 'group',
      label: 'მენუ',
      admin: {
        condition: (data) => ['VIP', 'premium', 'standard'].includes(data.package),
        description: 'მენიუ სავალდებულოა მხოლოდ VIP, პრემიუმი ან სტანდარტული ევენთებზე',
      },
      fields: [
        {
          type: 'text',
          required: true,
          localized: true,
          name: 'food_menu_name',
          label: 'საკვების კოლექციის დასახელება',
        },
        {
          type: 'text',
          required: true,
          localized: true,
          name: 'drink_menu_name',
          label: 'სასმელის კოლექციის დასახელება',
        },
        {
          name: 'list',
          type: 'array',
          required: true,
          label: 'მენიუს ჩამონათვალი',
          fields: [
            {
              name: 'menu',
              label: 'მენუ',
              required: true,
              relationTo: 'menu',
              type: 'relationship',
            },
          ],
        },
      ],
    },

    {
      type: 'array',
      name: 'packages',
      label: 'ევენთის პაკეტები',
      admin: {
        condition: (data) => ['VIP', 'premium', 'standard'].includes(data.package),
        description:
          'პაკეტების ჩამონათვალი სავალდებულოა მხოლოდ VIP, პრემიუმი ან სტანდარტული ევენთებზე',
      },
      fields: [
        {
          name: 'name',
          required: true,
          localized: true,
          type: 'textarea',
          label: 'პაკეტის დასახელება',
        },
      ],
    },

    {
      type: 'group',
      name: 'proposal_packages',
      label: 'ხელის თხოვნის პაკეტები',
      admin: {
        condition: (data) => !['VIP', 'premium', 'standard'].includes(data.package),
        description:
          'ხელის თხოვნის პაკეტების ჩამონათვალი სავალდებულოა მხოლოდ (გულის ფორმის წინადადებების დეკორაცია, სადღესასწაულოდ მორთული სუფრა, წინადადებების ცერემონია ნავზე) ევენთებზე',
      },
      fields: [
        {
          type: 'text',
          name: 'name',
          required: true,
          localized: true,
          label: 'სექციის სათაური',
        },
        {
          type: 'array',
          name: 'list',
          fields: [
            {
              type: 'text',
              name: 'name',
              required: true,
              localized: true,
              label: 'პაკეტის დასახელება',
            },
          ],
        },
        {
          name: 'text',
          required: true,
          localized: true,
          type: 'textarea',
          label: 'აღწერა',
        },
      ],
    },

    {
      name: 'package',
      type: 'select',
      label: 'პაკეტი',
      required: true,
      options: event_packages,
    },
  ],
}
