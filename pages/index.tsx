import Head from 'next/head'
import {Layout} from '../components'
import {getMarkdownIds, convertMarkdownToHTML} from '../utils'
import {sortMenuItems} from '../utils'

const Top = ({ids, content}: any) => {
  return (
    <Layout ids={ids}>
      <Head>
        <title>30-Day Challenges: Jesse Wei</title>
        <meta name="description" content="30-day challenges by Jesse Wei" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div
              class="prose max-w-none"
            >
              ${content}
            </div>
          `
        }}
      />
    </Layout>
  )
}

export default Top

export const getStaticProps = async () => {
  const ids = getMarkdownIds().sort(sortMenuItems)
  const content = await convertMarkdownToHTML("top")

  return {
    props: {
      ids,
      content
    }
  }
}


