import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { resendAdapter } from '@payloadcms/email-resend'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { HomeView } from './payload/globals/home-globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  sharp,
  defaultDepth: 2,
  globals: [HomeView],
  collections: [Users, Media],
  secret: process.env.PAYLOAD_SECRET || '',
  db: mongooseAdapter({ url: process.env.DATABASE_URI || '' }),
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  admin: { user: Users.slug, importMap: { baseDir: path.resolve(dirname) } },
  plugins: [
    uploadthingStorage({
      enabled: true,
      collections: { media: true },
      options: { token: process.env.UPLOADTHING_TOKEN, acl: 'public-read' },
    }),
  ],
  email: resendAdapter({
    defaultFromAddress: 'Acme <onboarding@resend.dev>',
    apiKey: process.env.RESEND_API || '',
    defaultFromName: 'TIVI',
  }),
  localization: {
    locales: [
      { label: 'ინგლისური', code: 'en' },
      { label: 'ქართული', code: 'ka' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
})
