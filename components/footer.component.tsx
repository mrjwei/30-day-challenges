import Link from "next/link"
import { MdHome } from "react-icons/md"
import { Github, Twitter } from "../components"

export const Footer = () => {
  return (
    <footer>
      <div className="container py-3 flex items-center justify-start">
        <Link href="https://twitter.com/jweiit">
          <a
            className="mr-8" // to offset left inner space of MdHome component
            target="_blank"
          >
            <Twitter className="w-5 fill-red-secondary" />
          </a>
        </Link>
        <Link href="https://github.com/mrjwei">
          <a className="mr-8" target="_blank">
            <Github className="w-5 fill-red-secondary" />
          </a>
        </Link>
        <Link href="https://jessewei.jp/">
          <a target="_blank">
            <MdHome
              size={24} // to make actual size 24
              color="#d9a2a2"
            />
          </a>
        </Link>
      </div>
    </footer>
  )
}
