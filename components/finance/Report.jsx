'use client'
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

export default function Report() {
    // Date relate
    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const currentDate = date.toLocaleString('en-US', options);
    const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 
    
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
  return (
    <div>
        {/* Header */}
        <div className='flex items-center justify-between space-x-6 text-xl font-bold md:text-3xl'>
            <h1>Reports.</h1>
            <span className="input_layout2 w-full lg:w-fit">
                <Datepicker value={value}
                    primaryColor={"cyan"}
                    placeholder={"Select date"}
                    onChange={handleValueChange}
                    useRange={false} 
                    displayFormat={"DD-MM-YYYY"}
                    minDate={new Date("2023/08/05")} 
                    maxDate={new Date(currentDate)}
                    inputClassName="px-6 mr-8 outline-none p-0 bg-transparent text-gray-800 dark:text-gray-300"   
                />
            </span> 
        </div>
    </div>
  )
}
