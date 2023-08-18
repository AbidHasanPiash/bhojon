'use client'
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import TableRow from "./TableRow";

export default function Report() {
    // Date relate
    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const currentDate = date.toLocaleString('en-US', options);

    const [selectedDate, setSelectedDate] = useState({ startDate:null, endDate:null }); 
    const handleValueChange = (newValue) => {
        setSelectedDate(newValue);
    } 
    const [Orders, setOrders] = useState([
      {id:1, table:3, status: 'active', waiter:'John', time:'11:24 AM', amount:350, items:['Bruschetta', 'Caprese Salad', 'Chicken Wings']},
      {id:2, table:5, status: 'complete', waiter:'Walle', time:'11:00 AM', amount:465, items:['Grilled Salmon', 'dring']},
      {id:3, table:1, status: 'active', waiter:'John', time:'10:30 AM', amount:180, items:['chicken', 'dring', 'Grilled Salmon']},
      {id:4, table:7, status: 'complete', waiter:'Mike', time:'10:12 AM', amount:290, items:['Chocolate Cake', 'Bruschetta']},
      {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
      {id:55, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    ])
  return (
    <div className="space-y-6">
        {/* Header */}
        <div className='flex items-center justify-between space-x-6 text-xl font-bold md:text-3xl'>
            <h1>Reports.</h1>
            <span className="input_layout2 w-full lg:w-fit">
                <Datepicker value={selectedDate}
                    primaryColor={"cyan"}
                    placeholder={"Select date"}
                    onChange={handleValueChange}
                    useRange={false} 
                    displayFormat={"DD-MM-YYYY"}
                    minDate={new Date("2023/08/05")} 
                    maxDate={new Date(currentDate)}
                    inputClassName="px-6 mr-8 outline-none p-0 bg-transparent text-gray-800 dark:text-gray-300 cursor-pointer select-none"   
                />
            </span>
        </div>
        {/* Table */}
        <table class="table-fixed w-full">
            <thead>
              <tr className='bg-cyan-200 dark:bg-cyan-800'>
                <th className='py-2 text-left pl-2 rounded-tl-lg w-16'>SN</th>
                <th className='py-2 text-left'>Date</th>
                <th className='py-2 text-left'>Created by</th>
                <th className='py-2 text-left'>Opening</th>
                <th className='py-2 text-left'>Daily Sales</th>
                <th className='py-2 text-left'>Closing</th>
                <th className='py-2 text-left'>Remarks</th>
                <th className='py-2 text-left rounded-tr-lg'>Action</th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((order, index)=>(
                <TableRow key={index} index={index} row={order} Orders={Orders}/>
              ))}
            </tbody>
          </table>
    </div>
  )
}
