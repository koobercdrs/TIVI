import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

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
  fields: [],
}
