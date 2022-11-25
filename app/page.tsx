// 'use client'

// NOTE: next/navigationに変わっている
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
import { unstable_getServerSession } from 'next-auth/next'

export default async function Page() {
  const session = await unstable_getServerSession()
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {/* NOTE: routerを使うとclient componentにする必要がある */}
      {/* <div>
        <button type="button" onClick={() => router.push('/next')}>button</button>
      </div> */}
      <div>
        <div>{JSON.stringify(session, null, 2)}</div>
      </div>
    </div>
  )
}
