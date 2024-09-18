import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export default function MainLayout() {
    return (
    <div className='w-screen h-screen flex flex-col font-lalezar'>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
