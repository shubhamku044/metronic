import TotalOnlineSales from './storeAnalytics/TotalOnlineSales'
import TotalOnlineVisitors from './storeAnalytics/TotalOnlineVisitors'

const StoreAnalytics = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="">
          <TotalOnlineSales />
        </div>
        <div className="">
          <TotalOnlineVisitors />
        </div>
        <div className="bg-green-300 sm:col-span-2">Map</div>
      </div>
    </div>
  )
}

export default StoreAnalytics
