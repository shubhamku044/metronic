import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
} from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const OnlineSales = dynamic(() => import('./graphs/onlineSales'))

const TotalOnlineVisitors = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-gray-50">
        <div className="px-8 py-6">
          <div className="flex items-center space-x-1">
            <p className="flex items-start">
              <span className="text-lg font-medium text-gray-400">$</span>
              <span className="text-3xl font-semibold text-gray-700">
                29,420
              </span>
            </p>
            <div className="rounded-md bg-blue-400 px-1 py-[2px] text-white">
              <span className="flex items-center ">
                <ArrowNarrowUpIcon className="h-3" />
                <span className="text-xs">2.4%</span>
              </span>
            </div>
          </div>
          <p className="text-xs font-medium text-gray-400">
            Total Online Visitors
          </p>
        </div>
        <div>{/* <OnlineSales /> */}</div>
      </div>
      <div className="max-h-60 rounded-lg border bg-gray-50">
        <div className="px-8 py-6">
          <div className="flex items-center space-x-1">
            <p className="flex items-start">
              {/* <span className="text-lg font-medium text-gray-400">$</span> */}
              <span className="text-3xl font-semibold text-gray-700">6.3k</span>
            </p>
            {/* <div className="rounded-md bg-red-400 px-1 py-[2px] text-white">
              <span className="flex items-center ">
                <ArrowNarrowDownIcon className="h-3" />
                <span className="text-xs">2.2%</span>
              </span>
            </div> */}
          </div>
          <p className="text-xs font-medium text-gray-400">
            Total New Customers
          </p>
        </div>

        <div className="mt-10 py-4 px-4">
          <div className="flex items-center justify-between text-xs font-semibold">
            <p className="text-gray-800 ">Todays Heroes</p>
          </div>
          <div className="flex -space-x-2">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white bg-red-500 text-lg text-white duration-200 hover:z-40">
              A
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white bg-yellow-500 text-lg text-white duration-200 hover:z-40">
              B
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white bg-green-500 text-lg text-white duration-200 hover:z-40">
              C
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white bg-pink-500 text-lg text-white duration-200 hover:z-40">
              D
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white bg-violet-500 text-lg text-white duration-200 hover:z-40">
              E
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white bg-red-500 text-lg text-white duration-200 hover:z-40">
              F
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalOnlineVisitors
