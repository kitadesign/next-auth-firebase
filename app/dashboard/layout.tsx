import { ReactNode } from 'react'

// NOTE: rootのlayoutにネストされる
export default function DashboardLayout({ children }: {
  children: ReactNode,
}) {
  return (
    <section>
      <nav>Dashboard Navigation</nav>
      {children}
    </section>
  )
}
