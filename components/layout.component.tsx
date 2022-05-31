import {Header, Footer} from '.'

export const Layout = ({type, metas, children}: {type: "top" | "sub", metas: any, children: React.ReactNode}) => {
  return (
    <div className='pl-[calc(100vw-100%)]'>
      <Header type={type} />
      <div className="container">
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

