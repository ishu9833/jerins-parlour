import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListIcon from '@material-ui/icons/List';
import RateReviewIcon from '@material-ui/icons/RateReview';
export const SidebarData = [
    {
        title:"Booking",
        link:"/booking",
        icon:<ShoppingCartIcon/>,
        page:"customer"
    },
    {
        title:"Booking List",
        link:"/booking_list",
        icon:<ListIcon/>,
        page:"customer"
    },
    {
        title:"Review",
        link:"/review",
        icon:<RateReviewIcon/>,
        page:"customer"
    },
]
