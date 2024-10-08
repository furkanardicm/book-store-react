import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ColorModal from '../Modals/ColorModal'
import { Popover, PopoverButton } from '@headlessui/react'
import { useSelector } from 'react-redux';
function index() {
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  const [clickedUserModal, setClickedUserModal] = useState(0);
  const [clickedColorModal, setClickedColorModal] = useState(0);


  const theme = useSelector((state) => state.theme.theme); // Redux'tan temayı alıyoruz
  const mode = useSelector((state) => state.mode.mode); // Redux'tan mode u alıyoruz
  const styleTheme = { backgroundColor: theme.primary }
  const colorDarkLightMode = { backgroundColor: `${mode.mode ? "black" : "#FAFAFA"}`, color: `${mode.mode ? "white" : "black"}` }
  const imageSrc = mode.mode ? "/white-logo.png" : "/black-logo.png";
  return (
    <>
      <nav style={colorDarkLightMode} className="w-screen h-16 dark:bg-black  dark:text-white max-md:justify-between relative px-6 flex justify-between font-medium text-base items-center font-lalezar antialiased">
        <div className="h-full flex items-center"><a href="/"><img className='h-[50px]' src={imageSrc} alt="LOGO - kitapcim.io" srcset="" /></a></div>

        <div className="w-[354px] h-11 flex items-center rounded-sm max-md:hidden">
          <input style={colorDarkLightMode} className='antialiased outline-none h-full w-[310px] border border-r-0 border-[#B5B5B5] px-3 text-base  rounded-s-md' placeholder='Search by Title, Author, Keyword or ISBN' type="text" />
          <button style={styleTheme} className={`w-11 h-11 bg-[${theme.primary}] hover:bg-[#1F4A50] transition-all duration-300 flex items-center border border-[#B5B5B5] text-center justify-center text-white rounded-e-md`} type='button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>

        <div className="float-right flex items-center gap-6 text-nowrap">
          <ul className='flex items-center gap-6 max-md:hidden'>
            <div className="flex flex-row items-center justify-center relative"><li className={`hover:text-gray-300 transition-colors duration-500`}><a href="">Shop</a></li></div>
            <div className="flex flex-row items-center justify-center relative"><li className='hover:text-gray-300 transition-colors duration-500'><a href="">Categories</a></li></div>
            <div className="flex flex-row items-center justify-center relative"><li className='hover:text-gray-300 transition-colors duration-500'><a href="">My Favorities</a></li><span className='absolute -top-2 -right-4 bg-red-600 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full cursor-default'>2</span></div>
            <div className="flex flex-row items-center justify-center relative"><li className='hover:text-gray-300 transition-colors duration-500 flex items-center justify-center'><a className='flex items-center justify-center z-20' href=""><FontAwesomeIcon icon={faCartShopping} /></a></li><span className='absolute -top-3 -right-4 bg-red-600 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full cursor-default'>5</span></div>
          </ul>
          <button className='max-md:hidden text-nowrap px-6 text-[#CC0E0E] hover:text-[#CC0E0E] border-2 border-[#CC0E0E] rounded-sm py-1 transition-colors duration-500' type="button">Satış Yap</button>
          {
            isLoggedIn ?
              <div className="relative gap-5 flex flex-col">
                <button onClick={() => { setClickedUserModal(!clickedUserModal), setClickedColorModal(0) }} className={`gap-4 flex items-center px-8 text-[#${mode.mode ? "FFF": "#1F4A50"}] hover:text-gray-500 border-2 border-[#${mode.mode ? "FFF": "000"}] rounded-xl py-1 transition-colors duration-500 relative`} type="button">
                  <img className='w-[39px] h-[39px] bg-gray-500 absolute -left-5 rounded-full border border-[#0A090C]' src="/pp.png" alt="" />
                  <span className='text-base'>Username</span>
                  <FontAwesomeIcon className={clickedUserModal ? 'absolute right-2 -rotate-180 transition-all duration-500' : 'absolute right-2 transition-all duration-500'} icon={faAngleDown} />
                </button>

                <Popover className={`${clickedUserModal ? 'visible opacity-100' : 'invisible opacity-0'} z-10  drop-shadow-md flex flex-col items-center transition-all duration-300 ease-out absolute w-[219px] h-[261px] bg-[#FFFFFF] top-14 right-0 border border-[#000] text-black`}>
                  <PopoverButton className="w-full h-[35px] bg-white border-b border-[#CCCCCC] rounded-t-[4px] hover:text-[#616161] text-start px-2">Kullanıcı Ayarları</PopoverButton>
                  <PopoverButton onClick={() => setClickedColorModal(!clickedColorModal)} className={`${clickedColorModal ? 'text-[#285f66]' : 'text-black'} mt-1 w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2`}>Görüntü Ayarları</PopoverButton>
                  <PopoverButton className="mt-1 w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Sipariş Geçmişi</PopoverButton>
                  <PopoverButton className="mt-1 w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Konum & Dil Ayarları</PopoverButton>
                  <PopoverButton className="mt-1 w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Adresler</PopoverButton>
                  <PopoverButton className="mt-1 w-full h-[35px] bg-white border-b border-[#CCCCCC] hover:text-[#616161] text-start px-2">Kuponlar & Kampanyalar</PopoverButton>
                  <PopoverButton className="mt-1 w-full h-[35px] bg-white border-b border-[#CCCCCC] rounded-b-[4px] text-[#CC0E0E] hover:text-[#902a2a] text-start px-2">Çıkış Yap</PopoverButton>
                </Popover>
              </div>
              :
              <button className='w-[119px] flex items-center justify-center text-black hover:text-[#1F4A50] border-2 border-black hover:border-[#1F4A50] rounded-xl py-1 transition-colors duration-500 relative gap-4' type="button"><span className=''>Sign In</span><FontAwesomeIcon className='absolute right-2' icon={faAngleDown} /></button>
          }
        </div>
      </nav>

      <ColorModal clickedColorModal={clickedColorModal} setClickedColorModal={setClickedColorModal} />
    </>
  )
}

export default index