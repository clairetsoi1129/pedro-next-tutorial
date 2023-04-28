import '@/styles/globals.css'
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-no-undef
  return <Layout><Component {...pageProps} /></Layout>
}
