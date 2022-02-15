import { DuplicateIcon } from '@heroicons/react/outline'
import React from 'react'

const LicenseUsage = () => {
  return (
    <>
      <table className="block w-full overflow-x-auto text-left lg:inline-table">
        <thead className="bg-gray-200 text-sm tracking-wider">
          <tr className="">
            <th className="min-w-[9.375rem] py-3 pl-6 font-medium">Status</th>
            <th className="min-w-[16.25rem] py-3 font-medium">Operator</th>
            <th className="min-w-[9.375rem] py-3 font-medium">IP Address</th>
            <th className="min-w-[9.375rem] py-3 font-medium">Created</th>
            <th className="min-w-[12.375rem] py-3 font-medium">API Keys</th>
            <th className="min-w-[9.375rem] py-3 font-medium"> </th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600">
          <tr className="border-b">
            <td className="py-3 pl-6">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                License
              </span>
            </td>
            <td className="">DSI: Workstation 2</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
            <td className="">fftt456765gjkkjhi8306767</td>
            <td className="">
              <DuplicateIcon className="h-4 w-4 cursor-pointer text-gray-500" />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 pl-6">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                License
              </span>
            </td>
            <td className="">DSI: Workstation 2</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
            <td className="">fftt456765gjkkjhi8306767</td>
            <td className="">
              <DuplicateIcon className="h-4 w-4 cursor-pointer text-gray-500" />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 pl-6">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                License
              </span>
            </td>
            <td className="">DSI: Workstation 2</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
            <td className="">fftt456765gjkkjhi8306767</td>
            <td className="">
              <DuplicateIcon className="h-4 w-4 cursor-pointer text-gray-500" />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 pl-6">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                License
              </span>
            </td>
            <td className="">DSI: Workstation 2</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
            <td className="">fftt456765gjkkjhi8306767</td>
            <td className="">
              <DuplicateIcon className="h-4 w-4 cursor-pointer text-gray-500" />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 pl-6">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                License
              </span>
            </td>
            <td className="">DSI: Workstation 2</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
            <td className="">fftt456765gjkkjhi8306767</td>
            <td className="">
              <DuplicateIcon className="h-4 w-4 cursor-pointer text-gray-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default LicenseUsage
