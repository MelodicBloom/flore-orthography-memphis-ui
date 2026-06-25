export interface JournalPost {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  readTime: string
}

export const journalPosts: JournalPost[] = [
  {
    id: 'designing-with-intention',
    title: 'Designing with Intention',
    category: 'Branding',
    date: 'May 12, 2024',
    excerpt:
      'On the quiet discipline of choosing less — and why constraint is the most generous gift you can give a visual system.',
    readTime: '5 min',
  },
  {
    id: 'beauty-of-handmade-texture',
    title: 'The Beauty of Handmade Texture',
    category: 'Inspiration',
    date: 'Apr 28, 2024',
    excerpt:
      'How impasto, linen, and paper grain remind us that the most resonant surfaces are the ones that show the hand.',
    readTime: '4 min',
  },
  {
    id: 'color-combinations-that-work',
    title: 'Color Combinations That Work',
    category: 'Design',
    date: 'Apr 10, 2024',
    excerpt:
      'A field guide to pairing warm neutrals with unexpected botanical hues — without losing the sense of ease.',
    readTime: '6 min',
  },
]
