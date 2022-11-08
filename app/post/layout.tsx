'use client'

import { ReactNode, Suspense, useState, useTransition } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Loading from './loading'
import Error from './error'

// NOTE: rootのlayoutにネストされる
export default function PostLayout({ children }: {
  children: ReactNode,
}) {
  const [load, setLoad] = useState(true)
  const [isPending, startTransition] = useTransition()

  const handleReset = () => {
    startTransition(() => {
      setLoad(e => !e)
    })
  }

  return (
    <div className='post' style={{ opacity: isPending ? 0.8 : 1, backgroundColor: 'black', color: 'white' }}>
      <ErrorBoundary fallback={<Error reset={handleReset} />}>
        <Suspense fallback={<Loading />}>
          {load ?
            children
            : null}
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
