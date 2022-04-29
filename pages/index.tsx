import Head from 'next/head'
import {Layout} from '../components'
import {getMarkdownIdsAndTitles, convertMarkdownToHTML} from '../utils'
import {IMeta} from '../types'

const Top = ({
  metas,
  content
}: {
  metas: IMeta[],
  content: string
}) => {
  return (
    <>
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
    </>
  )
}

export default Top

export const getStaticProps = async () => {
  const metas = getMarkdownIdsAndTitles()
  const content = await convertMarkdownToHTML("top")

  return {
    props: {
      metas,
      content
    }
  }
}


