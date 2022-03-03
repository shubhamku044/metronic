import { useRouter } from 'next/router'
import React from 'react'

const Toolbar = ({ title, needPath, pathLocation, pathName, subPath }: any) => {
  const router = useRouter()
  return (
    <div className="mx-auto max-w-6xl py-5 px-4">
      <div className="">
        <div className="space-y-2">
          <h5 className="text-sm font-semibold tracking-wide text-gray-800 dark:text-platfawmTextDark-2 md:text-base">
            {title}
          </h5>
          {needPath && (
            <>
              <div className="flex items-center space-x-2 text-xs font-semibold">
                <div
                  onClick={() => router.push(pathLocation)}
                  className="cursor-pointer text-gray-500 duration-200 hover:text-platfawmBlueLight-primary"
                >
                  {pathName}
                </div>
                <ul className="flex items-center space-x-2 text-xs font-medium text-gray-400">
                  {subPath.map((path: string, _: Number) => (
                    <li className="flex items-center space-x-2" key={path}>
                      <span className="block h-1 w-1 rounded-full bg-gray-500"></span>
                      <span>{path}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Toolbar
