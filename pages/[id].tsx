import Head from 'next/head'
import {Layout} from '../components'
import {
  getParams,
  convertMarkdownToHTML,
  getMarkdownIdsAndTitles,
  getPrevIdAndTitle,
  getNextIdAndTitle
} from '../utils'
import {IMeta} from '../types';
import {Pagination} from '../components'

const Challenge = ({
  metas,
  activeId,
  content,
  prevId,
  prevTitle,
  nextId,
  nextTitle
}: {
  metas: IMeta[],
  activeId: string,
  content: string,
  prevId: string,
  prevTitle: string,
  nextId: string,
  nextTitle: string
}) => {
  return (
    <>
      <Head>
        <title>30-Day Challenges: {activeId}</title>
        <meta name="description" content={`30-day challenges: ${activeId}`} />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div
              class="prose max-w-none prose-h4:text-lg prose-h4:italic"
            >
              ${content}
            </div>
          `
        }}
      />
      <Pagination
        prevId={prevId}
        prevTitle={prevTitle}
        nextId={nextId}
        nextTitle={nextTitle}
      />
    </>
  )
}

export default Challenge

export const getStaticPaths = () => {
  const paths = getParams()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const metas = getMarkdownIdsAndTitles()
  const content = await convertMarkdownToHTML(context.params.id)
  const [prevId, prevTitle] = getPrevIdAndTitle(metas, context.params.id)
  const [nextId, nextTitle] = getNextIdAndTitle(metas, context.params.id)
  return {
    props: {
      metas,
      activeId: context.params.id,
      content,
      prevId,
      prevTitle,
      nextId,
      nextTitle
    }
  }
}





