import React from 'react'
import MultiStepAside from '../Components/multi-steps/MultiStepAside'
import Head from 'next/head'
import AccountType from '../Components/multi-steps/AccountType'

const MultiSteps = () => {
  return (
    <>
      <Head>
        <title>Platfawm - Sign In</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-darkBg">
        <div className="flex flex-col lg:flex-row">
          <div className="">
            <MultiStepAside />
          </div>
          <div className="w-full py-4">
            <AccountType />
          </div>
        </div>
      </div>
    </>
  )
}

export default MultiSteps
