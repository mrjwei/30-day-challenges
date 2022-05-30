import {Header, Footer} from '.'

export const Layout = ({type, metas, children}: {type: "top" | "sub", metas: any, children: React.ReactNode}) => {
  return (
    <div>
      <Header type={type} />
      <div className="container px-6 py-12 md:grid md:grid-cols-4 md:gap-12 xl:px-24">
        <main className="md:col-span-3">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

