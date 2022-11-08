import { use } from 'react'

const getList = (): Promise<string[]> => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['aaaaa', 'bbbbb'])
    }, 5000)
  })

}

const FeedList = () => {
  const list = use(getList())
  return (
    <div>
      {list && list.map((row, idx) => (<div key={`feed_${row}_${idx}`}>{row}</div>))}
    </div>
  )
}

export default function FeedPage() {
  return (
    <div>
      <h2>Feed</h2>
      <FeedList />
    </div>
  )
}
