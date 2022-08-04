import React from 'react'
import { AppProps } from 'next/app'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

import '../styles/globals.scss'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <TawkMessengerReact
        propertyId="6155e3aa25797d7a8901a454"
        widgetId="1fgro2kqi"
      />
    </>
  )
}

export default MyApp
