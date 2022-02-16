import React from 'react'

const LoginSession = () => {
  return (
    <>
      <table className="block w-full overflow-x-auto text-left md:inline-table">
        <thead className="bg-gray-200 text-sm tracking-wider dark:bg-darkBg">
          <tr className="">
            <th className="min-w-[15.625rem] py-3 pl-6 font-medium">
              Location
            </th>
            <th className="min-w-[6.25rem] py-3 font-medium">Status</th>
            <th className="min-w-[9.375rem] py-3 font-medium">Device</th>
            <th className="min-w-[9.375rem] py-3 font-medium">IP Address</th>
            <th className="min-w-[9.375rem] py-3 font-medium">Time</th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600">
          <tr className="border-b dark:border-borderBlue">
            <td className="py-3 pl-6">USA(5)</td>
            <td className="">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                OK
              </span>
            </td>
            <td className="">Chrome - Windows</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
          </tr>
          <tr className="border-b dark:border-borderBlue">
            <td className="py-3 pl-6">USA(5)</td>
            <td className="">
              <span className="w-fit rounded-md bg-red-50 px-2 py-1 text-red-400">
                ERR
              </span>
            </td>
            <td className="">Chrome - Windows</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
          </tr>
          <tr className="border-b dark:border-borderBlue">
            <td className="py-3 pl-6">USA(5)</td>
            <td className="">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                OK
              </span>
            </td>
            <td className="">Chrome - Windows</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
          </tr>
          <tr className="border-b dark:border-borderBlue">
            <td className="py-3 pl-6">USA(5)</td>
            <td className="">
              <span className="w-fit rounded-md bg-yellow-50 px-2 py-1 text-yellow-400">
                WRN
              </span>
            </td>
            <td className="">Chrome - Windows</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
          </tr>
          <tr className="">
            <td className="py-3 pl-6">USA(5)</td>
            <td className="">
              <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                OK
              </span>
            </td>
            <td className="">Chrome - Windows</td>
            <td className="">236.125.56.78</td>
            <td className="">2 mins ago</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default LoginSession
