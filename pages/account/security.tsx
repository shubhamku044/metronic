import React from 'react'
import Account from '../../Components/Account'
import ActivityChart from '../../Components/ActivityChart'
import LicenseUsage from '../../Components/table/LicenseUsage'
import LoginSession from '../../Components/table/LoginSession'

const Security = () => {
  return (
    <div>
      <Account>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-start justify-between border-b px-6 pt-4 dark:border-borderBlue">
            <div className="text-sm font-semibold tracking-wide sm:text-lg">
              Security Summary
            </div>
            <div className="space-x-4 text-xs text-gray-500 sm:text-sm">
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                12 Hours
              </button>
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                Day
              </button>
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                Week
              </button>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="rounded-md border border-dashed py-2 text-center">
                <p className="text-base font-medium text-blue-400">
                  User Sign-in
                </p>
                <p className="text-3xl font-semibold">36,899</p>
              </div>
              <div className="rounded-md border border-dashed py-2 text-center">
                <p className="text-base font-medium text-green-400">
                  Admin Sign-in
                </p>
                <p className="text-3xl font-semibold">899</p>
              </div>
              <div className="rounded-md border border-dashed py-2 text-center">
                <p className="text-base font-medium text-red-400">
                  Failed Attempts
                </p>
                <p className="text-3xl font-semibold">89</p>
              </div>
            </div>
          </div>
          <div className="mt-4 px-6 py-4">
            <ActivityChart />
          </div>
        </div>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-semibold tracking-wide">Login Sessions</div>
            <div>
              <button className="rounded-md bg-blue-400 px-4 py-2 text-sm font-medium text-white duration-200 hover:bg-blue-500">
                View All
              </button>
            </div>
          </div>
          <div className="pb-4">
            <LoginSession />
          </div>
        </div>
        {/* <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-semibold tracking-wide">License Usage</div>
            <div>
              <button className="rounded-md bg-blue-400 px-4 py-2 text-sm font-medium text-white duration-200 hover:bg-blue-500">
                Download Report
              </button>
            </div>
          </div>
          <div className="pb-4">
            <LicenseUsage />
          </div>
        </div> */}
      </Account>
    </div>
  )
}

export default Security
