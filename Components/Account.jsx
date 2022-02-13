import Header from './Header/Header'
import Footer from './Footer'
import Toolbar from './Toolbar'
import Image from 'next/image'
import Head from 'next/head'
import {
  BadgeCheckIcon,
  DotsHorizontalIcon,
  LocationMarkerIcon,
  MailIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Account = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-[#f7f7f7]">
        <Header />
        <Toolbar title={'Account Overview'} />
        <section className="bg-white">
          <main className="mx-auto max-w-6xl px-8 py-6">
            <div className="space-y-8 rounded-lg border bg-gray-50 px-6 pt-6">
              <div className="flex items-center space-x-8">
                <div>
                  <div className="relative h-32 w-32">
                    <Image
                      src="/avatars/300-10.jpg"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                    <div className="absolute bottom-8 -right-2 h-3 w-3 rounded-full bg-[#00B2FF] ring-4 ring-gray-50"></div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <h6 className="text-lg font-semibold">Phoebe</h6>
                          <span>
                            <BadgeCheckIcon className="h-5 w-5 text-[#00B2FF]" />
                          </span>
                        </div>
                        <div>
                          <span className="cursor-pointer rounded-lg bg-blue-50 px-2 py-1 text-xs font-medium text-[#00a2ff] transition-all duration-200 hover:bg-[#00B2FF] hover:text-white">
                            Upgrade to pro
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex cursor-pointer items-center space-x-2 text-gray-400 hover:text-[#00B2FF]">
                          <div>
                            <UserCircleIcon className="h-4 w-4" />
                          </div>
                          <div className="text-xs font-medium">Developer</div>
                        </div>
                        <div className="flex cursor-pointer items-center space-x-2 text-gray-400 hover:text-[#00B2FF]">
                          <div>
                            <LocationMarkerIcon className="h-4 w-4" />
                          </div>
                          <div className="text-xs font-medium">Los Angles</div>
                        </div>
                        <div className="flex cursor-pointer items-center space-x-2 text-gray-400 hover:text-[#00B2FF]">
                          <div>
                            <MailIcon className="h-4 w-4" />
                          </div>
                          <div className="text-xs font-medium">
                            text123@mail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-medium">
                        <button className="rounded-lg bg-gray-100 px-3 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
                          Follow
                        </button>
                        <button className="rounded-lg bg-blue-400 px-3 py-2 text-white duration-200 hover:bg-blue-500 hover:text-white">
                          Hire Me
                        </button>
                        <button className="rounded-lg bg-gray-100 px-2 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
                          <DotsHorizontalIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center space-x-6">
                        <div className="rounded-lg border border-dashed px-3 py-2">
                          <div className="flex items-center space-x-1">
                            <ArrowSmUpIcon className="h-5 w-5 text-blue-400" />
                            <span className="text-lg font-semibold">
                              $4,500
                            </span>
                          </div>
                          <div className="ml-2 text-xs font-medium text-gray-400">
                            Earnings
                          </div>
                        </div>
                        <div className="rounded-lg border border-dashed px-3 py-2">
                          <div className="flex items-center space-x-1">
                            <ArrowSmDownIcon className="h-5 w-5 text-red-400" />
                            <span className="text-lg font-semibold">75</span>
                          </div>
                          <div className="ml-2 text-xs font-medium text-gray-400">
                            Projects
                          </div>
                        </div>
                        <div className="rounded-lg border border-dashed px-3 py-2">
                          <div className="flex items-center space-x-1">
                            <ArrowSmUpIcon className="h-5 w-5 text-blue-400" />
                            <span className="text-lg font-semibold">60%</span>
                          </div>
                          <div className="ml-2 text-xs font-medium text-gray-400">
                            Success Rate
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-60">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <p className="text-gray-400">Profile Completion</p>
                          <p className="text-gray-600">75%</p>
                        </div>
                        <div className="relative mt-2 h-2 w-full rounded-full bg-gray-300">
                          <div className="absolute top-0 left-0 h-2 w-3/4 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul className="flex text-base font-medium text-gray-400 md:space-x-8">
                  <li
                    className={`cursor-pointer border-blue-400 pb-3 hover:border-b-[3px] ${
                      router.pathname === '/account/overview'
                        ? 'border-b-[3px] border-blue-400 text-blue-400'
                        : ' '
                    }`}
                    onClick={() => router.push('/account/overview')}
                  >
                    Overview
                  </li>
                  <li
                    className={`cursor-pointer border-blue-400 pb-3 hover:border-b-[3px] ${
                      router.pathname === '/account/settings'
                        ? 'border-b-[3px] border-blue-400 text-blue-400'
                        : ' '
                    }`}
                    onClick={() => router.push('/account/settings')}
                  >
                    Settings
                  </li>
                  <li
                    className={`cursor-pointer border-blue-400 pb-3 hover:border-b-[3px] ${
                      router.pathname === '/account/security'
                        ? 'border-b-[3px] border-blue-400 text-blue-400'
                        : ' '
                    }`}
                    onClick={() => router.push('/account/security')}
                  >
                    Security
                  </li>
                  <li
                    className={`cursor-pointer border-blue-400 pb-3 hover:border-b-[3px] ${
                      router.pathname === '/account/billing'
                        ? 'border-b-[3px] border-blue-400 text-blue-400'
                        : ' '
                    }`}
                    onClick={() => router.push('/account/billing')}
                  >
                    Billing
                  </li>
                  <li
                    className={`cursor-pointer border-blue-400 pb-3 hover:border-b-[3px] ${
                      router.pathname === '/account/logs'
                        ? 'border-b-[3px] border-blue-400 text-blue-400'
                        : ' '
                    }`}
                    onClick={() => router.push('/account/logs')}
                    settings
                  >
                    Logs
                  </li>
                </ul>
              </div>
            </div>
            {children}
          </main>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Account
