import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { MdAdd, MdRemove } from "react-icons/md"
import {
  getMarkdownGroupDirs,
  getMarkdownGroupsData,
  convertMarkdownToHTML,
  getNextIdAndTitle,
} from "../utils"
import { IGroupData } from "../types"

const Top = ({ groups }: { groups: IGroupData[] }) => {
  const [openedAccordions, setOpenedAccordions] = useState<string[]>([])

  const toggleAccordion = (groupDir: string) => {
    if (openedAccordions.includes(groupDir)) {
      setOpenedAccordions((prev) => prev.filter((a) => a !== groupDir))
    } else {
      setOpenedAccordions((prev) => [...prev, groupDir])
    }
  }

  return (
    <div>
      <Head>
        <title>Daily Challenges: Jesse Wei</title>
        <meta name="description" content="Daily challenges by Jesse Wei" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <ul>
        {groups.map((group) => {
          return (
            <li key={group.dir}>
              <button
                className="accordion"
                onClick={() => toggleAccordion(group.dir)}
              >
                <span>{group.dir}</span>
                <span>
                  {openedAccordions.includes(group.dir) ? (
                    <MdRemove />
                  ) : (
                    <MdAdd />
                  )}
                </span>
              </button>
              <ul
                className={`grid grid-cols-6 gap-3 sm:grid-cols-8 sm:gap-6 ${
                  openedAccordions.includes(group.dir) ? "" : "hidden"
                }`}
              >
                <li key="all">
                  <Link href={`/${group.dir}`}>
                    <button className="btn">All</button>
                  </Link>
                </li>
                {group.markdowns.map((m) => {
                  return (
                    <li key={m.id}>
                      <Link href={`/${group.dir}/${m.id}`}>
                        <button className="btn">
                          {m.id.replace("day", "D")}
                        </button>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Top

export const getStaticProps = () => {
  const groups = getMarkdownGroupsData(getMarkdownGroupDirs())
  return {
    props: {
      groups,
    },
  }
}
