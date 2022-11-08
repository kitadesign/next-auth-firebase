// 'use client'

// import { useRouter } from 'next/navigation'
import Link from 'next/link'
//
export default function Page() {
  // const router = useRouter()
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {/* <div>
        <button type="button" onClick={() => router.push('/next')}>button</button>
      </div> */}
      <div>
        <Link href="/next">link</Link>
      </div>
    </div>
  )
}
