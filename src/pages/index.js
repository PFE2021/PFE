import React from 'react'
import '../App.css'
import Router from 'react-router-dom'
import Dashboard from '../components/Menus/elements/Dashboard'
import Orders from '../components/Menus/elements/Orders'
import Sales from '../components/Menus/elements/Sales'
import ProductList from '../components/Menus/elements/ProductList'
import AddProduct from '../components/Menus/elements/AddProduct'
import Customers from '../components/Menus/elements/Customers'
import Category from '../components/Menus/elements/Category'

export const DashboardPage = () => {
    return (
        <div>
            <Dashboard/>
        </div>
    )
}

export const ProductListPage = () => {
    return (
        <div>
            <ProductList/>
        </div>
    )
}

export const AddProductPage = () => {
    return (
        <div>
            <AddProduct/>
        </div>
    )
}

export const CategoryPage = () => {
    return (
        <div>
            <Category/>
        </div>
    )
}

export const OrdersPage = () => {
    return (
        <div>
            <Orders/>
        </div>
    )
}

export const CustomersPage = () => {
    return (
        <div>
            <Customers/>
        </div>
    )
}


export const SalesPage = () => {
    return (
        <div>
            <Sales/>
        </div>
    )
}

