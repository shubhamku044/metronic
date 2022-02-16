import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import {
  ChartBarIcon,
  MenuIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
  MoonIcon,
} from '@heroicons/react/solid'

const HeaderTop = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-platfawmBlue-1
group-hover:opacity-90 lg:h-6 lg:w-6"
          role="button"
          onClick={() => {
            setTheme('light')
          }}
        />
      )
    } else {
      return (
        <MoonIcon
          className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary
group-hover:opacity-90 lg:h-6 lg:w-6"
          role="button"
          onClick={() => {
            setTheme('dark')
          }}
        />
      )
    }
  }

  return (
    <nav className="px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <MenuIcon
            className="block h-5 w-5 cursor-pointer text-gray-600 opacity-70 lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          />

          <div
            className="relative h-5 w-24 lg:h-9 lg:w-36"
            onClick={() => router.push('/')}
          >
            <Image
              src={`/logos/platfawn.svg`}
              objectFit="contain"
              layout="fill"
              className=""
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="group flex cursor-pointer rounded-md border border-gray-300 p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            <SearchIcon
              className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary group-hover:opacity-90
       dark:group-hover:text-platfawmBlue-1 lg:h-6 lg:w-6 "
            />
            <input
              type="text"
              className="hidden bg-transparent px-4 text-xs font-medium tracking-wider text-gray-800 placeholder:text-gray-400 focus:outline-none dark:text-platfawmTextDark-1 sm:block"
              placeholder="Quick Search"
            />
          </div>
          <div className="group cursor-pointer rounded-md border p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            <ChartBarIcon
              className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary
       group-hover:opacity-90 dark:group-hover:text-platfawmBlue-1 lg:h-6 lg:w-6"
            />
          </div>
          <div className="group cursor-pointer rounded-md border p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            {/* <SunIcon
              className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-green-500
       group-hover:opacity-90 lg:h-6 lg:w-6"
            /> */}
            {renderThemeChanger()}
          </div>
          <div className="group cursor-pointer rounded-md border p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            <UserIcon
              className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary
       group-hover:opacity-90 dark:group-hover:text-platfawmBlue-1 lg:h-6 lg:w-6"
            />
          </div>
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md border text-platfawmBlueLight-teriary hover:bg-platfawmBlueLight-primary hover:text-white dark:border-borderBlue dark:text-platfawmBlueLight-primary dark:hover:bg-darkBlue/60 lg:h-[34px] lg:w-[34px]">
            <span className="text-sm font-semibold lg:text-base">3</span>
          </div>
        </div>
      </div>
      {openNav && (
        <>
          <div className="fixed top-0 right-0 z-50 flex h-full w-72 items-center justify-center bg-gray-100 dark:bg-darkBg">
            <ul className="flex flex-col items-center justify-center space-y-6 text-xs font-medium tracking-wider text-gray-500 dark:text-platfawmTextDark-2">
              <li>
                <div
                  className={`cursor-pointer rounded-md px-3 py-2 font-poppins hover:bg-gray-100/80 dark:hover:bg-darkBlue ${
                    router.pathname === '/'
                      ? 'bg-gray-100/80 dark:bg-darkBlue'
                      : ' '
                  }`}
                  onClick={() => {
                    router.push('/')
                  }}
                >
                  Auth Analytics
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    router.push('/account/overview')
                  }}
                  className={`cursor-pointer rounded-md px-3 py-2 font-poppins hover:bg-gray-100/80 dark:hover:bg-darkBlue ${
                    router.pathname === '/account/overview' ||
                    router.pathname === '/account/settings' ||
                    router.pathname === '/account/security' ||
                    router.pathname === '/account/billing' ||
                    router.pathname === '/account/logs'
                      ? 'bg-gray-100/80 dark:bg-darkBlue'
                      : ' '
                  }`}
                >
                  Account
                </div>
              </li>
              <li>
                <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-darkBlue">
                  Apps
                </div>
              </li>
              <li>
                <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-darkBlue">
                  Resources
                </div>
              </li>
              <li>
                <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-darkBlue">
                  Mega Menu
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

export default HeaderTop
