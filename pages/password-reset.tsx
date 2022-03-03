import Aside from '../Components/Aside'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const passwordReset = () => {
  return (
    <>
      <Head>
        <title>Platfawm - Password Reset</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-white dark:bg-darkBg">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[51rem] xl:w-[61rem]">
            <Aside />
          </div>
          <div className="w-full py-4">
            <div className="">
              <div
                className="mx-auto flex max-w-2xl items-center justify-center py-12 lg:max-w-sm"
                style={{ minHeight: 'calc(100vh - 60px)' }}
              >
                <form action="#" className="px-4">
                  <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-platfawmTextDark-2">
                      Forgot Password ?
                    </h1>
                    <div className="flex justify-center space-x-2 text-sm font-medium">
                      <span className="text-gray-400">
                        Enter your email to reset your password.
                      </span>
                    </div>
                  </div>
                  <div className="mt-10 flex flex-col space-y-2">
                    <label
                      htmlFor="#"
                      className="text-xs font-semibold tracking-wide"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="#"
                      id="#"
                      autoComplete={false}
                      className="rounded bg-slate-100 px-4 py-3 text-sm tracking-wide text-gray-600 focus:bg-slate-200 focus:outline-none"
                    />
                  </div>
                  <div className="mt-6 flex justify-center space-x-3">
                    <button className="w-24 rounded-md bg-[#28C6FF] py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#29C7A6]">
                      Submit
                    </button>
                    <button className="w-24 rounded-md bg-blue-100 py-3 text-sm font-medium text-[#29C7A6] transition-all duration-200 hover:bg-[#28C6FF] hover:text-white">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex justify-center space-x-4 text-sm font-medium text-gray-400">
                    <div className="cursor-pointer duration-200 hover:text-[#28C6FF]">
                      About
                    </div>
                    <div className="cursor-pointer duration-200 hover:text-[#28C6FF]">
                      Support
                    </div>
                    <div className="cursor-pointer duration-200 hover:text-[#28C6FF]">
                      Privacy
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    © 2022 Platfawm LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default passwordReset
