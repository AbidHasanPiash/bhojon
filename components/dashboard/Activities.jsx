"use client"
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Activities() {
  const data = {
    labels: ['Fastfood', 'Chinese', 'Drinks', 'Rice'],
    datasets: [
      {
        label: 'Food Categoris',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 4,
        borderColor: ['rgb(31 41 55)']
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    }
  };
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="w-full h-60 flex items-center justify-center">
          <Doughnut data={data}  options={options}/>
        </div>
        <div>
          <h5 className="text-center text-xl text-gray-600 dark:text-gray-300">
            Todays Activities
          </h5>
          <div className="mt-2 flex justify-center gap-4">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
              $23,988
            </h3>
          </div>
        </div>
        <table className="w-full text-gray-600 dark:text-gray-200">
          <tbody>
            <tr>
              <td className="py-2">Total orders</td>
              <td className="text-gray-500">22</td>
            </tr>
            <tr>
              <td className="py-2">Served</td>
              <td className="text-gray-500">19</td>
            </tr>
            <tr>
              <td className="py-2">Pending</td>
              <td className="text-gray-500">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
