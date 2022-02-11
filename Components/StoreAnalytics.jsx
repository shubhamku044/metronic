import TotalOnlineSales from './storeAnalytics/TotalOnlineSales'
import TotalOnlineVisitors from './storeAnalytics/TotalOnlineVisitors'

const StoreAnalytics = () => {
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
        <div className="bg-gray-300">1</div>
        <div className="bg-gray-300">2</div>
        <div className="bg-gray-300 lg:col-span-2 xl:col-span-1">3</div>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="bg-gray-300">1</div>
        <div className="bg-gray-300 lg:col-span-2">2</div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-gray-300">1</div>
        <div className="bg-gray-300">2</div>
        <div className="col-span-1 bg-gray-300 md:col-span-2 xl:col-span-1">
          3
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="bg-gray-300">1</div>
        <div className="bg-gray-300 md:col-span-2">2</div>
      </div>
    </div>
  )
}

export default StoreAnalytics
