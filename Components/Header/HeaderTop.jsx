import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ChartBarIcon,
  MenuIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
} from '@heroicons/react/solid'

const HeaderTop = () => {
  const router = useRouter()

  return (
    <nav className="px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <MenuIcon className="block h-5 w-5 cursor-pointer text-gray-600 opacity-70 lg:hidden" />

          <div
            className="relative h-5 w-24 lg:h-9 lg:w-36"
            onClick={() => router.push('/')}
          >
            <Image
              src={`/logos/logo-demo11.svg`}
              objectFit="contain"
              layout="fill"
              className=""
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="headerBtn-container group flex border-gray-300">
            <SearchIcon className="headerBtn" />
            <input
              type="text"
              className="hidden bg-transparent px-4 text-xs font-medium tracking-wider text-gray-800 placeholder:text-gray-400 focus:outline-none sm:block"
              placeholder="Quick Search"
            />
          </div>
          <div className="headerBtn-container group">
            <ChartBarIcon className="headerBtn" />
          </div>
          <div className="headerBtn-container group">
            <SunIcon className="headerBtn" />
          </div>
          <div className="headerBtn-container group">
            <UserIcon className="headerBtn" />
          </div>
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md border bg-green-400 hover:bg-green-500 lg:h-[34px] lg:w-[34px]">
            <span className="text-sm font-semibold text-white lg:text-base">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderTop
