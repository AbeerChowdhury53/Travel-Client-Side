import React, { useEffect, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';
import Myorderdtl from '../service/Myorderdtl';
import Service from '../service/Service';
import ('./Myorder.css')

const Myorder = () => {

    const { user, logout } = useFirebase()
    console.log(user.email)
    const [orders, setOrdes]= useState([]);
    // console.log(orders)

    const result =  orders.filter(order => order.email == user.email )
    console.log(result)

    useEffect(()=>{
        fetch('https://frightful-flesh-47379.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrdes(data))
    },[orders])
    return (
        <div className='my-div'>
         {
             result.map(order => <Myorderdtl order={order}></Myorderdtl>)
             
         }
        </div>
    );
};

export default Myorder;