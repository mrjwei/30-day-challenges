import Link from "next/link"
import { useRouter } from "next/router"
import { MdSearch, MdArrowBack } from "react-icons/md"

export const Header = ({ type }: any) => {
  const { asPath } = useRouter()
  const paths = asPath.split("/").filter((path) => path !== "")

  return type === "top" ? (
    <header>
      <div className="container pt-12">
        <Link href="/">
          <a>
            <h1 className="text-red-primary font-extrabold uppercase text-4xl md:text-5xl">
              <span className="block">Daily Challenges</span>
              <span className="block">By Jesse Wei</span>
            </h1>
          </a>
        </Link>
      </div>
    </header>
  ) : (
    <header className="relative bg-red-primary">
      <div className="container flex justify-between items-center py-6">
        <Link href={`/${paths.length <= 1 ? "" : paths[0]}`}>
          <button>
            <MdArrowBack color="#fff" size={24} />
          </button>
        </Link>
        <Link href="/">
          <a>
            <h1 className="text-white font-extrabold uppercase text-xl leading-6 text-center">
              <span className="block">Daily Challenges</span>
              <span className="block">By Jesse Wei</span>
            </h1>
          </a>
        </Link>
        <button>
          <MdSearch color="#fff" size={24} />
        </button>
      </div>
    </header>
  )
}
