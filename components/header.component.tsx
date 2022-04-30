import {memo} from 'react'
import Link from 'next/link'
import {MdMenu, MdHome} from 'react-icons/md'
import {Github, Twitter} from '../components'

export const Header = ({handleMenuToggle}: any) => {
  return (
    <header className="bg-red-light relative">
      <div className="container flex justify-between items-center px-6 py-3 xl:px-24">
        <Link href="/">
          <a>
            <h1 className="text-red-primary text-xl md:text-2xl">30-Day Challenges</h1>
            <span className="text-red-secondary">By Jesse Wei</span>
          </a>
        </Link>
        <div
          className="flex items-center"
        >
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
        <button
          className="block md:hidden"
          onClick={handleMenuToggle}
        >
          <MdMenu size={30}/>
        </button>
      </div>
    </header>
  )
}

