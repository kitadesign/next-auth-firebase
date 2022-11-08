import { ReactNode } from 'react'

export default function RootLayout({ children, }: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  )
}
