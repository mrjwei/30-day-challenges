import {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import {
  getMarkdownGroupDirs,
  getMarkdownGroupsData,
  convertMarkdownToHTML,
  getNextIdAndTitle
} from '../utils'
import {IGroupData} from '../types'

const Top = ({
  groups
}: {
  groups: IGroupData[]
}) => {
  const [openedAccordions, setOpenedAccordions] = useState<string[]>([])

  const toggleAccordion = (groupDir: string) => {
    if (openedAccordions.includes(groupDir)) {
      setOpenedAccordions(prev => prev.filter(a => a !== groupDir))
    } else {
      setOpenedAccordions(prev => [...prev, groupDir])
    }
  }

  return (
    <div>
      <Head>
        <title>30-Day Challenges: Jesse Wei</title>
        <meta name="description" content="30-day challenges by Jesse Wei" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <ul>
        {groups.map(group => {
          return (
            <li>
              <button className='text-red-primary text-4xl' onClick={() => toggleAccordion(group.dir)}>{group.dir}</button>
              <ul className={openedAccordions.includes(group.dir) ? "" : "hidden"}>
                {group.markdowns.map(m => {
                  return (
                    <li>
                      <Link href={`/${group.dir}/${m.id}`}>
                        <button className='text-red-primary'>{m.id}</button>
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
  console.log(getMarkdownGroupDirs())
  return {
    props: {
      groups
    }
  }
}


