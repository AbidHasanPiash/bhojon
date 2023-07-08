"use client"
import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function ReceiptModal({closeReceiptModal}) {
  const [selectedOrder, setSelectedOrder] = useState('');
  const Orders = [
    {id:2360005, table:7},
    {id:2360004, table:2},
    {id:2360003, table:5},
    {id:2360002, table:6},
    {id:2360001, table:1},
  ]
  return (
    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-md flex items-center justify-center w-full h-full z-30`}>
      <div className="min-w-fit h-fit space-y-3 mx-6 p-4 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        {/* Modal Header */}
        <div className='w-full flex items-center justify-between space-x-10'>
          <h1 className='text-lg md:text-xl'>Case Receipt</h1>
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
          <div className="flex items-center justify-between mt-6 space-x-10">
            <p className="w-full">Select a order</p>
            <select
              value={selectedOrder}
              onChange={(e)=>setSelectedOrder(e.target.value)}
              className="outline-none rounded-xl md:pr-40 border border-gray-300 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="">Manual</option>
              {Orders.map((Order, index) => (
                <option key={index} value={Order.id}>
                  <span  className="">{Order.id} - {Order.table}</span>
                </option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border mt-6 border-gray-300 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700">
            <table className='table-auto w-full text-gray-800 dark:text-gray-300'>
              <caption className="caption-top text-xs mb-4">Order summary</caption>
              <thead className="border-b mb-5">
                <tr className="text-left font-bold"> <th>Item Name</th> <th>Quantity</th> <th>Price</th> </tr>
              </thead>
              <tbody>
                <tr><td>Today</td> <td>1</td> <td>50 tk</td></tr>
                <tr><td>Today</td> <td>2</td> <td>60 tk</td></tr>
                <tr><td>Today</td> <td>1</td> <td>80 tk</td></tr>
                <tr><td>Today</td> <td>1</td> <td>55 tk</td></tr>
                <tr><td>week</td> <td>3</td> <td>30 tk</td></tr>
                <tr className="border-t"><td> </td> <td>Total</td> <td>275 tk</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
