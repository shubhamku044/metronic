import { FilterIcon } from '@heroicons/react/solid'
import React from 'react'

const Toolbar = ({ title }) => {
  return (
    <div className="mx-auto max-w-6xl py-5 px-4">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-sm font-semibold tracking-wide text-gray-800 dark:text-platfawmTextDark-2 md:text-base">
            {title}
          </h5>
        </div>
        <div className="flex items-center space-x-4 text-xs md:text-sm">
          <button className="rounded-md bg-blue-400/20 px-4 py-2 text-platfawmBlueLight-teriary transition-all duration-200 hover:bg-blue-500/80 hover:text-gray-100 dark:text-platfawmBlueLight-primary">
            <div className="flex items-center space-x-1 font-medium">
              <span>
                <FilterIcon className="h-3 w-3" />
              </span>
              <span>Filter</span>
            </div>
          </button>
          <button className="rounded-md bg-darkBlue/80 px-4 py-2 font-medium text-gray-100 transition-all duration-200 hover:bg-darkBlue/95 hover:text-gray-50 dark:bg-darkBg dark:text-platfawmBlueLight-primary dark:hover:bg-blue-500/80">
            Show
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
