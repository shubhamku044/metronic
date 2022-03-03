import { BriefcaseIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'

const AccountType = () => {
  const router = useRouter()
  const [account, setAccount] = useState<string>('Personal')

  return (
    <div className="flex flex-col items-center justify-center space-y-36">
      <div className="mt-24 space-y-16">
        {/* Title */}
        <div>
          <h4 className="text-lg font-semibold">Choose Account Type</h4>
          <div className="flex space-x-2 text-xs font-medium">
            <span className="text-gray-400">
              If you need more info, please check out
            </span>
            <p className="cursor-pointer text-[#29C7A6] transition-all duration-200 hover:text-[#28C6FF]">
              Help Page
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-6">
          <div
            className={`flex h-24 w-[16rem] cursor-pointer items-center justify-center rounded border border-dashed duration-200 hover:border-borderBlue hover:bg-blue-100 ${
              account === 'Personal' ? 'border-borderBlue bg-blue-100' : ''
            }`}
            onClick={() => setAccount('Personal')}
          >
            <div className="mx-auto flex items-center space-x-3 px-4">
              <div>
                <BriefcaseIcon className="h-8 w-8 text-gray-400" />
              </div>
              <div className="space-y-1">
                <h6 className="text-sm font-semibold text-gray-900">
                  Personal Account
                </h6>
                <p className="text-xs font-medium text-gray-400">
                  If you need more info, please check it out
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex h-24 w-[16rem] cursor-pointer items-center justify-center rounded border border-dashed duration-200 hover:border-borderBlue hover:bg-blue-100 ${
              account === 'Corporate' ? 'border-borderBlue bg-blue-100' : ''
            }`}
            onClick={() => setAccount('Corporate')}
          >
            <div className="mx-auto flex items-center space-x-3 px-4">
              <div>
                <BriefcaseIcon className="h-8 w-8 text-gray-400" />
              </div>
              <div className="space-y-1">
                <h6 className="text-sm font-semibold text-gray-900">
                  Corporate Account
                </h6>
                <p className="text-xs font-medium text-gray-400">
                  Create corporate account to mane users
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Continue Button */}
        <div className="flex flex-row-reverse">
          <button
            onClick={() =>
              account === 'Personal'
                ? router.push('/sign-up')
                : console.log('Corporate')
            }
            className="flex items-center space-x-1 rounded-md bg-blue-400 px-4 py-3 text-sm font-medium text-white duration-200 hover:bg-blue-500"
          >
            <div>Continue</div>
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      {/* Footer */}
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
  )
}

export default AccountType
