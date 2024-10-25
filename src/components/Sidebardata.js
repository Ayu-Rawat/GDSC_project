import React from 'react'
import { MdDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";

const SidebarData = [
    {
        title:"Dashboard",
        path:"/",
        icons:<MdDashboard />,
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