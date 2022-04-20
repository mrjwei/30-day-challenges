import {useState, useEffect, useCallback} from 'react'
import {Header, Nav} from '.'

export const Layout = ({ids, children}: {ids: any, children: React.ReactNode}) => {
  const [windowWidth, setWindowWidth] = useState<null | number>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // set window width at first loading
    setWindowWidth(window.innerWidth)

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prevState => !prevState)
  }, [])

  useEffect(() => {
    // close menu when window width
    // equals or exceeds md breakpoint
    if (!isMenuOpen) return
    if (windowWidth && windowWidth >= 768) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen, windowWidth])

  if (windowWidth === null) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Header handleMenuToggle={handleMenuToggle} />
      <div className="container relative p-12 md:grid md:grid-cols-4 md:gap-12 xl:px-24">
        {windowWidth < 768 ? (
          isMenuOpen && <Nav ids={ids} handleMenuToggle={handleMenuToggle} />
        ) : (
          <Nav ids={ids} handleMenuToggle={handleMenuToggle} />
        )}
        <main className="md:col-span-3">
          {children}
        </main>
      </div>
    </div>
  )
}

