"use client"
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement);

export default function ComparedToLastDay() {
  const data = {
    labels: ["10", "12", "14", "16", "18", "20", "22", "24"],
    datasets: [
      {
        label: "Today",
        data: [1, 5, 8, 6, 4, 6, 4, 4],
        fill: false,
        borderColor: "rgb(217 70 239)",
        pointBorderColor: "rgb(217 70 239)",
        pointBorderWidth: 2,
        tension: 0.5
      },
      {
        label: "Yesterday",
        data: [1, 2, 3, 5, 5, 7, 5, 3],
        fill: true,
        backgroundColor: "transparent",
        borderColor: "rgb(56 189 248)",
        pointBorderColor: "rgb(56 189 248)",
        pointBorderWidth: 2,
        tension: 0.5
      }
    ]
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
    },
    scales:{
      x:{
        grid: {
          display: false
        }
      },
      y:{
        min: 0,
        max: 10,
        ticks:{
          stepSize:2,
          callback: (value) => value + ' K'
        }
      }
    }
  };
  return (
    <div>
      <div className="h-full group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <h5 className="text-xl text-gray-700 dark:text-gray-300 space-x-5">
          <span><span className="text-fuchsia-500">●</span> Today</span>
          <span><span className="text-sky-500">●</span> Yesterday</span>
        </h5>
        <div className="my-8">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
            45%
          </h1>
          <span className="text-gray-500 dark:text-gray-400">
            Compared to Yesterday $3,988 <span className="text-green-500">▲</span>
          </span>
        </div>

        <div className="w-full">
          <Line data={data} options={options}/>
        </div>

        <table className="mt-6 -mb-2 w-full text-gray-600">
          <tbody>
            <tr className="dark:text-gray-300">
              <td className="py-2">Yesterday at this time</td>
              <td className="text-gray-500">896</td>
            </tr>
            <tr className="dark:text-gray-300">
              <td className="py-2">Today at this time</td>
              <td className="text-gray-500">1200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
