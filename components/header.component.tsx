import Link from 'next/link'
import {MdSearch} from 'react-icons/md'

export const Header = ({type}: any) => {
  return type === "top" ? (
    <header>
      <div className='container pt-12'>
        <Link href="/">
          <a>
            <h1 className="text-red-primary font-extrabold uppercase text-4xl md:text-5xl">
              <span className='block'>Everyday Challenges</span>
              <span className='block'>By Jesse Wei</span>
            </h1>
          </a>
        </Link>
      </div>
    </header>
  ) : (
    <header className="relative bg-red-primary">
      <div className="container flex justify-between items-center py-6">
        <Link href="/">
          <button className='btn-lg-light'>Home</button>
        </Link>
        <Link href="/">
          <a>
            <h1 className="text-white font-extrabold uppercase text-xl leading-6 text-center">
              <span className='block'>Everyday Challenges</span>
              <span className='block'>By Jesse Wei</span>
            </h1>
          </a>
        </Link>
        <button>
          <MdSearch color='#fff' size={24} />
        </button>
      </div>
    </header>
  )
}

