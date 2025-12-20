import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { event_packages } from '../config'

export const HomeView: GlobalConfig = {
  slug: 'home-view',
  label: 'მთავარი გვერდი',
  hooks: {
    afterChange: [
      async () => {
        revalidatePath('/', 'layout')
      },
    ],
  },
  versions: { drafts: { autosave: { interval: 1000 } } },
  fields: [
    // hero section
    {
      label: 'მთავრი სექცია',
      required: true,
      type: 'group',
      name: 'hero',
      fields: [
        {
          name: 'images',
          type: 'array',
          label: 'მთავარი სექციის სლაიდერი',
          fields: [
            {
              label: 'სლაიდერის სურათი',
              relationTo: 'media',
              type: 'upload',
              required: true,
              name: 'image',
            },
          ],
        },
        {
          label: 'სათაური (მთავარი ტექსტი)',
          localized: true,
          required: true,
          name: 'title',
          type: 'text',
        },
        {
          label: 'მოკლე აღწერა (მეორე ხარისხოვანი ტექსტი)',
          localized: true,
          name: 'subtitle',
          required: true,
          type: 'textarea',
        },
        {
          label: 'მთავარი ღილაკის ტექსტი',
          name: 'primary_btn',
          localized: true,
          required: true,
          type: 'text',
        },
        {
          label: 'მეორე ხარისხოვანი ღილაკის ტექსტი',
          name: 'secondary_btn',
          localized: true,
          required: true,
          type: 'text',
        },
      ],
    },

    // events section
    {
      label: 'ივენთები',
      name: 'events',
      type: 'group',
      fields: [
        // Section Header
        {
          label: 'სექციის სათაური',
          name: 'section_title',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'მაგ: Make Your Dream Event Come True' },
        },

        // Events List
        {
          type: 'array',
          required: true,
          name: 'events_list',
          label: 'ივენთების სია',
          admin: { description: 'ყველა ივენთი' },
          fields: [
            {
              name: 'image',
              type: 'upload',
              required: true,
              label: 'სურათი',
              relationTo: 'media',
              admin: { description: 'ივენთის ბარათის სურათი (384x320px)' },
            },
            {
              type: 'text',
              name: 'title',
              required: true,
              localized: true,
              label: 'დასახელება',
              admin: { description: 'ივენთის სათაური' },
            },
            {
              name: 'text',
              required: true,
              localized: true,
              type: 'textarea',
              label: 'სრული აღწერა',
              admin: { description: 'ივენთის სრული აღწერა ბარათზე' },
            },
            {
              name: 'btn',
              type: 'text',
              required: true,
              localized: true,
              label: 'მთავრი ღილაკის ტექსტი',
            },
            {
              label: 'პაკეტის ჩამონათვალი',
              name: 'packages',
              type: 'array',
              required: true,
              fields: [
                {
                  type: 'text',
                  name: 'label',
                  required: true,
                  localized: true,
                  label: 'ღილაკის ტექსტი',
                },
                {
                  name: 'event',
                  required: true,
                  label: 'ევენთი',
                  type: 'relationship',
                  relationTo: 'events',
                },
              ],
            },
          ],
        },
      ],
    },

    // about section
    {
      label: 'მთავრი სექცია',
      required: true,
      type: 'group',
      name: 'about',
      fields: [
        {
          name: 'images',
          type: 'array',
          label: 'ჩვენს შესახებ სექციის სლაიდერი',
          fields: [
            {
              label: 'სლაიდერის სურათი',
              relationTo: 'media',
              type: 'upload',
              required: true,
              name: 'image',
            },
          ],
        },
        {
          label: 'ზედა ტექსტი',
          type: 'textarea',
          localized: true,
          required: true,
          name: 'title',
        },
        {
          label: 'ქვედა ტექსტი',
          localized: true,
          name: 'subtitle',
          required: true,
          type: 'textarea',
        },
      ],
    },

    // menu section
    {
      name: 'menu',
      label: 'მენუ',
      required: true,
      relationTo: 'menu',
      type: 'relationship',
    },

    // boat sections
    {
      name: 'boat_tours',
      label: 'ტურები',
      type: 'array',
      required: true,
      fields: [
        {
          label: 'სურათის მდებარეობა',
          required: true,
          type: 'select',
          name: 'type',
          options: [
            { label: 'მარცხნივ', value: 'left' },
            { label: 'მარჯვნივ', value: 'right' },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          required: true,
          label: 'სურათი',
          relationTo: 'media',
        },
        {
          label: 'დასახელება',
          localized: true,
          required: true,
          name: 'name',
          type: 'text',
        },

        // Details
        {
          label: 'დეტალები',
          required: true,
          name: 'details',
          type: 'group',
          fields: [
            {
              label: 'ადამიანების რაოდენობა',
              name: 'people_count',
              required: true,
              type: 'number',
            },
            {
              label: 'უპირატესობა (შეღავათი)',
              localized: true,
              required: true,
              name: 'gift',
              type: 'text',
            },
          ],
        },

        // Description
        {
          label: 'აღწერა',
          type: 'textarea',
          localized: true,
          required: true,
          name: 'desc',
        },

        // Full Boat Rental
        {
          label: 'სრული ნავის ქირაობის ინფორმაცია',
          required: true,
          name: 'full_rental',
          type: 'group',
          fields: [
            {
              label: 'სექციის დასახელება',
              localized: true,
              required: true,
              name: 'title',
              type: 'text',
            },
            {
              label: 'ქირაობის სია',
              required: true,
              name: 'list',
              type: 'array',
              fields: [
                {
                  label: 'დრო და თანხა (მაგ: 15 minute tour - 150 ₾ (Half Tour))',
                  localized: true,
                  required: true,
                  name: 'item',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // Group Tour
        {
          label: 'ჯგუფური ტურის ინფორმაცია',
          required: true,
          name: 'group_tour',
          type: 'group',
          fields: [
            {
              label: 'სექციის დასახელება',
              localized: true,
              required: true,
              name: 'title',
              type: 'text',
              admin: {
                description: 'მაგ: Group Tour - Dolphin ( Minimum: 5 guests required )',
              },
            },
            {
              label: 'მინიმალური სტუმრების რაოდენობა',
              name: 'min_guests',
              required: false,
              type: 'number',
              admin: {
                description: 'ჯგუფური ტურისთვის საჭირო მინიმალური ადამიანების რაოდენობა',
              },
            },
            {
              label: 'ტურის დეტალები',
              required: true,
              name: 'tour_details',
              type: 'array',
              fields: [
                {
                  label: 'icon',
                  name: 'icon',
                  required: true,
                  type: 'select',
                  options: [
                    { label: 'დღე', value: 'day' },
                    { label: 'ღამე', value: 'night' },
                    { label: 'ფული', value: 'money' },
                    { label: 'დრო', value: 'time' },
                  ],
                },
                {
                  label: 'ტექსტი',
                  localized: true,
                  required: true,
                  name: 'text',
                  type: 'text',
                  admin: {
                    description: 'მაგ: Day - 17:00, Night - 21:00, 30₾/Per Guest, 30 Minute',
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    // gallery
    {
      name: 'gallery',
      label: 'გალერეა',
      type: 'group',
      fields: [
        {
          label: 'კატეგორიები',
          name: 'categories',
          type: 'array',
          required: true,
          admin: {
            description: 'გალერეის ფილტრის კატეგორიები',
          },
          fields: [
            {
              label: 'კატეგორიის დასახელება',
              name: 'name',
              type: 'text',
              localized: true,
              required: true,
              admin: {
                description: 'მაგ: Restaurant Images, Water Transport, Events, Menu',
              },
            },
            {
              label: 'სურათები',
              name: 'images',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  required: true,
                  label: 'სურათი',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
      ],
    },

    // contact
    {
      name: 'contact',
      label: 'კონტაქტი',
      type: 'group',
      fields: [
        // Header Info
        {
          label: 'სათაური და აღწერა',
          name: 'header',
          type: 'group',
          fields: [
            {
              label: 'სათაური',
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
              admin: {
                description: 'მაგ: Reach Out to TIVI',
              },
            },
            {
              label: 'აღწერა',
              name: 'description',
              type: 'textarea',
              localized: true,
              required: true,
              admin: {
                description: "მაგ: Planning a visit or a river cruise? We're just a message away.",
              },
            },
          ],
        },

        // Contact Information
        {
          label: 'საკონტაქტო ინფორმაცია',
          name: 'info',
          type: 'group',
          fields: [
            {
              label: 'ტელეფონი',
              name: 'phone',
              type: 'text',
              required: true,
              admin: {
                description: 'მაგ: +995 578 761 982',
              },
            },
            {
              label: 'სამუშაო საათები',
              name: 'working_hours',
              type: 'text',
              localized: true,
              required: true,
              admin: {
                description: 'მაგ: Everyday from 9:00 - to 23:00',
              },
            },
            {
              label: 'მისამართი',
              name: 'address',
              type: 'text',
              localized: true,
              required: true,
              admin: {
                description: 'სრული მისამართი',
              },
            },
          ],
        },

        // Social Media
        {
          label: 'სოციალური ქსელები',
          name: 'social',
          type: 'group',
          fields: [
            {
              label: 'Facebook ლინკი',
              name: 'facebook',
              type: 'text',
              required: false,
              admin: {
                description: 'სრული URL მაგ: https://facebook.com/tivi',
              },
            },
            {
              label: 'Instagram ლინკი',
              name: 'instagram',
              type: 'text',
              required: false,
              admin: {
                description: 'სრული URL მაგ: https://instagram.com/tivi',
              },
            },
          ],
        },

        // Google Maps
        {
          label: 'Google Maps',
          name: 'map',
          type: 'group',
          fields: [
            {
              label: 'Google Maps Embed URL',
              name: 'embed_url',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Google Maps-დან აიღეთ Embed HTML კოდი და ჩასვით მხოლოდ src-ის URL',
                placeholder: 'https://www.google.com/maps/embed?pb=...',
              },
            },
            {
              label: 'ლოკაციის სახელი',
              name: 'location_name',
              type: 'text',
              localized: true,
              required: false,
              admin: {
                description: 'ოფციონალური - ლოკაციის დასახელება',
              },
            },
          ],
        },
      ],
    },
  ],
}
