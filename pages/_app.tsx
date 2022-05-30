import '../styles/globals.css'
import 'highlight.js/styles/vs2015.css'
import type { AppProps } from 'next/app'
import {useRouter} from 'next/router'
import {Layout} from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  const {metas, ...rest} = pageProps
  const router = useRouter()

  return (
    <Layout type={router.asPath === "/" ? "top" : "sub"} metas={metas}>
      <Component {...rest} />
    </Layout>
  )
}

export default MyApp
