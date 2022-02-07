import Aside from '../Components/Aside'
import Link from 'next/link'
import Image from 'next/image'

const signIn = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[51rem] xl:w-[61rem]">
          <Aside />
        </div>
        <div className="w-full py-4">
          <div className="">
            <div className="mx-auto max-w-2xl py-12 lg:max-w-sm">
              <form action="#" className="px-4">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    Sign In to Metronic
                  </h1>
                  <div className="flex justify-center space-x-2 text-sm font-medium">
                    <span className="text-gray-400">New Here?</span>
                    <p className="cursor-pointer text-green-500 transition-all duration-200 hover:text-green-400">
                      Create an Account
                    </p>
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
                <div className="mt-10 flex flex-col space-y-2">
                  <div className="flex justify-between text-xs font-semibold tracking-wide">
                    <label htmlFor="#">Password</label>
                    <div className="cursor-pointer text-green-500 transition-all duration-200 hover:text-green-400">
                      Forgot Password?
                    </div>
                  </div>
                  <input
                    type="password"
                    name="#"
                    id="#"
                    className="rounded bg-slate-100 px-4 py-3 text-sm tracking-wide text-gray-600 focus:bg-slate-200 focus:outline-none"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <button className="block w-full rounded bg-green-400 py-2 text-sm font-medium text-white duration-200 hover:bg-green-500">
                    Continue
                  </button>
                  <div className="text-center text-xs font-semibold uppercase text-gray-400">
                    or
                  </div>
                  <Link href="#">
                    <a className="flex w-full items-center justify-center space-x-2 rounded bg-gray-100 py-2 text-sm text-gray-700 duration-200 hover:bg-gray-200">
                      <div className="relative h-5 w-5">
                        <Image
                          src={'/brand-logos/google-icon.svg'}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div>Continue with Google</div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="flex w-full items-center justify-center space-x-2 rounded bg-gray-100 py-2 text-sm text-gray-700 duration-200 hover:bg-gray-200">
                      <div className="relative h-5 w-5">
                        <Image
                          src={'/brand-logos/facebook-4.svg'}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div>Continue with Facebook</div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="flex w-full items-center justify-center space-x-2 rounded bg-gray-100 py-2 text-sm text-gray-700 duration-200 hover:bg-gray-200">
                      <div className="relative h-5 w-5">
                        <Image
                          src={'/brand-logos/apple-black.svg'}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div>Continue with Apple</div>
                    </a>
                  </Link>
                </div>
              </form>
            </div>
            <div>
              <div className="flex justify-center space-x-4 text-sm font-medium text-gray-400">
                <div className="cursor-pointer duration-200 hover:text-green-400">
                  About
                </div>
                <div className="cursor-pointer duration-200 hover:text-green-400">
                  Support
                </div>
                <div className="cursor-pointer duration-200 hover:text-green-400">
                  Purchase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signIn
