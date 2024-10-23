import React from 'react'
import { MdDashboard,MdContacts,MdBarChart } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { HiOutlineChartPie } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";

const SidebarData = [
    {
        title:"Dashboard",
        path:"/",
        icons:<MdDashboard />,
        cName:"navText"
    },
    {
        title:"Contact Info",
        path:"/contactinfo",
        icons:<MdContacts />,
        cName:"navText"
    },
    {
        title:"Line Chart",
        path:"/linechart",
        icons:<GrLineChart />,
        cName:"navText"
    },
    {
        title:"Bar Chart",
        path:"/barchart",
        icons:<MdBarChart />,
        cName:"navText"
    },
    {
        title:"Pie Chart",
        path:"/piechart",
        icons:<HiOutlineChartPie />,
        cName:"navText"
    },
    {
        title:"Live Chart",
        path:"/livechart",
        icons:<GrLineChart />,
        cName:"navText"
    },
    {
        title:"Notes",
        path:"/notes",
        icons:<CgNotes />,
        cName:"navText"
    }
]

export default SidebarData;