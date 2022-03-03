import Image from 'next/image'

const Profile = ({ name, occupation, imgSrc, earnings, tasks, sales }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-md border bg-slate-100 py-8 dark:border-darkBg-tert dark:bg-darkBg-sec">
      <div className="relative h-14 w-14">
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs font-medium text-gray-400">{occupation}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="rounded-md border border-dashed bg-slate-50 px-2 py-1 dark:bg-darkBg-sec">
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            ${earnings}
          </div>
          <div className="text-xs font-semibold text-gray-400">Earnings</div>
        </div>
        <div className="rounded-md border border-dashed bg-slate-50 px-2 py-1 dark:bg-darkBg-sec">
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            ${tasks}
          </div>
          <div className="text-xs font-semibold text-gray-400">Tasks</div>
        </div>
        <div className="rounded-md border border-dashed bg-slate-50 px-2 py-1 dark:bg-darkBg-sec">
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            ${sales}
          </div>
          <div className="text-xs font-semibold text-gray-400">Sales</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
