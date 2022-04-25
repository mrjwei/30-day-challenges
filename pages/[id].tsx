import Head from 'next/head'
import {Layout} from '../components'
import {getParams, convertMarkdownToHTML, getMarkdownIds} from '../utils'
import {sortMenuItems} from '../utils'

const Challenge = ({ids, activeId, content}: {ids: string, activeId: string, content: string}) => {
  return (
    <Layout ids={ids}>
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
    </Layout>
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
  const ids = getMarkdownIds().sort(sortMenuItems)
  const content = await convertMarkdownToHTML(context.params.id)
  return {
    props: {
      ids,
      activeId: context.params.id,
      content
    }
  }
}





