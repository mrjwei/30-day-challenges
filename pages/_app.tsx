import '../styles/globals.css'
import 'highlight.js/styles/vs2015.css'
import type { AppProps } from 'next/app'
import {Layout} from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  const {metas, ...rest} = pageProps
  return (
    <Layout metas={metas}>
      <Component {...rest} />
    </Layout>
  )
}

export default MyApp
