import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'
import {
  ChartBarIcon,
  MenuIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
  MoonIcon,
  MailIcon,
} from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { DocumentTextIcon, SupportIcon } from '@heroicons/react/outline'

const HeaderTop = () => {
  const [openNav, setOpenNav] = useState(false)
  const router = useRouter()

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

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
            className="relative h-8 w-10 lg:h-12 lg:w-12"
            onClick={() => router.push('/')}
          >
            <Image
              src={`/logos/platfawn-logo.png`}
              objectFit="contain"
              layout="fill"
              className=""
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="group flex cursor-pointer rounded-md border border-gray-300 p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            <SearchIcon
              className="h-4 w-4 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary group-hover:opacity-90
       dark:group-hover:text-platfawmBlue-1 lg:h-5 lg:w-5"
            />
            <input
              type="text"
              className="w-20 bg-transparent px-2 text-xs font-medium tracking-wider text-gray-800 placeholder:text-gray-400 focus:outline-none dark:text-platfawmTextDark-1 xs:w-28 sm:w-fit sm:px-4"
              placeholder="Quick Search"
            />
          </div>
          <div className="group cursor-pointer rounded-md border p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            <ChartBarIcon
              className="h-4 w-4 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary
       group-hover:opacity-90 dark:group-hover:text-platfawmBlue-1 lg:h-5 lg:w-5"
            />
          </div>
          <Popover className="text-gray-800 dark:text-gray-100">
            <Popover.Button className="group cursor-pointer rounded-md border p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
              <UserIcon
                className="h-5 w-5 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary
       group-hover:opacity-90 dark:group-hover:text-platfawmBlue-1 lg:h-5 lg:w-5"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-50 -translate-x-1/2 rounded-lg bg-white py-4 px-4 dark:bg-darkBlue">
                <div className="space-y-2">
                  <div className="flex space-x-4">
                    <div className="relative h-12 w-12 rounded-2xl">
                      <Image
                        src="/avatars/300-10.jpg"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h6>Phoebe</h6>
                      <div className="flex space-x-1 text-xs">
                        <MailIcon className="h-4 w-4" />
                        <p>test123@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div
                      onClick={() => {
                        router.push('/account/overview')
                      }}
                      className="cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-darkBg"
                    >
                      My Profile
                    </div>
                    <div className="cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-darkBg">
                      My Projects
                    </div>
                    <div className="cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-darkBg">
                      My Subscriptions
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div className="cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-darkBg">
                      Language
                    </div>
                    <div className="cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-darkBg">
                      Account Settings
                    </div>
                    <div className="cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-darkBg">
                      Sign Out
                    </div>
                  </div>
                  <hr />
                  <div className="px-4">
                    <Switch.Group>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={theme}
                          onChange={() =>
                            theme === 'light'
                              ? setTheme('dark')
                              : setTheme('light')
                          }
                          className={`${
                            theme === 'light'
                              ? 'bg-gray-300'
                              : 'bg-platfawmBlueLight-secondary'
                          }
                    relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only text-xs">Dark mode</span>
                          <span
                            aria-hidden="true"
                            className={`${
                              theme === 'dark'
                                ? 'translate-x-5'
                                : 'translate-x-0'
                            }
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                        <Switch.Label className="text-xs">
                          Dark mode
                        </Switch.Label>
                      </div>
                    </Switch.Group>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="group cursor-pointer rounded-md border p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            <DocumentTextIcon
              className="h-4 w-4 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary
       group-hover:opacity-90 dark:group-hover:text-platfawmBlue-1 lg:h-5 lg:w-5"
            />
          </div>
          <div className="group cursor-pointer rounded-md border p-1 hover:bg-slate-200 dark:border-borderBlue dark:hover:bg-darkBlue/60">
            <SupportIcon
              className="h-4 w-4 opacity-60 transition-all duration-200 group-hover:text-platfawmBlueLight-primary
       group-hover:opacity-90 dark:group-hover:text-platfawmBlue-1 lg:h-5 lg:w-5"
            />
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
