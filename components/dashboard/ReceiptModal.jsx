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
  const [customerName, setCustomerName] = useState('');
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('');
  const selectedOrderObj = Orders.find(order => order.id === parseInt(selectedOrder));
  return (
    <div className="modal_container">
      <div className="modal_body">
        {/* Modal Header */}
        <div className='modal_header'>
          <h1 className='text-lg md:text-xl'>Case Receipt</h1>
          <button onClick={closeReceiptModal} className="btn_layout_icon" >
            <span className="btn_icon"><ImCross/></span>
          </button>
        </div>
        {/* Modal Body */}
        <div>
          <div className="modal_body_element">
            <div className="flex items-center justify-between space-x-10 ">
              <p className="w-full">Select a order</p>
              <select value={selectedOrder} onChange={(e)=>setSelectedOrder(e.target.value)} className="select_layout">
                <option value="">Select</option>
                {Orders.map((Order, index) => (
                  <option key={index} value={Order.id}>
                    <span  className="">{Order.id} - {Order.table} - {Order.time} - {Order.servedBy}</span>
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-2 mt-3">
              <label> <span className="pl-1"> Vat %</span>
                <input type="number" step="1" value={vat} onChange={(e)=>setVat(e.target.value)}
                  className="input_lauout"
                />
              </label>
              <label> <span className="pl-1">Discount %</span>
                <input type="number" step="1" value={discount} onChange={(e)=>setDiscount(e.target.value)}
                  className="input_lauout"
                />
              </label>
              <label> <span className="pl-1">Extra charge</span>
                <input type="number" step="1" value={extraCharge} onChange={(e)=>setExtraCharge(e.target.value)}
                  className="input_lauout"
                />
              </label>
            </div>
            <div className="mt-3">
              <div className="p-1.5">
                <h1>Customer details</h1>
              </div>
              <div className="flex items-center justify-between space-x-2">
                <input type="text" placeholder="Name" value={customerName} onChange={(e)=>setCustomerName(e.target.value)}
                  className="input_lauout"
                />
                <input type="text" placeholder="Phone Number" value={customerPhoneNumber} onChange={(e)=>setCustomerPhoneNumber(e.target.value)}
                  className="input_lauout"
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl border mt-6 border-gray-300 p-2.5 dark:bg-gray-900 dark:border-gray-700">
            <table className='table-auto w-full'>
              <caption className="caption-top text-xs mb-4">Order summary</caption>
              <thead className="border-b border-dashed mb-5">
                <tr className="text-left font-bold"> <th>Item Name</th> <th>Quantity</th> <th>Price (tk)</th> </tr>
              </thead>
              <tbody>
                {selectedOrderObj?.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
                {selectedOrder && <tr className="border-t border-dashed"><td> </td> <td className="text-right">Total = </td> <td>{selectedOrderObj?.totalPrice}</td></tr>}
                {selectedOrder && vat > 0 && <tr><td> </td> <td className="text-right">Vat = </td> <td>{(selectedOrderObj?.totalPrice*vat)/100}</td></tr>}
                {discount > 0 && <tr><td> </td> <td className="text-right">Discount = </td> <td>{(selectedOrderObj?.totalPrice*discount)/100}</td></tr>}
                {extraCharge > 0 && <tr><td> </td> <td className="text-right">Extra Charge = </td> <td>{extraCharge}</td></tr>}
                {selectedOrder && <tr className="border-t border-dashed h-10"><td> </td> <td className="text-right">Total Payable = </td> 
                  <td>{Math.floor(selectedOrderObj?.totalPrice + ((selectedOrderObj?.totalPrice*vat)/100) - ((selectedOrderObj?.totalPrice*discount)/100) + extraCharge)} tk</td>
                </tr>}
              </tbody>
            </table>
          </div>
          <div className="modal_body_element flex items-center justify-between">
            <h1>Complete order and Print</h1>
            <button className="btn_layout_text">
              <span className="btn_text"> <TbPrinter size={22}/> <span>Print</span> </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
