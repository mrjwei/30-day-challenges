import Link from 'next/link'
import {MdSearch} from 'react-icons/md'

export const Header = ({type}: any) => {
  return type === "top" ? (
    <header>
      <Link href="/">
        <a>
          <h1 className="text-red-primary text-xl md:text-2xl">30-Day Challenges</h1>
          <span className="text-red-secondary">By Jesse Wei</span>
        </a>
      </Link>
    </header>
  ) : (
    <header className="relative">
      <div className="container flex justify-between items-center px-6 py-3 xl:px-24">
        <Link href="/">
          <button>Home</button>
        </Link>
        <Link href="/">
          <a>
            <h1 className="text-red-primary text-xl md:text-2xl">30-Day Challenges</h1>
            <span className="text-red-secondary">By Jesse Wei</span>
          </a>
        </Link>
        <button>
          <MdSearch />
        </button>
      </div>
    </header>
  )
}

