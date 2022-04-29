import {memo} from 'react'
import Link from 'next/link'
import {MdMenu} from 'react-icons/md'

export const Header = ({handleMenuToggle}: any) => {
  return (
    <header className="bg-gray-100 relative">
      <div className="container flex justify-between items-center px-6 py-3 xl:px-24">
        <Link href="/">
          <a>
            <h1 className="text-xl md:text-2xl">30-Day Challenges</h1>
            <span className="text-gray-400">By Jesse Wei</span>
          </a>
        </Link>
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

