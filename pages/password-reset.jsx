import Aside from '../Components/Aside'
import Link from 'next/link'
import Image from 'next/image'

const passwordReset = () => {
  return (
    <div className="">
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
                  <h1 className="text-2xl font-semibold text-gray-800">
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
                  <button className="w-24 rounded-md bg-green-400 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-500">
                    Submit
                  </button>
                  <button className="w-24 rounded-md bg-green-100 py-3 text-sm font-medium text-green-500 transition-all duration-200 hover:bg-green-400 hover:text-white">
                    Cancel
                  </button>
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

export default passwordReset
