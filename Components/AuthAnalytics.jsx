import TotalOnlineSales from './storeAnalytics/TotalOnlineSales'
import TotalOnlineVisitors from './storeAnalytics/TotalOnlineVisitors'

const AuthAnalytics = () => {
  return (
    <div className="space-y-8 py-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="">
          <TotalOnlineSales />
        </div>
        <div className="">
          <TotalOnlineVisitors />
        </div>
        <div className="flex min-h-[20rem] items-center justify-center bg-green-300 text-5xl font-bold text-gray-900 sm:col-span-2">
          Map
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold">
          1
        </div>
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold">
          2
        </div>
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold lg:col-span-2 xl:col-span-1">
          3
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold">
          1
        </div>
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold lg:col-span-2">
          2
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold">
          1
        </div>
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold">
          2
        </div>
        <div className="col-span-1 flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold md:col-span-2 xl:col-span-1">
          3
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold">
          1
        </div>
        <div className="flex items-center justify-center bg-gray-300 py-8 text-lg font-semibold md:col-span-2">
          2
        </div>
      </div>
    </div>
  )
}

export default AuthAnalytics
