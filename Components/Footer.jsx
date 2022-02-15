import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="mx-auto max-w-6xl py-4 px-4">
      <div className="flex flex-col-reverse items-center md:flex-row  md:justify-between">
        <div className="flex space-x-2 text-sm text-gray-700">
          {/* <span>2022</span> */}
          <span className="font-light tracking-wide">© 2022 Platfawm LLC</span>
        </div>
        <div>
          <ul className="flex items-center space-x-2 text-xs text-gray-500">
            <li>
              <Link href="#">
                <a target="_blank">About</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a target="_blank">Support</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a target="_blank">Privacy policy</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
