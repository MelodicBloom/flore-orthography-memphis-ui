import { Search, Heart, User, ShoppingBag, Menu, Leaf, Sun, Moon, Star, Feather } from 'lucide-react'

const icons = [
  { Icon: Search, label: 'Search' },
  { Icon: Heart, label: 'Heart' },
  { Icon: User, label: 'User' },
  { Icon: ShoppingBag, label: 'Bag' },
  { Icon: Menu, label: 'Menu' },
  { Icon: Leaf, label: 'Leaf' },
  { Icon: Sun, label: 'Sun' },
  { Icon: Moon, label: 'Moon' },
  { Icon: Star, label: 'Star' },
  { Icon: Feather, label: 'Feather' },
]

export default function IconRow() {
  return (
    <div className="flex flex-wrap gap-6">
      {icons.map(({ Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-1.5 group">
          <div className="p-2.5 rounded-sm border border-ink/10 group-hover:border-ink/30 group-hover:shadow-soft transition-all duration-200">
            <Icon size={16} strokeWidth={1.5} className="text-ink/70 group-hover:text-ink transition-colors" />
          </div>
          <span className="text-xs font-sans text-ink/40">{label}</span>
        </div>
      ))}
    </div>
  )
}
