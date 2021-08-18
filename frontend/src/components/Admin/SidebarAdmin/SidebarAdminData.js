import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppsIcon from '@material-ui/icons/Apps';
export const SidebarAdminData = [
    {
        title:"Order list",
        link:"/orderList",
        icon:<LocalMallIcon/>,
        page:"Admin"
    },
    {
        title:"Add Service",
        link:"/addService",
        icon:<AddIcon/>,
        page:"Admin"
    },
    
    {
        title:"Make Admin",
        link:"/makeAdmin", 
        icon:<PersonAddIcon/>,
        page:"Admin"
    },
    {
        title:"Manage Services",
        link:"/manageServices", 
        icon:<AppsIcon/>,
        page:"Admin"
    },
]
