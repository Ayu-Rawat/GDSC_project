import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS,Title,Tooltip,Legend,ArcElement } from "chart.js";
import "./piechart.css"

ChartJS.register(Tooltip,Legend,ArcElement);

function Piecharts(){
    const options = {};

    const piechartData={
        labels:['Maths',"CP","QP","ECE","EE"],
        datasets:[
            {
                label:"My Marks in Mid Sem",
                data:[20,15,19,10,8],
                backgroundColor:[
                    "rgba(255,99,131,0.9)",
                    "rgba(54,162,235,0.9)",
                    "rgba(255,206,86,0.9)",
                    "rgba(75,192,192,0.9)",
                    "rgba(153,102,255,0.9)",
                ],
                hoverOffset:5,
            },
        ],
    };

    return (
        <div className="Piechartoutside">
        <div className="Piecharts heading1">
            <h1>My Marks</h1>
            <Pie options={options} data={piechartData} />
        </div>
        </div>
    )
}

export default Piecharts;