import Head from 'next/head'
import Toolbar from '../Components/Toolbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'
import Dashboard from '../Components/Dashboard'

export default function Home() {
  return (
    <div className="bg-[#f7f7f7] dark:bg-darkBlue">
      <Head>
        <title>Platfawm - Passport</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main>
        <Toolbar title={'Dashboard'} />
        <div className="bg-white dark:bg-darkBg">
          <section className="mx-auto max-w-6xl px-4">
            <Dashboard />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
