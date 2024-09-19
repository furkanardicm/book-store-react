import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown, faCartShopping, faCheck, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal'

function index() {
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  const [clickedUserModal, setClickedUserModal] = useState(0);
  const [clickedColorModal, setClickedColorModal] = useState(0);
  const boyuts = [40, 130, 200, 290, 370]
  const [selectedCircle, setSelectedCircle] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);
  const [isLightMode, setIsLightMode] = useState(1);
  const colorList = [
    "#DD6B20", // orange-600
    "#0C4A6E", // sky-900
    "#14532D", // green-900
    "#d5a201", // yellow-500
    "#4C1D95", // purple-900
  ];
  
  const secondaryColorList = [
    "#FB923C", // orange-400
    "#38BDF8", // sky-400
    "#4ADE80", // green-400
    "#FCD34D", // yellow-300
    "#A855F7"  // purple-400
];

  return (
    <>
    <nav className="w-screen h-16 bg-[#FAFAFA] relative px-6 flex justify-between font-medium text-base items-center font-lalezar antialiased">
            <div className="h-full flex items-center"><a href="/"><img className='h-[50px]' src="/black-logo.png" alt="" srcset="" /></a></div>
        
            <div className="w-[354px] h-11 flex items-center rounded-sm">
                <input className='antialiased outline-none h-full bg-white w-[310px] border border-r-0 border-[#B5B5B5] px-3 text-base  rounded-s-md' placeholder='Search by Title, Author, Keyword or ISBN' type="text" />
                <button className='w-11 h-11 bg-[#286067] hover:bg-[#1F4A50] transition-all duration-300 flex items-center border border-[#B5B5B5] text-center justify-center text-white rounded-e-md' type='button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            
            <div className="float-right flex items-center gap-6">
                <ul className='flex items-center gap-6 '>
                    <li className='hover:text-[#285f66] transition-colors duration-500'><a href="">Shop</a></li>
                    <li className='hover:text-[#285f66] transition-colors duration-500'><a href="">Categories</a></li>
                    <li className='hover:text-[#285f66] transition-colors duration-500'><a href="">My Favorities</a></li>
                    <li cla ssName='hover:text-[#285f66] transition-colors duration-500 flex items-center justify-center'><a className='flex items-center justify-center' href=""><FontAwesomeIcon icon={faCartShopping} /></a></li>
                </ul>
                <button className='px-6 text-[#CC0E0E] hover:text-[#CC0E0E] border-2 border-[#CC0E0E] hover:border-[#832c2c] rounded-sm py-1 transition-colors duration-500' type="button">Satış Yap</button> 
                {
                  isLoggedIn ? 
                  <div className="relative">
                    <button onClick={() => {setClickedUserModal(!clickedUserModal), setClickedColorModal(0)}} className='gap-4 flex items-center px-8 text-black hover:text-[#1F4A50] border-2 border-[#0A090C] hover:border-[#0A090C] rounded-xl py-1 transition-colors duration-500 relative' type="button">
                      <img className='w-[39px] h-[39px] bg-gray-500 absolute -left-5 rounded-full border border-[#0A090C]' src="/pp.png" alt="" />
                        <span className='text-base'>Username</span>
                        <FontAwesomeIcon className={ clickedUserModal ? 'absolute right-2 -rotate-180 transition-all duration-500' : 'absolute right-2 transition-all duration-500'} icon={faAngleDown} />
                    </button>

                    <div className={`${clickedUserModal ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-300 ease-out z-20 flex flex-col gap-1 w-[219px] h-[261px] bg-[#F0EDEE] absolute top-12 right-0 rounded border border-[#ABABAB] drop-shadow-md`}>
                      <button className="w-full h-[35px] bg-white border-b border-[#CCCCCC] rounded-t-[4px] hover:text-[#616161] text-start px-2">Kullanıcı Ayarları</button>
                      <button onClick={() => setClickedColorModal(!clickedColorModal)} className= {`${clickedColorModal ? 'text-[#285f66]': 'text-black'} w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2`}>Görüntü Ayarları</button>
                      <button className="w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Sipariş Geçmişi</button>
                      <button className="w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Konum & Dil Ayarları</button>
                      <button className="w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Adresler</button>
                      <button className="w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Kuponlar & Kampanyalar</button>
                      <button className="w-full h-[35px] bg-white border-b border-[#CCCCCC] rounded-b-[4px] text-[#CC0E0E] hover:text-[#902a2a] text-start px-2">Çıkış Yap</button>    
                    </div>
                  </div>
                  : 
                  <button className='w-[119px] flex items-center justify-center text-black hover:text-[#1F4A50] border-2 border-black hover:border-[#1F4A50] rounded-xl py-1 transition-colors duration-500 relative gap-4' type="button"><span className=''>Sign In</span><FontAwesomeIcon className='absolute right-2' icon={faAngleDown} /></button> 
                }
             </div> 
        </nav>
        <Modal className={`${clickedColorModal ? 'visible z-30' : 'invisible'}`} width={'454px'} height={'283px'} primaryColor={'FFFFFF'} secondaryColor={'000'} border={"border"} borderColor={'ABABAB'} textColor={'black'} isOpen={clickedColorModal} >
          <div className="w-full h-[57px] flex flex-col px-6 mt-4  bg-white rounded-t-md gap-3">
            <span>Yazı Tipi Boyutu</span>
            <div style={{ backgroundColor: `${secondaryColorList[selectedColor]}` }} className="w-full h-1 relative items-center flex">
              <div style={{ width: `${boyuts[selectedCircle]}px`, backgroundColor: `${colorList[selectedColor]}`}} className="absolute h-1"></div>
              <div className="flex flex-row absolute items-center justify-around w-full -top-2">
                <button onClick={() => setSelectedCircle(0)} style={{ backgroundColor: selectedCircle >= 0 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
                <button onClick={() => setSelectedCircle(1)} style={{backgroundColor: selectedCircle >= 1 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
                <button onClick={() => setSelectedCircle(2)} style={{backgroundColor: selectedCircle >= 2 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
                <button onClick={() => setSelectedCircle(3)} style={{backgroundColor: selectedCircle >= 3 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
                <button onClick={() => setSelectedCircle(4)} style={{backgroundColor: selectedCircle >= 4 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
              </div>
            </div>

          </div>
          <hr className='w-[405px] mt-4 bg-[#CCCCCC] h-[2px]' />
          <div className="w-full h-[57px] flex flex-col px-6 py-4 bg-white rounded-t-md mt-0">
            <span>Renk</span>
            <div className="w-[400px] h-[43px] relative items-center flex justify-between">
              <button onClick={() => setSelectedColor(0)} style={{backgroundColor: `${colorList[0]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 0 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
              <button onClick={() => setSelectedColor(1)} style={{backgroundColor: `${colorList[1]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 1 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
              <button onClick={() => setSelectedColor(2)} style={{backgroundColor: `${colorList[2]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 2 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
              <button onClick={() => setSelectedColor(3)} style={{backgroundColor: `${colorList[3]}`}} className={`w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center`}><FontAwesomeIcon className={`${(selectedColor === 3 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
              <button onClick={() => setSelectedColor(4)} style={{backgroundColor: `${colorList[4]}`}} className='w-9 h-9 borderdrop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 4 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            </div>
          </div>
          <hr className='w-[405px] mt-9 bg-[#CCCCCC] h-[2px]' />
          <div className="w-full h-[57px] flex flex-col px-6 py-4 bg-white rounded-t-md">
            <span>Tema</span>
            <div className="w-[400px] h-[43px] relative items-center flex justify-around gap-3 px-4">
              <button onClick={() => setIsLightMode(1)} className={`w-[150px] h-[35px] bg-white border-2 border-black rounded-md flex items-center justify-around px-3 ${isLightMode ? 'shadow-[0_0_25px_5px_#F1C644]' : 'drop-shadow-md'}`}><span>Light Mode</span><FontAwesomeIcon className='text-[#F1C644]' icon={faSun} /></button>
              <button onClick={() => setIsLightMode(0)} className={`w-[150px] h-[35px] bg-black text-white border-2 border-[#383838] rounded-md flex items-center justify-around px-3 ${!isLightMode ? 'shadow-[0_0_25px_5px_#F1C644]' : 'drop-shadow-md'}`}><span>Dark Mode</span><FontAwesomeIcon icon={faMoon} /></button>
            </div>
          </div>
          
        </Modal>
    </>
  )
}

export default index