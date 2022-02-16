import React from 'react'
import Account from '../../Components/Account'
import LoginSession from '../../Components/table/LoginSession'
import Cards from '../../Components/payment_method/Cards'
import Paypal from '../../Components/payment_method/Paypal'
import { useState } from 'react'
import BillingAddress from '../../Components/BillingAddress'
import BillingHistory from '../../Components/BillingHistory'

const Billing = () => {
  const [payMethod, setPayMethod] = useState('card')

  return (
    <div>
      <Account>
        <div className="mx-auto max-w-6xl space-y-4 rounded-lg border bg-gray-50 py-4 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="mg:items-center flex flex-col justify-between space-y-4 px-6 py-4 md:flex-row md:space-y-0">
            <div className="">
              <div className="text-lg font-semibold tracking-wide text-gray-900">
                Active until Dec 09, 2022
              </div>
              <div className="text-xs text-gray-400">
                We will send you a notification upon Subscription expiration
              </div>
            </div>
            <div className="w-64 xs:w-72 sm:w-96">
              <div className="flex items-center justify-between text-base font-semibold">
                <p className="text-gray-700">User</p>
                <p className="text-gray-700">84 of 100 Used</p>
              </div>
              <div className="relative mt-2 h-2 w-full rounded-full bg-gray-300">
                <div className="absolute top-0 left-0 h-2 w-5/6 rounded-full bg-blue-500"></div>
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-400">
                  14 Users remaining until your plan requires update
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 px-6 py-4 md:flex-row md:items-center md:space-y-0">
            <div className="">
              <div className="text-sm font-medium tracking-wide text-gray-900">
                $24.99 <span className="text-gray-500">Per Month</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                Extended Pro Package. Up to 100 Agents & 25 Projects
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-sm font-semibold">
                <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
                  Cancel Subscription
                </button>
                <button className="rounded-lg bg-blue-400 px-4 py-2 text-white duration-200 hover:bg-blue-500 hover:text-white">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-start justify-between border-b px-6 pt-4 dark:border-b-borderBlue">
            <div className="text-sm font-semibold tracking-wide sm:text-lg">
              Payment Methods
            </div>
            <div className="space-x-4 text-xs text-gray-500 dark:text-platfawmTextDark-2 sm:text-sm">
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                Credit / Debit Card
              </button>
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                Paypal
              </button>
            </div>
          </div>
          <div className="px-6 py-4">
            {payMethod === 'card' && <Cards />}
            {payMethod === 'paypal' && <Paypal />}
          </div>
        </div>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-start justify-between border-b px-6 pt-4 dark:border-b-borderBlue">
            <div className="text-lg font-semibold tracking-wide">
              Billing Address
            </div>
            <div className="space-x-4 text-sm text-gray-500"></div>
          </div>
          <div className="px-6 py-4">
            <BillingAddress />
          </div>
        </div>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-start justify-between border-b px-6 pt-4 dark:border-b-borderBlue">
            <div className="text-lg font-semibold tracking-wide">
              Billing History
            </div>
            <div className="space-x-4 text-sm text-gray-500 dark:text-platfawmTextDark-2">
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                Month
              </button>
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                Year
              </button>
              <button className="border-b-2 border-blue-500 pb-4 font-semibold">
                All Time
              </button>
            </div>
          </div>
          <div className="pb-4">
            <BillingHistory />
          </div>
        </div>
      </Account>
    </div>
  )
}

export default Billing
