import HeaderMenu from './HeaderMenu'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-darkBg">
      <HeaderTop />
      <div className="h-[1px] bg-gray-200 dark:bg-borderBlue"></div>
      <HeaderMenu />
    </div>
  )
}

export default Header
