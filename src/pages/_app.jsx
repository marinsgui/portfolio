import '@/styles/globals.css'

import Header from '@/components/Header'
import SocialLinks from '@/components/SocialLinks'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <SocialLinks />
    </>
  )
}
