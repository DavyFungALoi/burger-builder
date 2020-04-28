import React from 'react'
import './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

export default function Navigationitems() {
    return (
        <ul className='NavigationItems'>
           <NavigationItem link = "/" active>Burger Builder</NavigationItem>
           <NavigationItem link = "/">Checkout</NavigationItem>
        </ul>
    )
}
