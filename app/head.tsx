export const defaultTitle = 'テストサイト'

export default function Head () {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP"/>
      <title>{defaultTitle}</title>
    </>
  )
}
