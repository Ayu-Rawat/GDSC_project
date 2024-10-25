import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js";
import Piecharts from "./charts/Piechart";
import Linechart from "./charts/Linechart";
import "./charts/realtimechart.css";
import "./dashboard.css";

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const array =[1,2,3,4,5,6,7,8,9]
function random(){
    return(array[Math.floor(Math.random()*array.length)]);
}

function Dashboard(){
    const [data,setData] = React.useState(5);

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

    function update(){
        const value = random();
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
        <div className="Dashboard">
            <div>
                <h1 className="number">Random Number: {data}</h1>
            </div>
            <div className="container">
            <div className="Barchart">
                <Bar className="Dasboardbar" options={options} data={Data}/>
            </div>
            <Piecharts className="Dashboardpie"/>
            <Linechart className="Dashboardline" />
            </div>
            
        </div>
    )
}

export default Dashboard;