import React from 'react'
import { ImCross } from "react-icons/im";

export default function ReceiptModal({closeReceiptModal}) {
  return (
    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-md flex items-center justify-center w-full h-full z-30`}>
      <div className="w-fit h-fit space-y-3 mx-6 p-4 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        {/* Modal Header */}
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-xl md:text-2xl'>Case Receipt</h1>
          <button
            onClick={closeReceiptModal}
            aria-label="Close Nav"
            className="h-10 w-10 flex items-center justify-center rounded-xl border text-gray-900 dark:text-gray-200 bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <ImCross/>
          </button>
        </div>
        {/* Modal Body */}
        <div>
          modal
        </div>
      </div>
    </div>
  )
}
