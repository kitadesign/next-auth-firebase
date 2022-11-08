import Link from 'next/link'
import { ReactNode, Suspense } from 'react'

import { defaultTitle } from './head'
import Loading from './loading'

export default function RootLayout({ children, }: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <div className='contents'>
          <header>
            <div>{defaultTitle}</div>
          </header>
          <main>
            <nav>
              <ul>
                <li><Link href="/">Top</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/feed">Feed</Link></li>
                <li><Link href="/post">Post</Link></li>
              </ul>
            </nav>
            <article>
              {/* NOTE: 下位レイアウト利用ページでfallbackされる */}
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </article>
          </main>
          <footer>
            <div>&copy; kitadesign</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
