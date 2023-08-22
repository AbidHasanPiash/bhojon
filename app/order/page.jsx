'use client'
import React, { useState } from 'react';
import OrderReport from '@/components/order/OrderReport';
import OrderSummary from '@/components/order/OrderSummary';
import VirtualTables from '@/components/order/VirtualTables';

export default function Order() {
  const [Orders, setOrders] = useState([
    {id:1, table:3, status: 'active', waiter:'John', time:'11:24 AM', amount:350, items:['Bruschetta', 'Caprese Salad', 'Chicken Wings']},
    {id:2, table:5, status: 'complete', waiter:'Walle', time:'11:00 AM', amount:465, items:['Grilled Salmon', 'dring']},
    {id:3, table:1, status: 'active', waiter:'John', time:'10:30 AM', amount:180, items:['chicken', 'dring', 'Grilled Salmon']},
    {id:4, table:7, status: 'complete', waiter:'Mike', time:'10:12 AM', amount:290, items:['Chocolate Cake', 'Bruschetta']},
    {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:55, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
  ])
  return (
    <section>
      <div className='container_gap grid gap-6 lg:grid-cols-4'>
        <OrderSummary/>
        <VirtualTables/>
      </div>
      <OrderReport Orders={Orders}/>
    </section>
  )
}
