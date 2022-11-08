// 'use client'

// NOTE: next/navigationに変わっている
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Page() {
  // const router = useRouter()
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {/* NOTE: routerを使うとclient componentにする必要がある */}
      {/* <div>
        <button type="button" onClick={() => router.push('/next')}>button</button>
      </div> */}
      <div>
        <Link href="/feed">feed</Link>
      </div>
    </div>
  )
}
