'use client'

import Link from 'next/link'
import { ReactNode, Suspense } from 'react'
import { Session } from 'next-auth'

import { defaultTitle } from './head'
import Loading from './loading'
import Provider from './Provider'

type Props = {
  children: ReactNode
  session: Session // TODO: ここはちょっと違う
}
export default async function RootLayout({ children, session }: Props) {

  return (
    <Provider session={session}>
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
    </Provider>
  )
}
