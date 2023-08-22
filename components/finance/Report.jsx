'use client'
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import ReportRow from "./ReportRow";

export default function Report() {
    // Date relate
    const date = new Date();
    const currentDate = date.toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState({ startDate:null, endDate:null }); 
    const handleValueChange = (newValue) => {setSelectedDate(newValue);} 
    const [reports, setReports] = useState([
      {id:1, date:'2023-08-19', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-18', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-17', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-16', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-15', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-14', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-13', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-12', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-11', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-10', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-09', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-08', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-07', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-06', opening: 500, sales:246, expence:180, closing:566},
      {id:1, date:'2023-08-05', opening: 500, sales:246, expence:180, closing:566},
    ]);
    let filteredReports = reports;
    if (selectedDate.startDate !== null && selectedDate.endDate !== null) {
      filteredReports = reports.filter(
        (report) =>
          report.date >= selectedDate.startDate &&
          report.date <= selectedDate.endDate
      );
    }
  return (
    <div className="container_layout2 space-y-6">
        {/* Header */}
        <div className='lg:flex items-center justify-between space-y-3 lg:space-x-6 text-xl font-bold md:text-3xl'>
            <h1>Reports.</h1>
            <div className="input_layout lg:w-fit">
                <Datepicker value={selectedDate}
                    primaryColor={"cyan"}
                    placeholder={"Select date"}
                    onChange={handleValueChange}
                    useRange={false} 
                    //displayFormat={"DD-MM-YYYY"}
                    minDate={new Date("2023/08/05")} 
                    maxDate={new Date(currentDate)}
                    inputClassName="lg:px-6 lg:mr-8 outline-none bg-transparent text-gray-800 dark:text-gray-300 cursor-pointer select-none"   
                />
            </div>
        </div>
        {/* Table */}
        <table class="table-fixed w-full">
            <thead>
              <tr className='bg-cyan-200 dark:bg-cyan-800'>
                <th className='py-2 text-left pl-2 rounded-tl-lg w-16'>SN</th>
                <th className='py-2 text-left'>Date</th>
                <th className='py-2 text-left hidden md:table-cell'>Opening</th>
                <th className='py-2 text-left hidden md:table-cell'>Sales</th>
                <th className='py-2 text-left hidden md:table-cell'>Expence</th>
                <th className='py-2 text-left hidden md:table-cell'>Closing</th>
                <th className='py-2 text-left rounded-tr-lg'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((order, index)=>(
                <ReportRow key={index} index={index} row={order} reports={reports}/>
              ))}
            </tbody>
          </table>
    </div>
  )
}
