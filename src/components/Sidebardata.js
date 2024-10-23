import React from 'react'
import { MdDashboard,MdContacts,MdBarChart } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { HiOutlineChartPie } from "react-icons/hi";
import { LuListTodo } from "react-icons/lu";

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
        title:"To-Do List",
        path:"/notes",
        icons:<LuListTodo />,
        cName:"navText"
    }
]

export default SidebarData;