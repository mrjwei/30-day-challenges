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
import type {IMeta, IParams} from '../types'

const dir = path.join(process.cwd(), "markdowns")
const filenames = fs.readdirSync(dir)

export const getMarkdownIdsAndTitles = (): IMeta[] => {
  const data =  filenames.map(filename => {
    const id = filename.replace(/\.md$/, "")

    const fullPath = path.join(dir, `${id}.md`)
    const markdown = fs.readFileSync(fullPath, "utf8")

    const frontMatter = matter(markdown).data

    return {
      id,
      title: frontMatter.title
    }
  })
  const sortedDataWithoutTop = data.filter(meta => meta.id !== "top").sort((a: any, b: any) => {
    const dayNum1 = parseInt(a.id.replace("day", ""))
    const dayNum2 = parseInt(b.id.replace("day", ""))
    return dayNum1 - dayNum2
  })
  return [{id: "top", title: "30-Day Challenges"}, ...sortedDataWithoutTop]
}

export const getParams = (): IParams[] => {
  return filenames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, "")
      }
    }
  })
}

const remarkIframePlugin = () => {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'demo') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const filename = attributes.filename

        data.hName = 'iframe'
        data.hProperties = {
          src: '/demos/' + filename,
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

export const convertMarkdownToHTML = async (id: string): Promise<string> => {
  const fullPath = path.join(dir, `${id}.md`)
  const markdown = fs.readFileSync(fullPath, "utf8")

  const html = await unified()
  .use(remarkParse)
  .use(remarkDirective)
  .use(remarkIframePlugin)
  .use(remarkRehype as any) // TODO: resolve type
  .use(rehypeHighlight)
  .use(rehypeStringify)
  .process(matter(markdown).content)

  const content = html.toString()

  return content
}




