import Head from 'next/head'
import {Layout} from '../components'
import {
  getMarkdownIdsAndTitles,
  convertMarkdownToHTML,
  getNextIdAndTitle
} from '../utils'
import {IMeta} from '../types'
import {Pagination} from '../components'

const Top = ({
  metas,
  content,
  nextId,
  nextTitle
}: {
  metas: IMeta[],
  content: string,
  nextId: string,
  nextTitle: string
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
      <Pagination
        prevId={null}
        prevTitle={null}
        nextId={nextId}
        nextTitle={nextTitle}
      />
    </>
  )
}

export default Top

export const getStaticProps = async (context: any) => {
  const metas = getMarkdownIdsAndTitles()
  const content = await convertMarkdownToHTML("top")
  const [nextId, nextTitle] = context.params ? getNextIdAndTitle(metas, context.params.id) : getNextIdAndTitle(metas, "top")
  return {
    props: {
      metas,
      content,
      nextId,
      nextTitle
    }
  }
}


