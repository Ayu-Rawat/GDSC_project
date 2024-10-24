import {Line} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from "chart.js";
import React from "react";
import "./linechart.css";


ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);
function Linechart() {

    const [Marks0,setMarks0] = React.useState()
    const [Marks1,setMarks1] = React.useState()
    const [Marks2,setMarks2] = React.useState()
    const [Marks3,setMarks3] = React.useState()
    const [Marks4,setMarks4] = React.useState()

    function handleChange0(event){
        const value = event.target.value
        setMarks0(value)
    }
    function handleChange1(event){
        const value = event.target.value
        setMarks1(value)
    }
    function handleChange2(event){
        const value = event.target.value
        setMarks2(value)
    }
    function handleChange3(event){
        const value = event.target.value
        setMarks3(value)
    }
    function handleChange4(event){
        const value = event.target.value
        setMarks4(value)
    }

    const lineChartData = {
        labels:[
            "Maths",
            "Quantum Physics",
            "Computer Programming",
            "ECE",
            "EE",
        ],
        datasets:[
            {
                label:"Class Average",
                data:[15,16,12,8,9],
                borderColor:"blue"
            },
            {
                label:"My Marks",
                data:[Marks0,Marks1,Marks2,Marks3,Marks4],
                borderColor:'green'
            }
        ]
    }

    const options={};

    return (<div className="Linechartoutside"><div className="Linechart"><Line options={options} data={lineChartData}/>
    <div className="form1">
    <input onChange={handleChange0} placeholder="Your Marks in Math" value={Marks0}/>
    <input onChange={handleChange1} placeholder="Your Marks in QP" value={Marks1}/>
    <input onChange={handleChange2} placeholder="Your Marks in CP" value={Marks2}/>
    <input onChange={handleChange3} placeholder="Your Marks in ECE" value={Marks3}/>
    <input onChange={handleChange4} placeholder="Your Marks in EE" value={Marks4}/>
    </div>
    </div></div>)
};

export default Linechart;