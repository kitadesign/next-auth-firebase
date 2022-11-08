'use client'

import { useEffect } from 'react'

type ErrorProps = {
  error?: Error
  reset: () => void
}
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <p>Ooops!</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  )
}
