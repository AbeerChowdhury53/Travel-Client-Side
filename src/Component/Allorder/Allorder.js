import React, { useEffect, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

import Service from '../service/Service';
import AllorderDetail from './AllorderDetail';
import ('./Allorder.css')

const Allorder = () => {

    const { user, logout } = useFirebase()
    console.log(user.email)
    const [orders, setOrdes]= useState([]);
    // console.log(orders)
    const result=orders

    // const result =  orders.filter(order => order.email == user.email )
    // console.log(result) 

    useEffect(()=>{
        fetch('https://frightful-flesh-47379.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrdes(data))
    },[orders])
    return (
        <div>
            <h2>Total No of Order {orders.length}</h2>
             <div  className='my-div'>
            
         {
             result.map(order => <AllorderDetail order={order}></AllorderDetail>)
             
         }
        </div>
        </div>
       
    );
};

export default Allorder;