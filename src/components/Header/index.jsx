import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function index() {
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  const [clickedUserModal, setClickedUserModal] = useState(0);
  return (
    <>
    <nav className="w-screen h-16 bg-[#FAFAFA] relative px-6 flex justify-between font-medium text-base items-center font-lalezar antialiased">
            <div className="h-full flex items-center"><img className='h-[50px]' src="public/black-logo.png" alt="" srcset="" /></div>
            
            <div className="w-[354px] h-11 flex items-center rounded-sm">
                <input className='antialiased outline-none h-full bg-white w-[310px] border border-r-0 border-[#B5B5B5] px-3 text-base  rounded-s-md' placeholder='Search by Title, Author, Keyword or ISBN' type="text" />
                <button className='w-11 h-11 bg-[#1F4A50] flex items-center border border-[#B5B5B5] text-center justify-center text-white rounded-e-md' type='button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            
            <div className="float-right flex items-center gap-6">
                <ul className='flex items-center gap-6 '>
                    <li className='hover:text-[#1F4A50] transition-colors duration-500'><a href="">Shop</a></li>
                    <li className='hover:text-[#1F4A50] transition-colors duration-500'><a href="">Categories</a></li>
                    <li className='hover:text-[#1F4A50] transition-colors duration-500'><a href="">My Favorities</a></li>
                    <li className='hover:text-[#1F4A50] transition-colors duration-500 flex items-center justify-center'><a className='flex items-center justify-center' href=""><FontAwesomeIcon icon={faCartShopping} /></a></li>
                </ul>
                <button className='px-6 text-[#CC0E0E] hover:text-[#CC0E0E] border-2 border-[#CC0E0E] hover:border-[#832c2c] rounded-xl py-1 transition-colors duration-500' type="button">Satış Yap</button> 
                {
                  isLoggedIn ? 
                  <button onClick={() => setClickedUserModal(!clickedUserModal)} className='gap-4 flex items-center px-8 text-black hover:text-[#1F4A50] border-2 border-[#0A090C] hover:border-[#0A090C] rounded-xl py-1 transition-colors duration-500 relative' type="button">
                    <img className='w-[39px] h-[39px] bg-gray-500 absolute -left-5 rounded-full border border-[#0A090C]' src="public/pp.png" alt="" />
                      <span className='text-base'>Username</span>
                      <FontAwesomeIcon className={ clickedUserModal ? 'absolute right-2 -rotate-180 transition-all duration-500' : 'absolute right-2 transition-all duration-500'} icon={faAngleDown} />
                  </button> 
                  : 
                  <button className='w-[119px] flex items-center justify-center text-black hover:text-[#1F4A50] border-2 border-black hover:border-[#1F4A50] rounded-xl py-1 transition-colors duration-500 relative gap-4' type="button"><span className=''>Sign In</span><FontAwesomeIcon className='absolute right-2' icon={faAngleDown} /></button> 
                  
                }
             </div> 
        </nav>
    </>
  )
}

export default index