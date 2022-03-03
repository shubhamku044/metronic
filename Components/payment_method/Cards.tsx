import React from 'react'
import Image from 'next/image'

const Card = ({
  holderName,
  primary,
  logoSrc,
  cardNumber,
  expiryDate,
}: any) => {
  return (
    <div className="rounded-md border border-dashed bg-blue-50 px-4 py-4 dark:bg-darkBg-tert">
      <div className="flex items-center space-x-2 text-sm font-semibold">
        <div>{holderName}</div>
        {primary && (
          <div className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-[#00a2ff]">
            Primary
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-20">
            <Image
              src={'/card-logos/visa.svg'}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">
              {cardNumber}
            </div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-300">
              Card expires at {expiryDate}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold">
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
              Delete
            </button>
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <>
      <div>
        <p className="text-lg font-medium">My Cards</p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <Card
            holderName={'Marcus Morris'}
            primary={true}
            logoSrc={'/card-logos/visa.svg'}
            cardNumber={'Visa **** 1679'}
            expiryDate={'09/24'}
          />
        </div>
        <div>
          <Card
            holderName={'Jacob Holder'}
            primary={false}
            logoSrc={'/card-logos/visa.svg'}
            cardNumber={'Mastercard **** 2040'}
            expiryDate={'10/22'}
          />
        </div>
        <div>
          <Card
            holderName={'Jhon Larson'}
            primary={false}
            logoSrc={'/card-logos/visa.svg'}
            cardNumber={'Mastercard **** 1290'}
            expiryDate={'03/23'}
          />
        </div>
        <div className="rounded-md border border-dashed bg-blue-100/50 px-4 py-4 dark:bg-darkBg-tert/30">
          <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
            <div className="max-w-xs">
              <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Important Note!
              </p>
              <p className="mt-1 text-xs font-light">
                Please carefully read Product Termsadding your new payment card
              </p>
            </div>
            <div>
              <button className="rounded-lg bg-blue-400 px-4 py-2 text-sm text-white duration-200 hover:bg-blue-500 hover:text-white">
                Add Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
