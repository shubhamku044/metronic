import { FilterIcon } from '@heroicons/react/solid'
import React from 'react'

const Toolbar = ({ title }) => {
  return (
    <div className="mx-auto max-w-6xl py-5 px-4">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-sm font-semibold tracking-wide text-gray-800 md:text-base">
            {title}
          </h5>
        </div>
        <div className="flex items-center space-x-4 text-xs md:text-sm">
          <button className="rounded-md bg-green-100 px-4 py-2 text-green-500 transition-all duration-200 hover:bg-green-400 hover:text-gray-50">
            <div className="flex items-center space-x-1 font-medium">
              <span>
                <FilterIcon className="h-3 w-3" />
              </span>
              <span>Filter</span>
            </div>
          </button>
          <button className="rounded-md bg-green-400 px-4 py-2 font-medium text-gray-50 transition-all duration-200 hover:bg-green-500 hover:text-gray-50">
            Show
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
