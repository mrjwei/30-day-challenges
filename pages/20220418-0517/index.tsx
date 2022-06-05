import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { MdArrowForward } from "react-icons/md"
import { getMarkdownIdsAndTitles } from "../../utils"
import { IMarkdownData } from "../../types"

const All = ({ markdowns }: { markdowns: IMarkdownData[] }) => {
  const { pathname } = useRouter()
  return (
    <>
      <Head>
        <title>{pathname.substring(1)}: Challenges</title>
        <meta
          name="description"
          content={`${pathname.substring(1)}: Challenges`}
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <nav className="mb-6">
        <ul className="flex text-red-primary">
          <li>
            <Link href="/">
              <a>Home&nbsp;/&nbsp;</a>
            </Link>
          </li>
          <li className="font-bold">&nbsp;20220418-0517</li>
        </ul>
      </nav>
      <h2 className="text-red-primary text-4xl mb-6">
        {pathname.substring(1)}
      </h2>
      <ul>
        {markdowns.map((m) => {
          return (
            <li key={m.id}>
              <Link href={`${pathname}/${m.id}`}>
                <button className="btn-text w-full flex justify-between">
                  <span className="text-left">
                    {m.id.replace("day", "D")}:{" "}
                    {m.title.length > 20
                      ? m.title.substring(0, 20) + "..."
                      : m.title}
                  </span>
                  <span>
                    <MdArrowForward />
                  </span>
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default All

export const getStaticProps = async () => {
  const markdowns = getMarkdownIdsAndTitles("20220418-0517")
  return {
    props: {
      markdowns,
    },
  }
}
