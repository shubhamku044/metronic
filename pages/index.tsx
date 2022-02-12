import Head from 'next/head'
import Toolbar from '../Components/Toolbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'
import StoreAnalytics from '../Components/StoreAnalytics'

export default function Home() {
  return (
    <div className="bg-[#f7f7f7]">
      <Head>
        <title>
          Platfawm - the world's #1 selling Bootstrap Admin Theme Ecosystem for
          HTML, Vue, React, Angular & Laravel by Keenthemes
        </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main>
        <Toolbar title={'Store Analytics'} />
        <div className="bg-white">
          <section className="mx-auto max-w-6xl px-4">
            <StoreAnalytics />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
