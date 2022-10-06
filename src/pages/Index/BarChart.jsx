import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
//   import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = () => {

    

    const options={
        
        
        plugins: {
          legend: {
            display: false
          },
          
        },
        scales: {
            x: {
              grid: {
                display: false,
                maxBarThickness: 1
              }
            },
            y: {
              grid: {
                display: true
              }
            }
          },
         
      }
    

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const data = {
        labels,
        datasets:[
             {
                label:'success',
                data: labels.map(()=> Math.floor(Math.random() * 120)),
                backgroundColor: "blue",
                maxBarThickness:'5',
                maintainAspectRatio: false,
             },
             {
                label:'pending',
                data: labels.map(()=> Math.floor(Math.random() * 120)),
                backgroundColor: "#ee335e",
                maxBarThickness:'5',
                maintainAspectRatio: false,
             },
             {
                label:'failed',
                data: labels.map(()=> Math.floor(Math.random() * 120)),
                backgroundColor: "#fbbc0b",
                maxBarThickness:'5',
                maintainAspectRatio: false,
             },
             
        ]
    }


  return (
    <>
    <Bar options={options} data={data}/>
    </>
  )
  }

export default BarChart