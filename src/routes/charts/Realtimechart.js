import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js";
import "./realtimechart.css"

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);


function Barchart(){
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        scales: {
            y: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    const array = [1,2,3,4,5,6,7,8,9];

    const [data,setData] = React.useState(5);

    function update(){
        const value = array[Math.floor(Math.random()*array.length)]
        setData(value);
    }

    setInterval(update,2000);

    const Data = {
        labels: ['Random Number'],
        datasets: [
            {
                label: 'Random Number',
                data: [data],
                backgroundColor: ["rgba(255,99,132,0.2"],
                borderColor: ["rgba(54,162,235,1"],
                borderWidth: 1,
                barThickness: 100,
            },
        ],
    };

    return (
        <div className="Barchartoutside"><div className="Barchart">
            <Bar options={options} data={Data}/>
        </div></div>
        
    )
}

export default Barchart;