import React, { useState } from 'react'
import Modal from '../../CustomModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSun, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../redux/themeSlice';

export default function index({ clickedColorModal, setClickedColorModal }) {
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
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme); // Şu anki tema
    const boyuts = [40, 130, 200, 290, 370]
    const [selectedCircle, setSelectedCircle] = useState(1);
    const [selectedColor, setSelectedColor] = useState(colorList.indexOf(theme.primary));
    const [isLightMode, setIsLightMode] = useState(1);
    
    const handleThemeChange = (newTheme) => {
        dispatch(setTheme(newTheme)); // Redux'a yeni temayı gönder
      };
    
    
  const handleCircleClick = (id, color) => {
    setSelectedColor(id);
    handleThemeChange(color);
  }
  

  return (
    <Modal isOpen={clickedColorModal} onClose={!clickedColorModal} >
        <button onClick={() => setClickedColorModal(0)} className="absolute top-4 right-5 text-red-600 flex items-center justify-center text-3xl hover:text-red-700"><FontAwesomeIcon icon={faXmark} /></button>
        <div className="w-[454px] h-[57px] flex flex-col px-6 mt-1  bg-white rounded-t-md gap-3" >
        <span className="font-extrabold" >Yazı Tipi Boyutu</span>
        <div style={{ backgroundColor: `${secondaryColorList[selectedColor]}` }} className="w-full h-1 relative items-center flex my-2">
            <div style={{ width: `${boyuts[selectedCircle]}px`, backgroundColor: `${colorList[selectedColor]}`}} className="absolute h-1"></div>
            <div className="flex flex-row absolute items-center justify-around w-full -top-2">
            <button onClick={() => {setSelectedCircle(0)}} style={{ backgroundColor: selectedCircle >= 0 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
            <button onClick={() => {setSelectedCircle(1)}} style={{backgroundColor: selectedCircle >= 1 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
            <button onClick={() => {setSelectedCircle(2)}} style={{backgroundColor: selectedCircle >= 2 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
            <button onClick={() => {setSelectedCircle(3)}} style={{backgroundColor: selectedCircle >= 3 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
            <button onClick={() => {setSelectedCircle(4)}} style={{backgroundColor: selectedCircle >= 4 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
            </div>
        </div>

        </div>
        <hr className='w-[405px] mt-4 bg-[#CCCCCC] h-[2px] mx-auto' />
        <div className="w-full h-[57px] flex flex-col px-6 py-4 bg-white rounded-t-md mt-0">
        <span classname="font-extrabold" >Renk</span>
        <div className="w-[400px] h-[43px] relative items-center flex justify-between my-2">
            <button onClick={() => handleCircleClick(0, "orangeTheme")} style={{backgroundColor: `${colorList[0]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 0 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(1, "blueTheme")} style={{backgroundColor: `${colorList[1]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 1 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(2, "greenTheme")} style={{backgroundColor: `${colorList[2]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 2 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(3, "yellowTheme")} style={{backgroundColor: `${colorList[3]}`}} className={`w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center`}><FontAwesomeIcon className={`${(selectedColor === 3 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(4, "purpleTheme")} style={{backgroundColor: `${colorList[4]}`}} className='w-9 h-9 borderdrop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 4 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
        </div>
        </div>
        <hr className='w-[405px] mt-9 bg-[#CCCCCC] h-[2px] mx-auto' />
        <div className="w-full h-[57px] flex flex-col px-6 py-4 bg-white rounded-t-md">
        <span classname="font-extrabold" >Tema</span>
        <div className="w-[400px] h-[43px] relative items-center flex justify-around gap-3 px-4 my-2">
            <button onClick={() => setIsLightMode(1)} className={`w-[150px] h-[35px] bg-white border-2 border-black rounded-md flex items-center justify-around px-3 ${isLightMode ? 'shadow-[0_0_25px_5px_#F1C644]' : 'drop-shadow-md'}`}><span>Light Mode</span><FontAwesomeIcon className='text-[#F1C644]' icon={faSun} /></button>
            <button onClick={() => setIsLightMode(0)} className={`w-[150px] h-[35px] bg-black text-white border-2 border-[#383838] rounded-md flex items-center justify-around px-3 ${!isLightMode ? 'shadow-[0_0_25px_5px_#F1C644]' : 'drop-shadow-md'}`}><span>Dark Mode</span><FontAwesomeIcon icon={faMoon} /></button>
        </div>
        </div>
        <br />
    </Modal> 
  )
}
