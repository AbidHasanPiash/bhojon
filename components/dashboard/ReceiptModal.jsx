"use client"
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { TbPrinter } from "react-icons/tb";

export default function ReceiptModal({closeReceiptModal}) {
  const Orders = [
    {id:2360005, table:7, totalPrice:2190, servedBy:'Shakil', time:'09:12 PM',
      items:[
        {name:'Bruschetta', quantity:2, price:420},
        {name:'Chicken Wings', quantity:1, price:150},
        {name:'Dim Sum', quantity:1, price:220},
        {name:'Pasta Carbonara', quantity:2, price:140},
      ]},
    {id:2360004, table:2, totalPrice:750, servedBy:'Rubel', time:'08:40 PM',
      items:[
        {name:'Chicken Dumpling', quantity:1, price:210},
        {name:'Kung Pao Tofu', quantity:2, price:340},
        {name:'Sushi', quantity:4, price:200}
      ]},
    {id:2360003, table:5, totalPrice:580, servedBy:'Abul', time:'08:17 PM',
      items:[
        {name:'Grilled Salmon', quantity:1, price:400},
        {name:'Pasta Carbonara', quantity:1, price:180},
      ]},
    {id:2360002, table:6, totalPrice:1440, servedBy:'Shakil', time:'07:46 PM',
      items:[
        {name:'Chicken Wings', quantity:1, price:340},
        {name:'Caprese Salad', quantity:2, price:200},
        {name:'Bruschetta', quantity:1, price:120},
        {name:'Chicken Dumpling', quantity:3, price:440},
        {name:'Chocolate Cake', quantity:3, price:140},
        {name:'Tiramisu', quantity:3, price:200},
      ]},
    {id:2360001, table:1, totalPrice:640, servedBy:'Abul', time:'06:40 PM',
      items:[
        {name:'Dim Sum', quantity:2, price:320},
        {name:'Sushi', quantity:2, price:240},
        {name:'Cheesecake', quantity:2, price:180}
      ]},
  ]
  const [vat, setVat] = useState(14);
  const [discount, setDiscount] = useState(0);
  const [extraCharge, setExtraCharge] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState('');
  const selectedOrderObj = Orders.find(order => order.id === parseInt(selectedOrder));
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
          <div className="flex items-center justify-between mt-6 space-x-10 rounded-xl border border-gray-300 p-2.5 dark:border-gray-700">
            <p className="w-full">Select a order</p>
            <select
              value={selectedOrder}
              onChange={(e)=>setSelectedOrder(e.target.value)}
              className="outline-none rounded-xl md:pr-40 border border-gray-300 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="">Select</option>
              {Orders.map((Order, index) => (
                <option key={index} value={Order.id}>
                  <span  className="">{Order.id} - {Order.table} - {Order.time} - {Order.servedBy}</span>
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between mt-6 space-x-2 rounded-xl border border-gray-300 p-2.5 dark:border-gray-700">
            <label> <span className="pl-1"> Vat %</span>
              <input type="number" step="1" value={vat} onChange={(e)=>setVat(e.target.value)}
                className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
              />
            </label>
            <label> <span className="pl-1">Discount %</span>
              <input type="number" step="1" value={discount} onChange={(e)=>setDiscount(e.target.value)}
                className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
              />
            </label>
            <label> <span className="pl-1">Extra charge</span>
              <input type="number" step="1" value={extraCharge} onChange={(e)=>setExtraCharge(e.target.value)}
                className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
              />
            </label>
          </div>
          <div className="rounded-xl border mt-6 border-gray-300 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700">
            <table className='table-auto w-full'>
              <caption className="caption-top text-xs mb-4">Order summary</caption>
              <thead className="border-b mb-5">
                <tr className="text-left font-bold h-10"> <th>Item Name</th> <th>Quantity</th> <th>Price</th> </tr>
              </thead>
              <tbody>
                {selectedOrderObj?.items.map((item, index) => (
                  <tr key={index} className="h-8">
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price} tk</td>
                  </tr>
                ))}
                <tr className="border-t font-bold h-10"><td> </td> <td className="text-right">Total = </td> <td>{selectedOrderObj?.totalPrice} tk</td></tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-6 rounded-xl border border-gray-300 p-2.5 dark:border-gray-700">
            <h1>Complete order and Print</h1>
            <button
              aria-label="save"
              className="h-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
            >
              <span className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white flex items-center justify-center space-x-3 px-3">
                <TbPrinter size={22}/>
                <span>Print</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
