import React, { useRef } from 'react'
import Head from 'next/head'
import Presentation from '../components/Presentation'
import KnowMore from '../components/KnowMore'
// import OurNumbers from '../components/OurNumbers'
import Steps from '../components/Steps'
import ContactUs from '../components/ContactUs'
// import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import Plans from '../components/Plans'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import Navbar from '../components/Navbar'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import Whatsapp from '../components/Whatsapp'

const videoJsOptions = {
  autoplay: false,
  controls: true,
  poster: './assets/video-bg.png',
  width: '920',
  sources: [
    {
      src: 'http://evolvesrio.com/LGPD_FINAL2.mp4',
      type: 'video/mp4'
    }
  ]
}

const Home: React.FC = () => {
  const tawkMessengerRef = useRef()

  return (
    <div>
      <Head>
        <title>Lgpdmap - Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="assets/favicon.ico" />
      </Head>
      <Navbar />
      <Presentation
        title="Nunca foi tão fácil adequar sua empresa à LGPD."
        paragraph="Diga adeus às planilhas ou ferramentas complexas, com recursos desnecessários. Implemente a <strong> LGPD </strong> de forma simples e centralizada, com uma só ferramenta."
        hasButton="true"
      />
      <KnowMore {...videoJsOptions} />
      {/* <OurNumbers /> */}
      <Steps />
      <ContactUs />
      {/* <Testimonials /> */}
      <Partners />

      <Plans />
      <FAQ />
      <TawkMessengerReact
        propertyId="property_id"
        widgetId="default"
        ref={tawkMessengerRef}
      />
      <Footer />
      <Whatsapp />
    </div>
  )
}

export default Home
