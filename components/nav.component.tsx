import {useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md'
import {IMeta} from '../types'
import {
  calcInitNumNavItemsToDisplay,
  normalizeNavItemText,
  isActiveLink
} from '../utils'

export const Nav = ({
  metas,
  handleMenuToggle
}: {
  metas: IMeta[],
  handleMenuToggle: () => void
}) => {
  const {query, asPath} = useRouter()

  const [numToDisplay, setNumToDisplay] = useState(calcInitNumNavItemsToDisplay(asPath))

  const handleShowMore = () => {
    setNumToDisplay(prevNum => prevNum + 5)
  }

  const handleShowLess = () => {
    setNumToDisplay(prevNum => prevNum - 5)
  }

  return (
    <nav className="
          bg-white
          bg-none
          col-span-1
          self-start
          sticky
          top-12
        "
      >
        <ul>
          {metas
            .slice(0, numToDisplay)
            .map((meta: IMeta) => {
              const {id, title} = meta
              return (
                <li
                  key={id}
                >
                  <Link href={`/${id}`}>
                    <a
                      className={`
                        relative
                        block
                        w-full
                        text-left
                        px-12
                        py-3
                        transition-all
                        ease-in-out
                        duration-300
                        text-gray-400
                        whitespace-nowrap
                        overflow-hidden
                        text-ellipsis
                        after:content-['']
                        after:block
                        after:w-[3px]
                        after:h-full
                        after:bg-gray-100
                        after:absolute
                        after:top-0
                        after:left-0
                        after:transition-all
                        after:ease-in-out
                        after:duration-300
                        hover:text-red-primary
                        hover:after:bg-red-primary
                        hover:bg-red-light
                        ${isActiveLink(query.id, id) && "text-red-primary after:bg-red-primary"}
                        p-2
                        pl-4
                      `}
                      onClick={handleMenuToggle}
                    >
                      {normalizeNavItemText(id, title)}
                    </a>
                  </Link>
                </li>
              )
          })}
        </ul>
        {numToDisplay >= metas.length ? (
          <button
            className="
            w-full
            px-4
            py-1
            mt-4
            border-[1px]
            border-red-light
            text-red-secondary
            rounded-sm
            text-sm
            text-center
            "
            onClick={handleShowLess}
          >
            Show Less
          </button>
        ) : (
          <button
            className="
              w-full
              px-4
              py-1
              mt-4
              bg-red-light
              text-red-secondary
              rounded-sm
              text-sm
              text-center
            "
            disabled={numToDisplay >= metas.length}
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </nav>
  )
}


