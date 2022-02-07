import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
} from '@heroicons/react/outline'
// import OnlineSales from './graphs/onlineSales'
import dynamic from 'next/dynamic'

const OnlineSales = dynamic(() => import('./graphs/onlineSales'))

const TotalOnlineSales = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-gray-50">
        <div className="px-8 py-6">
          <div className="flex items-center space-x-1">
            <p className="flex items-start">
              <span className="text-lg font-medium text-gray-400">$</span>
              <span className="text-3xl font-semibold text-gray-700">
                69,700
              </span>
            </p>
            <div className="rounded-md bg-blue-400 px-1 py-[2px] text-white">
              <span className="flex items-center ">
                <ArrowNarrowUpIcon className="h-3" />
                <span className="text-xs">2.2%</span>
              </span>
            </div>
          </div>
          <p className="text-xs font-medium text-gray-400">
            Total Online Sales
          </p>
        </div>
        <div>
          <OnlineSales />
        </div>
      </div>
      <div className="max-h-60 rounded-lg border bg-gray-50">
        <div className="px-8 py-6">
          <div className="flex items-center space-x-1">
            <p className="flex items-start">
              {/* <span className="text-lg font-medium text-gray-400">$</span> */}
              <span className="text-3xl font-semibold text-gray-700">
                1,836
              </span>
            </p>
            <div className="rounded-md bg-red-400 px-1 py-[2px] text-white">
              <span className="flex items-center ">
                <ArrowNarrowDownIcon className="h-3" />
                <span className="text-xs">2.2%</span>
              </span>
            </div>
          </div>
          <p className="text-xs font-medium text-gray-400">Total Sales</p>
        </div>

        <div className="mt-12 py-4 px-4">
          <div className="flex items-center justify-between text-xs font-semibold">
            <p className="text-gray-800">1,048 to Goal</p>
            <p className="text-gray-400">75%</p>
          </div>
          <div className="relative mt-4 h-2 w-full rounded-full bg-gray-300">
            <div className="absolute top-0 left-0 h-2 w-3/4 rounded-full bg-blue-600"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalOnlineSales
