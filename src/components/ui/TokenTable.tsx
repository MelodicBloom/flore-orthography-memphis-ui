interface TokenRow {
  name: string
  value: string
  usage: string
}

interface TokenTableProps {
  tokens: TokenRow[]
  title?: string
}

export default function TokenTable({ tokens, title }: TokenTableProps) {
  return (
    <div className="overflow-x-auto">
      {title && <h4 className="font-sans text-xs tracking-wide uppercase text-ink/50 mb-3">{title}</h4>}
      <table className="w-full text-sm font-sans border-collapse">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="text-left py-2 pr-6 font-medium text-ink/60 text-xs tracking-wide uppercase">Token</th>
            <th className="text-left py-2 pr-6 font-medium text-ink/60 text-xs tracking-wide uppercase">Value</th>
            <th className="text-left py-2 font-medium text-ink/60 text-xs tracking-wide uppercase">Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((row) => (
            <tr key={row.name} className="border-b border-ink/5 hover:bg-ink/3 transition-colors">
              <td className="py-2.5 pr-6 font-mono text-xs text-ink/80">{row.name}</td>
              <td className="py-2.5 pr-6">
                <span className="font-mono text-xs bg-ivory border border-ink/10 px-2 py-0.5 rounded-sm">
                  {row.value}
                </span>
              </td>
              <td className="py-2.5 text-xs text-ink/60">{row.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
