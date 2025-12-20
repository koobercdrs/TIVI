export interface IEvent {
  id: number
  title: string
  img: string
  text: string
}

export const events: IEvent[] = [
  {
    id: 1,
    title: 'Birthday Party',
    img: '/images/event-img.png',
    text: 'Celebrate in style with riverside vibes, great music, and memorable moments. TIVI is your ideal birthday venue.',
  },
  {
    id: 2,
    title: 'Proposal Party',
    img: '/images/event-img.png',
    text: 'TIVI offers a romantic riverside setting in Tbilisi, with tailored décor, music, and fireworks for unforgettable proposals.',
  },
  {
    id: 3,
    title: 'Corporate Event',
    img: '/images/event-img.png',
    text: 'Host an unforgettable corporate evening at TIVI - riverside views, lively music, and the perfect team-building atmosphere.',
  },
]
