import React from 'react'
import Account from '../../Components/Account'

const Settings = () => {
  return (
    <div>
      <Account>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-semibold tracking-wide">Profile Details</div>
            {/* <div>
              <button
                onClick={() => {
                  router.push('/account/settings')
                }}
                className="rounded-md bg-blue-400 px-4 py-2 text-sm font-medium text-white duration-200 hover:bg-blue-500"
              >
                Edit Profile
              </button>
            </div> */}
          </div>
          <hr />
          <div className="px-6 py-4">
            <div className="space-y-6">
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="fname"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Full Name
                </label>
                <div className="flex w-full flex-col space-x-0 space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <input
                    type="text"
                    id="fname"
                    placeholder="First Name"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                  <input
                    type="text"
                    id="fname"
                    placeholder="Last Name"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="company"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Company
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Company"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="contact"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Contact Phone
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Contact"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="companySite"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Company Site
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Company Website"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Country
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Country Name"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Language
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Choose Language"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Time Zone
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Chose Time Zone"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="communication"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Currency
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Choose your Currency"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="communication"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Communication
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="allowChanges"
                  className="w-1/2 text-xs font-medium text-gray-700 sm:w-2/5"
                >
                  Allow Changes
                </label>
                <div className="">
                  <input
                    type="checkbox"
                    id="fname"
                    className="h-4 w-4 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 sm:-ml-20 lg:-ml-28"
                  />
                </div>
              </div>
              <hr />
              <div className="flex flex-row-reverse items-center">
                <div></div>
                <div className="space-x-2 text-sm">
                  <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
                    Discard
                  </button>
                  <button className="rounded-lg bg-blue-400 px-4 py-2 text-white duration-200 hover:bg-blue-500 hover:text-white">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Account>
    </div>
  )
}

export default Settings
