export interface Project {
  id: string
  title: string
  category: string
  tone: 'blush' | 'sage' | 'lavender' | 'ochre' | 'ink'
  year: string
  description: string
}

export const projects: Project[] = [
  {
    id: 'verdant',
    title: 'Verdant',
    category: 'Branding',
    tone: 'sage',
    year: '2024',
    description: 'A botanical skincare identity rooted in slow, considered craft.',
  },
  {
    id: 'alma-skincare',
    title: 'Alma Skincare',
    category: 'Branding, Packaging',
    tone: 'blush',
    year: '2024',
    description: 'Tender, warm packaging for a handmade apothecary studio.',
  },
  {
    id: 'maison-clarte',
    title: 'Maison Clarté',
    category: 'Web Design',
    tone: 'lavender',
    year: '2024',
    description: 'An editorial web presence for a Paris-based interior atelier.',
  },
  {
    id: 'haru-studio',
    title: 'Haru Studio',
    category: 'Branding',
    tone: 'ochre',
    year: '2023',
    description: 'Spring-forward visual identity for a Japanese ceramics collective.',
  },
  {
    id: 'terra-collective',
    title: 'Terra Collective',
    category: 'Art Direction',
    tone: 'sage',
    year: '2023',
    description: 'Earth-toned art direction for a regenerative agriculture brand.',
  },
  {
    id: 'solerne',
    title: 'Solerne',
    category: 'Web Design',
    tone: 'ink',
    year: '2023',
    description: 'A minimal, luminous web system for a fine-fragrance house.',
  },
]
