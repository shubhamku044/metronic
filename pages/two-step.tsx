import Aside from '../Components/Aside'
import Head from 'next/head'
import { MailOpenIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const twoStep = () => {
  return (
    <>
      <Head>
        <title>Platfawm - New Password</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[51rem] xl:w-[61rem]">
            <Aside />
          </div>
          <div className="mt-16 w-full bg-white py-4 dark:bg-darkBg">
            <div className="">
              <div className="mx-auto max-w-md py-6">
                <form action="#" className="px-4">
                  <div className="space-y-2 text-center">
                    <div className="relative mx-auto h-28 w-28">
                      <Image
                        src="/email.svg"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-platfawmTextDark-2">
                      Two Step Verification
                    </h1>
                    <div className="flex justify-center space-x-2 text-sm font-medium">
                      <span className="text-gray-400">
                        Enter the verification code we sent to
                      </span>
                    </div>
                    <div className="text-sm font-semibold">****@xyz.com</div>
                  </div>
                  <div className="mt-10 flex flex-col space-y-2">
                    <div className="text-xs font-semibold tracking-wide">
                      Type your 6 digit security code
                    </div>
                    <div className="flex max-w-full justify-between">
                      <input
                        type="text"
                        name="#"
                        id="#"
                        maxLength={1}
                        minLength={1}
                        required
                        className="w-14 rounded border-[#28C6FF] bg-slate-200 py-3 text-center text-xl font-semibold text-gray-700 focus:border-[1px] focus:bg-slate-200 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="#"
                        id="#"
                        maxLength={1}
                        minLength={1}
                        required
                        className="w-14 rounded border-[#28C6FF] bg-slate-200 py-3 text-center text-xl font-semibold text-gray-700 focus:border-[1px] focus:bg-slate-200 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="#"
                        id="#"
                        maxLength={1}
                        minLength={1}
                        required
                        className="w-14 rounded border-[#28C6FF] bg-slate-200 py-3 text-center text-xl font-semibold text-gray-700 focus:border-[1px] focus:bg-slate-200 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="#"
                        id="#"
                        maxLength={1}
                        minLength={1}
                        required
                        className="w-14 rounded border-[#28C6FF] bg-slate-200 py-3 text-center text-xl font-semibold text-gray-700 focus:border-[1px] focus:bg-slate-200 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="#"
                        id="#"
                        maxLength={1}
                        minLength={1}
                        required
                        className="w-14 rounded border-[#28C6FF] bg-slate-200 py-3 text-center text-xl font-semibold text-gray-700 focus:border-[1px] focus:bg-slate-200 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="#"
                        id="#"
                        maxLength={1}
                        minLength={1}
                        required
                        className="w-14 rounded border-[#28C6FF] bg-slate-200 py-3 text-center text-xl font-semibold text-gray-700 focus:border-[1px] focus:bg-slate-200 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <button className="mx-auto block rounded bg-[#28C6FF] px-6 py-2 text-sm font-medium text-white duration-200 hover:bg-[#29C7A6]">
                      Submit
                    </button>
                  </div>
                  <div className="mt-8 flex justify-center space-x-2 text-sm font-medium">
                    <span className="text-gray-400">Didn’t get the code ?</span>
                    <p className="cursor-pointer text-[#29C7A6] transition-all duration-200 hover:text-[#28C6FF]">
                      Resend
                    </p>
                  </div>
                </form>
              </div>
              <div className="lg:mt-12">
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

export default twoStep
