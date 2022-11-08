import { ReactNode } from 'react'

// NOTE: rootのlayoutにネストされる
export default function FeedLayout({ children }: {
  children: ReactNode,
}) {
  return (
    <section className='feed'>
      {children}
    </section>
  )
}
