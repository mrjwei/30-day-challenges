import Head from 'next/head'
import {
  getParams,
  convertMarkdownToHTML,
  getMarkdownIdsAndTitles,
  getPrevIdAndTitle,
  getNextIdAndTitle
} from '../../utils'
import {IMarkdownData} from '../../types';
import {Pagination} from '../../components'

const Challenge = ({
  metas,
  activeId,
  content,
  prevId,
  prevTitle,
  nextId,
  nextTitle,
  type
}: {
  metas: IMarkdownData[],
  activeId: string,
  content: string,
  prevId: string,
  prevTitle: string,
  nextId: string,
  nextTitle: string,
  type: "top" | "sub"
}) => {
  return (
    <>
      <Head>
        <title>Everyday Challenges: {activeId}</title>
        <meta name="description" content={`Everyday challenges: ${activeId}`} />
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
        groupDir="20220418-0517"
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
  const paths = getParams("20220418-0517")
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const metas = getMarkdownIdsAndTitles("20220418-0517")
  const content = await convertMarkdownToHTML(context.params.id, "20220418-0517")
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




