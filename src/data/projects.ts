export interface Project {
  id: string
  title: string
  category: string
  tone: 'blush' | 'sage' | 'lavender' | 'ochre' | 'ink'
  description: string
}

export const projects: Project[] = [
  {
    id: 'verdant',
    title: 'Verdant',
    category: 'Branding',
    tone: 'sage',
    description: 'A botanical skincare identity rooted in slow living and natural form.',
  },
  {
    id: 'alma-skincare',
    title: 'Alma Skincare',
    category: 'Branding, Packaging',
    tone: 'blush',
    description: 'Premium packaging and visual identity for a mineral-based skincare line.',
  },
  {
    id: 'maison-clarte',
    title: 'Maison Clarté',
    category: 'Web Design',
    tone: 'lavender',
    description: 'A refined editorial website for an interior design atelier in Paris.',
  },
  {
    id: 'haru-studio',
    title: 'Haru Studio',
    category: 'Branding',
    tone: 'ochre',
    description: 'Warm, tactile identity for a ceramics and textile design studio.',
  },
  {
    id: 'terra-collective',
    title: 'Terra Collective',
    category: 'Art Direction',
    tone: 'sage',
    description: 'Art direction for a regenerative farming collective and seasonal publication.',
  },
  {
    id: 'solerne',
    title: 'Solerne',
    category: 'Web Design',
    tone: 'blush',
    description: 'A sun-drenched digital experience for a boutique Mediterranean travel brand.',
  },
]
