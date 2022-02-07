import React from 'react'

const HeaderMenu = () => {
  return (
    <div className="hidden py-6 px-8 lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <ul className="flex flex-row items-center space-x-2 text-xs font-medium tracking-wider text-gray-500">
            <li>
              <div className="cursor-pointer rounded-md bg-gray-100/80 px-3 py-2 font-poppins">
                Dashboards
              </div>
            </li>
            <li>
              <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80">
                Crafted
              </div>
            </li>
            <li>
              <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80">
                Apps
              </div>
            </li>
            <li>
              <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80">
                Resources
              </div>
            </li>
            <li>
              <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80">
                Mega Menu
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="cursor-pointer rounded-md bg-green-400/20 px-3 py-2 text-xs font-medium text-green-500 transition-all duration-200 hover:bg-green-500/80 hover:text-gray-100">
            Docs & Components
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu
