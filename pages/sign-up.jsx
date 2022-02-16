import Aside from '../Components/Aside'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const signUp = () => {
  return (
    <>
      <Head>
        <title>Platfawm - Sign Up</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[51rem] xl:w-[61rem]">
            <Aside />
          </div>
          <div className="w-full bg-white py-4 dark:bg-darkBg">
            <div className="">
              <div className="mx-auto max-w-2xl py-12 lg:max-w-md">
                <form action="#" className="px-4">
                  <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-platfawmTextDark-2">
                      Create an Account
                    </h1>
                    <div className="flex justify-center space-x-2 text-sm font-medium">
                      <span className="text-gray-400">
                        Already have an account?
                      </span>
                      <p className="cursor-pointer text-[#29C7A6] transition-all duration-200 hover:text-[#28C6FF]">
                        Sign in here
                      </p>
                    </div>
                  </div>
                  {/* <Link href="#">
                    <a className="mt-8 flex w-full items-center justify-center space-x-2 rounded bg-blue-100 py-2 text-sm font-medium text-[#28C6FF] duration-200 hover:bg-[#28C6FF] hover:text-white">
                      <div className="relative h-5 w-5">
                        <Image
                          src={'/brand-logos/google-icon.svg'}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div>Sign in with Google</div>
                    </a>
                  </Link> */}
                  <div className="mt-8 flex items-center justify-center space-x-1">
                    {/* <div className="h-[1px] flex-1 bg-gray-200"></div>
                    <div className="text-xs font-medium uppercase text-gray-400">
                      or
                    </div> */}
                    <div className="h-[1px] flex-1 bg-gray-200"></div>
                  </div>
                  <div className="mt-10 flex flex-col space-y-2">
                    <label
                      htmlFor="#"
                      className="text-xs font-semibold tracking-wide"
                    >
                      First Name
                    </label>
                    <input
                      type="email"
                      name="#"
                      id="#"
                      autoComplete={false}
                      className="rounded bg-slate-100 px-4 py-3 text-sm tracking-wide text-gray-600 focus:bg-slate-200 focus:outline-none"
                    />
                  </div>
                  <div className="mt-6 flex flex-col space-y-2">
                    <label
                      htmlFor="#"
                      className="text-xs font-semibold tracking-wide"
                    >
                      Last Name
                    </label>
                    <input
                      type="email"
                      name="#"
                      id="#"
                      autoComplete={false}
                      className="rounded bg-slate-100 px-4 py-3 text-sm tracking-wide text-gray-600 focus:bg-slate-200 focus:outline-none"
                    />
                  </div>
                  <div className="mt-6 flex flex-col space-y-2">
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
                  <div className="mt-6 flex flex-col space-y-2">
                    <div className="flex justify-between text-xs font-semibold tracking-wide">
                      <label htmlFor="#">Password</label>
                    </div>
                    <input
                      type="password"
                      name="#"
                      id="#"
                      className="rounded bg-slate-100 px-4 py-3 text-sm tracking-wide text-gray-600 focus:bg-slate-200 focus:outline-none"
                    />
                    <div>
                      <div className="-mt-1 grid w-full grid-cols-4 gap-2">
                        <div className="h-[6px] rounded-full bg-gray-300"></div>
                        <div className="h-[6px] rounded-full bg-gray-300"></div>
                        <div className="h-[6px] rounded-full bg-gray-300"></div>
                        <div className="h-[6px] rounded-full bg-gray-300"></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-400">
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col space-y-2">
                    <div className="flex justify-between text-xs font-semibold tracking-wide">
                      <label htmlFor="#">Confirm Password</label>
                    </div>
                    <input
                      type="password"
                      name="#"
                      id="#"
                      className="rounded bg-slate-100 px-4 py-3 text-sm tracking-wide text-gray-600 focus:bg-slate-200 focus:outline-none"
                    />
                  </div>
                  <div className="mt-6 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="#"
                      id="#"
                      className="h-4 w-4 border-none bg-green-400 outline-none"
                    />
                    <div className="space-x-1 text-sm text-gray-500">
                      <span>I Agree</span>
                      <span className="cursor-pointer text-[#29C7A6] transition-all duration-200 hover:text-[#28C6FF]">
                        Terms and conditions.
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <button className="mx-auto block rounded bg-[#29C7A6] px-4 py-2 text-sm font-medium text-white duration-200 hover:bg-[#28C6FF]">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default signUp
