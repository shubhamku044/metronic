import React, { useState } from 'react'
import Account from '../../Components/Account'
import Image from 'next/image'
import {
  InformationCircleIcon,
  PencilIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { modalDeactivateState } from '../../atoms/modalDeactivateAtom'
import DeactivateModal from '../../Components/DeactivateModal'

const Settings = () => {
  const [image, setImage] = useState<any>('/avatars/300-10.jpg')
  const [open, setOpen] = useRecoilState<boolean>(modalDeactivateState)

  const handleImageChange = (e: any) => {
    const selected = e.target.files[0]
    const ALLOWED_TYPES = ['image/png', 'image/jpg', 'image/jpeg']

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      console.log('Selected')
      const reader = new FileReader()

      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(selected)
    } else {
      console.log('Not Selected')
    }
  }

  return (
    <div>
      <Account>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
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
                  className="relative w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-1/4"
                >
                  <span>Avatar</span>
                  {/* <span className="absolute ml-1 text-xs text-red-500">*</span> */}
                </label>
                <div className="">
                  <div className="relative ml-10 h-28 w-28 rounded-md ring-2 ring-gray-300">
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="absolute -top-2 -right-2 hidden h-6 w-6"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="image">
                      <PencilIcon className="absolute -top-2 -right-2 h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-200" />
                    </label>
                    <XCircleIcon
                      onClick={() => setImage('/avatars/blank.png')}
                      className="absolute -bottom-2 -right-2 h-6 w-6 cursor-pointer text-gray-100"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="fname"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Full Name</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full flex-col space-x-0 space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <input
                    type="text"
                    id="fname"
                    placeholder="First Name"
                    required
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                  <input
                    type="text"
                    id="fname"
                    placeholder="Last Name"
                    required
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="company"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Company</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    required
                    placeholder="Company"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="contact"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Contact Phone</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    required
                    placeholder="Contact"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="companySite"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Company Site</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Company Website"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Country</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Country Name"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Language</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Choose Language"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div> */}
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Country & Language</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    required
                    id="fname"
                    placeholder="Choose Country"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                  <input
                    type="text"
                    required
                    id="fname"
                    placeholder="Choose Language"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Time Zone</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    required
                    id="fname"
                    placeholder="Chose Time Zone"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div> */}
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="country"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Time Zone & Currency</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    required
                    id="fname"
                    placeholder="Choose Time Zone"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                  <input
                    type="text"
                    required
                    id="fname"
                    placeholder="Choose Currency"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="communication"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Currency</span>
                  
                </label>
                <div className="flex w-full space-x-6">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Choose your Currency"
                    className="flex-1 rounded-md bg-blue-50 py-3 px-4 text-xs font-medium text-gray-700 outline-none ring-0 focus:bg-blue-100 focus:outline-offset-0 focus:outline-blue-300 dark:bg-darkBg dark:text-platfawmTextDark-1"
                  />
                </div>
              </div> */}
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-0">
                <label
                  htmlFor="communication"
                  className="w-1/2 text-xs font-medium text-gray-700 dark:text-gray-400 sm:w-2/5"
                >
                  <span>Communication</span>
                  <span className="absolute ml-1 text-xs text-red-500">*</span>
                </label>
                <div className="flex w-full justify-start space-x-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="phone"
                      id="phone"
                      className="h-4 w-4"
                    />
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="email"
                      id="email"
                      className="h-4 w-4"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
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
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="px-6 py-4">
            <div className="font-semibold tracking-wide">Sign-in Method</div>
          </div>
          <hr />
          <div className="px-6 py-4">
            <div className="space-y-6">
              <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                <div className="">
                  <div className="text-sm font-medium tracking-wide text-gray-900 dark:text-white">
                    Email Address
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    support@keenthemes.com
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    <button className="rounded-lg bg-blue-400 px-4 py-2 text-white duration-200 hover:bg-blue-500 hover:text-white">
                      Change Email
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                <div className="">
                  <div className="text-sm font-medium tracking-wide text-gray-900 dark:text-white">
                    Password
                  </div>
                  <div className="mt-1 text-xs text-gray-400">**********</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    <button className="rounded-lg bg-blue-400 px-4 py-2 text-white duration-200 hover:bg-blue-500 hover:text-white">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl rounded-lg border bg-gray-50 dark:border-borderBlue dark:bg-darkBg-sec">
          <div className="px-6 py-4">
            <div className="font-semibold tracking-wide">
              Deactivate Account
            </div>
          </div>
          <hr />
          <div className="px-6 py-4">
            <div className="flex items-center space-x-4 rounded-md border-2 border-dashed border-yellow-500 bg-yellow-100 p-4 dark:bg-yellow-200">
              <div>
                <InformationCircleIcon className="h-8 w-8 cursor-pointer text-yellow-500" />
              </div>
              <div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-black">
                    You Are Deactivating Your Account
                  </div>
                  <div className="text-xs text-gray-400">
                    For extra security, this requires you to confirm your email
                    or phone number when you reset yousignr password.
                  </div>
                </div>
                <div className="">
                  <Link href="#">
                    <a
                      target="_blank"
                      className="text-sm text-platfawmBlueLight-secondary"
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <input
                type="checkbox"
                name="deactivate"
                className="h-4 w-4"
                id="deactivate"
              />
              <label htmlFor="deactivate">
                I confirm my account deactivation
              </label>
            </div>
          </div>
          <hr className="border-borderBlue/30" />
          <div className="flex flex-row-reverse py-2 px-6">
            <div className="text-sm font-semibold">
              <button
                onClick={() => {
                  console.log(open)
                  setOpen(true)
                }}
                className="rounded-lg bg-red-400 px-4 py-2 text-white duration-200 hover:bg-red-500 hover:text-white"
              >
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
        <DeactivateModal />
      </Account>
    </div>
  )
}

export default Settings
