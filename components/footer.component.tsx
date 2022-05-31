import Link from 'next/link'
import {MdHome} from 'react-icons/md'
import {Github, Twitter} from '../components'

export const Footer = () => {
  return (
    <footer>
      <div
          className="container flex items-center"
        >
          <Link href="https://twitter.com/jweiit">
            <a
              className="mr-[calc(1.5rem-2.4px)]" // to offset left inner space of MdHome component
              target="_blank"
            >
              <Twitter
                className="w-6 fill-red-primary"
              />
            </a>
          </Link>
          <Link href="https://github.com/mrjwei">
            <a
              className="mr-6"
              target="_blank"
            >
              <Github
                className="w-6 fill-red-primary"
              />
            </a>
          </Link>
          <Link href="https://jessewei.jp/">
            <a
              target="_blank"
            >
              <MdHome
                size={28.8} // to make actual size 24
                color="#b54e4e"
              />
            </a>
          </Link>
        </div>
    </footer>
  )
}