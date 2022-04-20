import {memo} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

export const Nav = ({ids, handleMenuToggle}: any) => {
  const {pathname, query} = useRouter()

  return (
    <nav className="
          absolute
          bg-white
          shadow-2xl
          top-0
          right-0
          md:static
          md:bg-none
          md:shadow-none
          md:col-span-1
        "
      >
        <ul>
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
                md:after:content-['']
                md:after:block
                md:after:w-[3px]
                md:after:h-full
                md:after:bg-gray-100
                md:after:absolute
                md:after:top-0
                md:after:left-0
                md:after:transition-all
                md:after:ease-in-out
                md:after:duration-300
                hover:text-black
                hover:after:bg-black
                hover:bg-gray-100
                ${pathname === "/" && "text-black md:after:bg-black"}
                md:p-2
                md:pl-4
              `}
              onClick={handleMenuToggle}
            >
              Top
            </a>
          </Link>
          {ids.filter((id: string) => id !== "top").map((id: string) => {
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
                      md:after:content-['']
                      md:after:block
                      md:after:w-[3px]
                      md:after:h-full
                      md:after:bg-gray-100
                      md:after:absolute
                      md:after:top-0
                      md:after:left-0
                      md:after:transition-all
                      md:after:ease-in-out
                      md:after:duration-300
                      hover:text-black
                      hover:after:bg-black
                      hover:bg-gray-100
                      ${query.id === id && "text-black md:after:bg-black"}
                      md:p-2
                      md:pl-4
                    `}
                    onClick={handleMenuToggle}
                  >
                    {id.replace("d", "D")}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
  )
}


