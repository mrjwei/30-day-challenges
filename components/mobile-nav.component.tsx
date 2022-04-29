import Link from 'next/link'
import {useRouter} from 'next/router'
import {IMeta} from '../types'
import {MdOutlineClose} from 'react-icons/md'

export const MobileNav = ({
  metas,
  isOpen,
  handleMenuToggle
}: {
  metas: IMeta[],
  isOpen: boolean,
  handleMenuToggle: () => void
}) => {
  const {pathname, query} = useRouter()

  return (
    <nav
      className={`
        w-full
        min-h-screen
        absolute
        bg-white
        top-0
        transition-all
        duration-300
        ${isOpen ? "left-0" : "left-full"}
      `}
      >
        <button
          className="absolute top-6 right-6"
          onClick={handleMenuToggle}
        >
          <MdOutlineClose className="text-2xl" />
        </button>
        <ul
          className="mt-12"
        >
          <Link href="/">
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
                hover:text-black
                hover:after:bg-black
                hover:bg-gray-100
                ${pathname === "/" && "text-black"}
              `}
              onClick={handleMenuToggle}
            >
              Top
            </a>
          </Link>
          {metas
            .filter((meta: IMeta) => meta.id !== "top")
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
                        hover:text-black
                        hover:after:bg-black
                        hover:bg-gray-100
                        ${query.id === id && "text-black"}
                      `}
                      onClick={handleMenuToggle}
                    >
                      {id.replace("d", "D")}: {title}
                    </a>
                  </Link>
                </li>
              )
          })}
        </ul>
      </nav>
  )
}


