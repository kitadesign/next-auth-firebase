import { use } from 'react'

const getList = (): Promise<string[]> => {
  return new Promise<string[]>((_resolve, reject) => {
    setTimeout(() => {
      reject()
    }, 5000)
  })

}

const PostList = () => {
  const list = use(getList())
  return (
    <div>
      {list && list.map((row, idx) => (<div key={`feed_${row}_${idx}`}>{row}</div>))}
    </div>
  )
}

export default function PostPage() {
  return (
    <div>
      <h2>Post</h2>
      <PostList />
    </div>
  )
}
