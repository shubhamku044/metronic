const Address = ({ AddressName, primary, line1, line2, line3 }: any) => {
  return (
    <div className="rounded-md border border-dashed bg-blue-50 px-4 py-4 dark:bg-darkBg-tert">
      <div className="flex items-center space-x-2 text-sm font-semibold">
        <div>{AddressName}</div>
        {primary && (
          <div className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-[#00a2ff]">
            Primary
          </div>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-sm font-normal text-gray-600 dark:text-gray-300">
          {line1} <br />
          {line2}
          <br />
          {line3}
        </div>
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold">
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
              Delete
            </button>
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-gray-800">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const BillingAddress = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <Address
            AddressName="Address1"
            primary={true}
            line1="Ap #285-7193 Ullamcorper Avenue"
            line2={'Amesbury HI 93373'}
            line3="US"
          />
        </div>
        <div>
          <Address
            AddressName="Address2"
            primary={false}
            line1="Ap #285-7193 Ullamcorper Avenue"
            line2={'Amesbury HI 93373'}
            line3="US"
          />
        </div>
        <div>
          <Address
            AddressName="Address3"
            primary={false}
            line1="Ap #285-7193 Ullamcorper Avenue"
            line2={'Amesbury HI 93373'}
            line3="US"
          />
        </div>
        <div className="w-full rounded-md border border-dashed bg-blue-100/50 px-4 py-4 dark:bg-darkBg-tert/30">
          <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
            <div className="max-w-xs">
              <p className="text-base font-semibold text-gray-900 dark:text-gray-200">
                Important Note!
              </p>
              <p className="mt-1 text-xs font-light">
                Writing headlines for blog posts is much science and probably
                cool audience
              </p>
            </div>
            <div>
              <button className="rounded-lg bg-blue-400 px-4 py-2 text-sm text-white duration-200 hover:bg-blue-500 hover:text-white">
                Add Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillingAddress
