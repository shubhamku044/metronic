import Image from 'next/image'
import Head from 'next/head'

const MultiStepAside = () => {
  return (
    <>
      <div className="h-screen overflow-y-scroll bg-gray-100 px-24 scrollbar scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <div className="space-y-10">
          <div className="space-y-8 py-8">
            <div className="flex justify-center">
              <Image
                src={`/logos/platfawn-logo.png`}
                width={100}
                height={62}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-platfawmBlueLight-primary text-base font-semibold text-platfawmTextDark-2">
                1
              </div>
              <div>
                <div className="font-semibold text-gray-600">Account Type</div>
                <div className="text-xs font-semibold text-gray-400">
                  Setup Account details
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-platfawmTextDark-2 text-base font-semibold text-platfawmBlueLight-primary">
                2
              </div>
              <div>
                <div className="font-semibold text-gray-500">
                  Account Settings
                </div>
                <div className="text-xs font-semibold text-gray-400">
                  Setup Your Account Settings
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-platfawmTextDark-2 text-base font-semibold text-platfawmBlueLight-primary">
                3
              </div>
              <div>
                <div className="font-semibold text-gray-500">Business Info</div>
                <div className="text-xs font-semibold text-gray-400">
                  Your Business Related Info
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-platfawmTextDark-2 text-base font-semibold text-platfawmBlueLight-primary">
                4
              </div>
              <div>
                <div className="font-semibold text-gray-500">
                  Billing Details
                </div>
                <div className="text-xs font-semibold text-gray-400">
                  Set Your Payment Methods
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-platfawmTextDark-2 text-base font-semibold text-platfawmBlueLight-primary">
                5
              </div>
              <div>
                <div className="font-semibold text-gray-500">Completed</div>
                <div className="text-xs font-semibold text-gray-400">
                  Woah, we are here
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-32 w-32 lg:h-60 lg:w-60">
              <Image
                src={`/illustrations/sketchy-1/16.png`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MultiStepAside
