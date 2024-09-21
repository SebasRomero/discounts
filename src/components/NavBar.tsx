import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='flex justify-center items-center pt-10'>

                <div className='w-20 mx-6 bg-white flex justify-center rounded-md'>
                    <NavLink to="/" className='text-black'>Home</NavLink>
                </div>
                <div className='w-20 mx-6 bg-white flex justify-center rounded-md'>
                    <NavLink to="/products" className='text-black'>Products</NavLink>
                </div>
                <div className='w-20 mx-6 bg-white flex justify-center rounded-md'>
                    <NavLink to="/discounts" className='text-black'>Discounts</NavLink>
                </div>
            </div>
        </>
    )
}

export default NavBar