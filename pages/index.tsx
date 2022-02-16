import Head from 'next/head'
import Toolbar from '../Components/Toolbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'
import AuthAnalytics from '../Components/AuthAnalytics'

export default function Home() {
  return (
    <div className="bg-[#f7f7f7] dark:bg-darkBlue">
      <Head>
        <title>
          Platfawm - the world's #1 selling Bootstrap Admin Theme Ecosystem for
          HTML, Vue, React, Angular & Laravel by Keenthemes
        </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main>
        <Toolbar title={'Auth Analytics'} />
        <div className="bg-white dark:bg-darkBg">
          <section className="mx-auto max-w-6xl px-4">
            <AuthAnalytics />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
