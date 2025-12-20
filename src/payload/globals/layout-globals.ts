import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

export const LayoutView: GlobalConfig = {
  slug: 'layout-view',
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
    {
      name: 'navbar',
      label: 'ნავიგაცია',
      type: 'group',
      fields: [
        // Logo
        {
          label: 'ლოგო',
          name: 'logo',
          type: 'upload',
          required: true,
          relationTo: 'media',
          admin: {
            description: 'ნავბარის ლოგო (SVG რეკომენდირებულია)',
          },
        },

        // Navigation Links
        {
          label: 'ნავიგაციის ლინკები',
          name: 'navigation',
          type: 'array',
          required: true,
          admin: {
            description: 'მთავარი მენიუს ლინკები',
          },
          fields: [
            {
              label: 'დასახელება',
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
              admin: {
                description: 'მაგ: HOME, RESTAURANT, BOAT TOURS',
              },
            },
            {
              label: 'ლინკი (href)',
              name: 'href',
              type: 'text',
              required: true,
              admin: {
                description: 'მაგ: #, #RESTAURANT, #BOAT-TOURS, /about',
              },
            },
          ],
        },

        // Social Media Links
        {
          label: 'სოციალური მედია',
          name: 'socials',
          type: 'array',
          required: true,
          admin: {
            description: 'სოციალური ქსელების ლინკები და იკონები',
          },
          fields: [
            {
              label: 'პლატფორმა',
              name: 'platform',
              type: 'select',
              required: true,
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'WhatsApp', value: 'whatsapp' },
                { label: 'Location/Maps', value: 'location' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'YouTube', value: 'youtube' },
              ],
            },
            {
              label: 'icon',
              name: 'icon',
              type: 'upload',
              required: true,
              relationTo: 'media',
              admin: {
                description: 'SVG icon (24x24px)',
              },
            },
            {
              label: 'ლინკი',
              name: 'link',
              type: 'text',
              required: true,
              admin: {
                description: 'სრული URL მაგ: https://facebook.com/tivi',
              },
            },
          ],
        },
      ],
    },

    // Footer
    {
      name: 'footer',
      label: 'ქვედა ნაწილი (Footer)',
      type: 'group',
      fields: [
        // Logo
        {
          label: 'ლოგო',
          name: 'logo',
          type: 'upload',
          required: true,
          relationTo: 'media',
          admin: {
            description: 'Footer-ის ლოგო სურათი',
          },
        },

        // Navigation Links
        {
          label: 'ნავიგაციის ლინკები',
          name: 'navigation',
          type: 'array',
          required: true,
          admin: {
            description: 'Footer-ის მენიუს ლინკები',
          },
          fields: [
            {
              label: 'ტექსტი',
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
              admin: {
                description: 'მაგ: HOME, RESTAURANT, BOAT TOURS',
              },
            },
            {
              label: 'ლინკი',
              name: 'href',
              type: 'text',
              required: true,
              admin: {
                description: 'მაგ: #, #RESTAURANT, #BOAT-TOURS ან https://example.com',
              },
            },
            {
              label: 'გახსნა ახალ ფანჯარაში',
              name: 'open_in_new_tab',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'თუ ჩართულია, ლინკი გაიხსნება ახალ ტაბში',
              },
            },
          ],
        },

        // Copyright & Credits
        {
          label: 'Copyright და კრედიტები',
          name: 'bottom',
          type: 'group',
          fields: [
            {
              label: 'Copyright ტექსტი',
              name: 'copyright',
              type: 'text',
              localized: true,
              required: true,
              defaultValue: 'All Rights Reserved.',
              admin: {
                description: 'მაგ: All Rights Reserved, © 2024 TIVI',
              },
            },
            {
              label: 'დეველოპერის ტექსტი',
              name: 'developer_text',
              type: 'text',
              localized: true,
              required: false,
              defaultValue: 'Designed & Developed by',
              admin: {
                description: 'ტექსტი დეველოპერის ლოგოს წინ',
              },
            },
            {
              label: 'დეველოპერის ლოგო',
              name: 'developer_logo',
              type: 'upload',
              required: false,
              relationTo: 'media',
              admin: {
                description: 'დეველოპერის/სააგენტოს ლოგო',
              },
            },
            {
              label: 'დეველოპერის ლინკი',
              name: 'developer_url',
              type: 'text',
              required: false,
              admin: {
                description: 'ლინკი დეველოპერის ვებსაიტზე',
                placeholder: 'https://koobercoders.com',
              },
            },
          ],
        },

        // Social Media Links (optional)
        {
          label: 'სოციალური ქსელები (ოფციონალური)',
          name: 'social_links',
          type: 'array',
          required: false,
          admin: {
            description: 'Footer-ში სოციალური ქსელების ლინკები',
          },
          fields: [
            {
              label: 'პლატფორმა',
              name: 'platform',
              type: 'select',
              required: true,
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'YouTube', value: 'youtube' },
              ],
            },
            {
              label: 'ლინკი',
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                placeholder: 'https://facebook.com/tivi',
              },
            },
          ],
        },
      ],
    },
  ],
}
