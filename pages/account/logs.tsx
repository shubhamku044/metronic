import React from 'react'
import Account from '../../Components/Account'
import { useRouter } from 'next/router'
import { CloudDownloadIcon } from '@heroicons/react/outline'
import LoginSession from '../../Components/table/LoginSession'
import LogsTable from '../../Components/table/Logs'

const Logs = () => {
  const router = useRouter()

  return (
    <div>
      <Account>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-semibold tracking-wide">Login Sessions</div>
            <div>
              <button className="rounded-md bg-blue-400 px-4 py-2 text-sm font-medium text-white duration-200 hover:bg-blue-500">
                View All
              </button>
            </div>
          </div>
          <hr className="dark:border-borderBlue" />
          <div className="py-4">
            <LoginSession />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-semibold tracking-wide">Logs</div>
            <div>
              <button className="flex items-center space-x-1 rounded-md bg-blue-100 px-4 py-2 text-xs font-medium text-blue-500 duration-200 hover:bg-blue-500 hover:text-white">
                <CloudDownloadIcon className="h-4 w-4" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
          <hr className="dark:border-borderBlue" />
          <div className="py-4 px-6">
            <LogsTable />
          </div>
        </div>
      </Account>
    </div>
  )
}

export default Logs
