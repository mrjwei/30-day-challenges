import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import {visit} from 'unist-util-visit'


const dir = path.join(process.cwd(), "markdowns")
const filenames = fs.readdirSync(dir)

export const getMarkdownIds = () => {
  return filenames.map(filename => {
    return filename.replace(/\.md$/, "")
  })
}

export const getParams = () => {
  return filenames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, "")
      }
    }
  })
}

const remarkIframePlugin = () => {
  return (tree: any, file: any) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'demo') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id

        // if (node.type === 'textDirective') file.fail('Text directives for `demo` not supported', node)
        // if (!id) file.fail('Missing demo id', node)

        data.hName = 'iframe'
        data.hProperties = {
          src: '/demos/swap-elements-by-drag-and-drop.html',
          width: '100%',
          height: 500,
          frameBorder: 0,
          allow: 'picture-in-picture',
          allowFullScreen: true
        }
      }
      return node
    })
  }
}

export const convertMarkdownToHTML = async (id: string) => {
  const fullPath = path.join(dir, `${id}.md`)
  const markdown = fs.readFileSync(fullPath, "utf8")

  const html = await unified()
  .use(remarkParse)
  .use(remarkDirective)
  .use(remarkIframePlugin)
  .use(remarkRehype as any)
  .use(rehypeHighlight)
  .use(rehypeStringify)
  .process(matter(markdown).content)

  const content = html.toString()

  return content
}




