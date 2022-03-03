import { useRecoilState } from 'recoil'
import { modalDeactivateState } from '../atoms/modalDeactivateAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const DeactivateModal = () => {
  const [open, setOpen] = useRecoilState<boolean>(modalDeactivateState)

  return (
    <>
      <Transition.Root appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90"
          onClose={setOpen}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen bg-black align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative my-8 inline-block w-full max-w-sm transform overflow-hidden rounded-md bg-gray-200 p-4 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex flex-col items-center pt-0 text-center text-xl font-semibold"
                >
                  <div className="inline border-b text-2xl">
                    Deactivate Account
                  </div>
                </Dialog.Title>
                <div className="mt-8 flex flex-col">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">
                      Please enter your name to confirm.
                    </p>
                    <input
                      type="text"
                      autoComplete="none"
                      placeholder="Enter your name"
                      className="w-full rounded bg-slate-300 px-4 py-1 text-base font-medium outline-none outline-1 outline-offset-0 placeholder:text-sm placeholder:font-normal placeholder:tracking-wide focus:outline-blue-500"
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setOpen(false)}
                        className="rounded bg-gray-300 px-3 py-2 text-xs font-medium duration-200 hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                      <button className="rounded bg-red-500 px-3 py-2 text-xs font-medium text-white duration-200 hover:bg-red-600 hover:text-white">
                        Deactivate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default DeactivateModal
