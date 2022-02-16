import React from 'react'
import { useRouter } from 'next/router'

const HeaderMenu = () => {
  const router = useRouter()
  // console.log(router)

  return (
    <div className="hidden py-6 px-8 lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <ul className="flex flex-row items-center space-x-2 text-xs font-medium tracking-wider text-gray-500 dark:text-platfawmTextDark-2">
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
        <div>
          <div className="cursor-pointer rounded-md bg-blue-400/20 px-3 py-2 text-xs font-medium text-platfawmBlueLight-teriary transition-all duration-200 hover:bg-blue-500/80 hover:text-gray-100 dark:text-platfawmBlueLight-primary">
            Docs & Components
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu
