import { SearchIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header/Header'
import Toolbar from '../../Components/Toolbar'
import Profile from '../../Components/search/Profile'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const profiles = [
  {
    id: 1,
    name: 'Karina Clark',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-1.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 2,
    name: 'Sean Bean',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-2.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 3,
    name: 'Alan Johnson',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-3.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 4,
    name: 'Robert Doe',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-4.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 5,
    name: 'Olivia Wild',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-5.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 6,
    name: 'Adam Williams',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-6.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 7,
    name: 'Peter Marcus',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-7.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 8,
    name: 'Neil Owen',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-8.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
  {
    id: 9,
    name: 'Benjamin Jacob',
    occupation: 'Art Director at Novica Co.',
    imgSrc: '/avatars/300-9.jpg',
    earnings: 1456,
    tasks: 23,
    sales: 3423,
  },
]

const horizontal = () => {
  return (
    <>
      <Head>
        <title>Platfawm - Password</title>
      </Head>
      <div className="bg-[#f7f7f7] dark:bg-darkBlue">
        <Header />
        <Toolbar title="Horizontal" />

        <section className="bg-white dark:bg-darkBg">
          <main className="mx-auto max-w-6xl space-y-8 px-4 py-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl items-center space-x-2 rounded-lg border bg-gray-50 py-6 px-6 dark:border-borderBlue dark:bg-darkBg-sec lg:px-8">
              <div className="group flex w-80 cursor-pointer rounded-md border border-gray-300 px-2 py-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
                <SearchIcon
                  className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary group-hover:opacity-90
       dark:group-hover:text-platfawmBlue-1 lg:h-6 lg:w-6"
                />
                <input
                  type="text"
                  className="w-20 bg-transparent px-2 text-base font-medium tracking-tight text-gray-800 placeholder:text-gray-400 focus:outline-none dark:text-platfawmTextDark-1 xs:w-28 sm:w-fit sm:px-4"
                  placeholder="Search"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <button className="rounded-md bg-blue-400 px-4 py-2 text-sm font-medium text-white duration-200 hover:bg-blue-500">
                    Search
                  </button>
                </div>
                <p className="cursor-pointer text-sm font-medium text-[#29C7A6] transition-all duration-200 hover:text-[#28C6FF]">
                  Advance Search
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-end space-x-2">
                <p className="text-lg font-medium">57 Items Found</p>
                <p className="text-xs font-semibold text-gray-400">
                  by Recent Updates ↓
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {profiles.map(
                ({ id, name, occupation, imgSrc, earnings, tasks, sales }) => (
                  <Profile
                    name={name}
                    occupation={occupation}
                    imgSrc={imgSrc}
                    earnings={earnings}
                    tasks={tasks}
                    sales={sales}
                    key={id}
                  />
                )
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500">
                Showing 1 to 10 of 50 entries
              </p>
              <div className="flex items-center text-xs">
                <button className="rounded p-1 font-medium duration-200 hover:bg-blue-100">
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <button className="rounded bg-blue-300 px-3 py-1 font-medium text-white duration-200 hover:bg-blue-400">
                  1
                </button>
                <button className="rounded px-3 py-1 font-medium duration-200 hover:bg-blue-400 hover:text-white">
                  2
                </button>
                <button className="rounded px-3 py-1 font-medium duration-200 hover:bg-blue-400 hover:text-white">
                  3
                </button>
                <button className="rounded px-3 py-1 font-medium duration-200 hover:bg-blue-400 hover:text-white">
                  4
                </button>
                <button className="rounded px-3 py-1 font-medium duration-200 hover:bg-blue-400 hover:text-white">
                  5
                </button>
                <button className="rounded p-1 font-medium duration-200 hover:bg-blue-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </main>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default horizontal
