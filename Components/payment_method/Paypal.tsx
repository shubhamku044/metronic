import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'

const Paypal = () => {
  return (
    <>
      <div>
        <p className="text-lg font-medium">My Paypal</p>
      </div>
      <div className="space-y-2 py-2">
        <p className="text-sm font-medium text-gray-500">
          To use PayPal as your payment method, you will need to make
          pre-payments each month before your bill is due.
        </p>
        <div className="flex max-w-xs cursor-pointer items-center justify-between rounded-md bg-blue-50 px-4 py-2 text-sm font-medium">
          <span>Select a option</span>
          <span>
            <ChevronDownIcon className="h-4" />
          </span>
        </div>
        <button className="rounded-lg bg-blue-400 px-4 py-2 text-sm text-white duration-200 hover:bg-blue-500 hover:text-white">
          Pay with Paypal
        </button>
      </div>
    </>
  )
}

export default Paypal
