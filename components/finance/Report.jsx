'use client'
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import TableRow from "./TableRow";

export default function Report() {
    // Date relate
    const date = new Date();
    const currentDate = date.toISOString().split('T')[0];

    const [selectedDate, setSelectedDate] = useState({ startDate:null, endDate:null }); 
    const handleValueChange = (newValue) => {
        setSelectedDate(newValue);
    } 
    const [reports, setReports] = useState([
      {id:1, date:'2023-08-19', opening: 500, sales:246, expence:180, closing:566, remarks:'N/A'},
      {id:1, date:'2023-08-18', opening: 500, sales:246, expence:180, closing:566, remarks:'N/A'},
      {id:1, date:'2023-08-17', opening: 500, sales:246, expence:180, closing:566, remarks:'N/A'},
      {id:1, date:'2023-08-16', opening: 500, sales:246, expence:180, closing:566, remarks:'N/A'},
      {id:1, date:'2023-08-15', opening: 500, sales:246, expence:180, closing:566, remarks:'N/A'},
      {id:1, date:'2023-08-14', opening: 500, sales:246, expence:180, closing:566, remarks:'N/A'},
    ]);
    const filtered = reports.filter(report => report.date >= selectedDate.startDate && report.date <= selectedDate.endDate);
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
                    //displayFormat={"DD-MM-YYYY"}
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
                <th className='py-2 text-left'>Opening</th>
                <th className='py-2 text-left'>Sales</th>
                <th className='py-2 text-left'>Expence</th>
                <th className='py-2 text-left'>Closing</th>
                <th className='py-2 text-left'>Remarks</th>
                <th className='py-2 text-left rounded-tr-lg'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order, index)=>(
                <TableRow key={index} index={index} row={order} reports={reports}/>
              ))}
            </tbody>
          </table>
    </div>
  )
}
