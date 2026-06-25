export interface JournalPost {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  tone: 'blush' | 'sage' | 'lavender' | 'ink'
}

export const journalPosts: JournalPost[] = [
  {
    id: 'designing-with-intention',
    title: 'Designing with Intention',
    category: 'Branding',
    date: 'May 12, 2024',
    excerpt: 'On the quiet discipline of building brands that feel like they were always meant to exist — and why slowing down produces sharper work.',
    tone: 'blush',
  },
  {
    id: 'beauty-of-handmade-texture',
    title: 'The Beauty of Handmade Texture',
    category: 'Inspiration',
    date: 'Apr 28, 2024',
    excerpt: 'How impasto painting, paper grain, and visible brush marks are reshaping the visual language of premium digital design.',
    tone: 'sage',
  },
  {
    id: 'color-combinations-that-work',
    title: 'Color Combinations That Work',
    category: 'Design',
    date: 'Apr 10, 2024',
    excerpt: 'A practical guide to building editorial palettes — from ink and ivory foundations to ochre and lavender accents that breathe.',
    tone: 'lavender',
  },
]
