import HeaderMenu from './HeaderMenu'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <HeaderTop />
      <div className="h-[1px] bg-gray-200"></div>
      <HeaderMenu />
    </div>
  )
}

export default Header
