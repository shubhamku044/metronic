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
              <div className="flex items-center">
                <label
                  htmlFor="fname"
                  className="w-1/2 text-xs font-medium text-gray-400 sm:w-1/3"
                >
                  Full Name
                </label>
                <div id="fname" className="text-xs font-semibold text-gray-700">
                  Phoebe
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="company"
                  className="w-1/2 text-xs font-medium text-gray-400 sm:w-1/3"
                >
                  Company
                </label>
                <div id="company" className="text-xs font-medium text-gray-700">
                  Keenthemes
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="contact"
                  className="w-1/2 text-xs font-medium text-gray-400 sm:w-1/3"
                >
                  Contact Phone
                </label>
                <div
                  id="contact"
                  className="text-xs font-semibold text-gray-700"
                >
                  044 3276 454 935
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="companySite"
                  className="w-1/2 text-xs font-medium text-gray-400 sm:w-1/3"
                >
                  Company Site
                </label>
                <div
                  id="companySite"
                  className="text-xs font-semibold text-gray-700"
                >
                  keenthemes.com
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-400 sm:w-1/3"
                >
                  Country
                </label>
                <div
                  id="country"
                  className="text-xs font-semibold text-gray-700"
                >
                  Germany
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="communication"
                  className="w-1/2 text-xs font-medium text-gray-400 sm:w-1/3"
                >
                  Communication
                </label>
                <div
                  id="communication"
                  className="text-xs font-semibold text-gray-700"
                >
                  Email, Phone
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="allowChanges"
                  className="w-1/2 text-xs font-medium text-gray-400 sm:w-1/3"
                >
                  Allow Changes
                </label>
                <div
                  id="allowChanges"
                  className="text-xs font-semibold text-gray-700"
                >
                  Yes
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
