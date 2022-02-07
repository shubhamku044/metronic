import Image from 'next/image'

const Aside = () => {
  return (
    <div className="bg-[#F2C98A] lg:fixed lg:top-0 lg:left-0 lg:flex lg:min-h-screen lg:w-[30rem] lg:items-center lg:justify-center xl:w-[36rem]">
      <div className="">
        <div className="">
          <div className="space-y-8 py-8">
            <div className="flex justify-center">
              <Image
                src={`/logos/logo-2.svg`}
                width={80}
                height={52}
                objectFit="contain"
              />
            </div>
            <h1 className="flex justify-center text-3xl font-semibold text-[#986923]">
              Welcome to Metronic
            </h1>
            <p className="flex flex-col items-center font-medium text-[#986923]">
              <span>Discover Amazing Metronic</span>
              <span>with great build tools</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative h-32 w-32 lg:h-80 lg:w-80">
            <Image
              src={`/illustrations/sketchy-1/13.png`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
