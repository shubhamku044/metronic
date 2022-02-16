import React from 'react'

const BillingHistory = () => {
  return (
    <>
      <table className="block w-full overflow-x-auto text-left sm:inline-table">
        <thead className="bg-gray-200 text-sm tracking-wider dark:bg-darkBg">
          <tr className="">
            <th className="min-w-[9.375rem] py-3 pl-6 font-medium">Date</th>
            <th className="min-w-[12.5rem] py-3 font-medium">Description</th>
            <th className="min-w-[6.25rem] py-3 font-medium">Amount</th>
            <th className="min-w-[6.25rem] py-3 font-medium">Invoice</th>
            <th className="min-w-[6.25rem] py-3 font-medium"> </th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600 dark:text-platfawmBlueLight-1">
          <tr className="border-b dark:border-b-borderBlue">
            <td className="py-3 pl-6">Nov 01, 2021</td>
            <td className="">
              <span className="text-blue-400">Billing for Ocrober 2022</span>
            </td>
            <td className="">$123.79</td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                PDF
              </button>
            </td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                View
              </button>
            </td>
          </tr>
          <tr className="border-b dark:border-b-borderBlue">
            <td className="py-3 pl-6">Nov 01, 2021</td>
            <td className="">
              <span className="text-blue-400">Billing for Ocrober 2022</span>
            </td>
            <td className="">$123.79</td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                PDF
              </button>
            </td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                View
              </button>
            </td>
          </tr>
          <tr className="border-b dark:border-b-borderBlue">
            <td className="py-3 pl-6">Nov 01, 2021</td>
            <td className="">
              <span className="text-blue-400">Billing for Ocrober 2022</span>
            </td>
            <td className="">$123.79</td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                PDF
              </button>
            </td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                View
              </button>
            </td>
          </tr>
          <tr className="border-b dark:border-b-borderBlue">
            <td className="py-3 pl-6">Nov 01, 2021</td>
            <td className="">
              <span className="text-blue-400">Billing for Ocrober 2022</span>
            </td>
            <td className="">$123.79</td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                PDF
              </button>
            </td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                View
              </button>
            </td>
          </tr>
          <tr className="border-b dark:border-b-borderBlue">
            <td className="py-3 pl-6">Nov 01, 2021</td>
            <td className="">
              <span className="text-blue-400">Billing for Ocrober 2022</span>
            </td>
            <td className="">$123.79</td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                PDF
              </button>
            </td>
            <td className="">
              <button className="w-fit rounded-md bg-blue-50 px-2 py-1 text-blue-400">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default BillingHistory
