import {Header, Footer} from '.'

export const Layout = ({type, metas, children}: {type: "top" | "sub", metas: any, children: React.ReactNode}) => {
  return (
    <div className={`min-h-screen flex flex-col justify-between ${type === "top" && "pl-[calc(100vw-100%)]"}`}>
      <Header type={type} />
      <div className="container my-12 flex-grow">
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

