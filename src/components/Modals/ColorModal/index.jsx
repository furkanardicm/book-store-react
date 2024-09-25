import React, { useEffect, useState } from 'react'
import Modal from '../../CustomModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSun, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../redux/themeSlice';
import { setFontSize } from "../../../redux/fontSizeSlice";
import { setMode } from "../../../redux/modeSlice";

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
    const fontSizes = [
      16,
      18,
      20,
      22,
      24
    ]
    
    const modeList = [
      0,
      1
    ]

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme); // Şu anki tema
    const fSize = useSelector((state) => state.fSize.fSize); // Şu anki fontSize
    const mode = useSelector((state) => state.mode.mode); // Şu anki mode
    const boyuts = [40, 130, 200, 290, 370]
    const boyutsRem = ['2.5rem', '8.125rem', '12.5rem', '18.125rem', '23.125rem'];
    const [selectedCircle, setSelectedCircle] = useState(fontSizes.indexOf(parseInt(fSize.size)));
    const [selectedColor, setSelectedColor] = useState(colorList.indexOf(theme.primary));
    const [isLightMode, setIsLightMode] = useState(!(mode.mode));
    const [isDarkMode, setIsDarkMode] = useState(mode.mode);

    useEffect(() => {
      document.documentElement.style.fontSize = `${fSize.size}px`; // HTML elementine doğrudan stil uygula
    }, [fSize]);
    
    const handleThemeChange = (newTheme) => {
        dispatch(setTheme(newTheme)); // Redux'a yeni temayı gönder
    };
    
    const handleFontSizeChange = (newFontSize) => {
      dispatch(setFontSize(newFontSize)); // Redux'a yeni font size'i gönder
    }
    
    const handleModeChange = (isLight) => {
      dispatch(setMode(isLight)); // Redux'a yeni mode gönder
    }

    const handleCircleClick = (id, color) => {
      setSelectedColor(id);
      handleThemeChange(color);
    }
    const handleSelectedFontSize = (id, fSize) => {
      setSelectedCircle(id);
      handleFontSizeChange(fSize);
    }
    
    const handleDarkMode = (isLight) =>{
      setIsDarkMode(isLight);
      handleModeChange(isLight)
    }
  

  return (
    <Modal isOpen={clickedColorModal} onClose={!clickedColorModal} >
        <button onClick={() => setClickedColorModal(0)} className="z-20 absolute top-4 right-5 text-red-600 flex items-center justify-center text-3xl hover:text-red-700"><FontAwesomeIcon icon={faXmark} /></button>
        <div style={{color: `${isDarkMode ? "white": "black"}`}} className="w-[454px] h-[57px] flex flex-col px-6 mt-1  rounded-t-md gap-3 transform max-sm:scale-90 max-xs:scale-75 sm:scale-90 md:scale-100 lg:scale-100" >
          <span className="font-extrabold z-10" >Yazı Tipi Boyutu</span>
          <div style={{ backgroundColor: `${secondaryColorList[selectedColor]}` }} className="w-full h-1 relative items-center flex my-2 max-sm:scale-80">
              <div style={{ width: `${boyutsRem[selectedCircle]}`, backgroundColor: `${colorList[selectedColor]}`}} className="absolute h-1"></div>
              <div className="flex flex-row absolute items-center justify-around w-full -top-2">
              <button onClick={() => {handleSelectedFontSize(0, 0)}} style={{ backgroundColor: selectedCircle >= 0 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
              <button onClick={() => {handleSelectedFontSize(1, 1)}} style={{backgroundColor: selectedCircle >= 1 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
              <button onClick={() => {handleSelectedFontSize(2, 2)}} style={{backgroundColor: selectedCircle >= 2 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
              <button onClick={() => {handleSelectedFontSize(3, 3)}} style={{backgroundColor: selectedCircle >= 3 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
              <button onClick={() => {handleSelectedFontSize(4, 4)}} style={{backgroundColor: selectedCircle >= 4 ? colorList[selectedColor] : secondaryColorList[selectedColor],}} className="w-5 h-5 rounded-full"></button>
              </div>
          </div>
        </div>

        <hr className='w-[405px] mt-4 bg-[#CCCCCC] h-[2px] mx-auto' />
        
        <div className="w-full h-[57px] flex flex-col px-6 py-4 rounded-t-md mt-0 max-sm:scale-90 max-xs:scale-75 sm:scale-90 md:scale-100 lg:scale-100">
        <span classname="font-extrabold z-10" >Renk</span>
        <div className="w-[400px] h-[43px] relative items-center flex justify-between my-2 ">
            <button onClick={() => handleCircleClick(0, "orangeTheme")} style={{backgroundColor: `${colorList[0]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 0 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(1, "blueTheme")} style={{backgroundColor: `${colorList[1]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 1 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(2, "greenTheme")} style={{backgroundColor: `${colorList[2]}`}} className='w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 2 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(3, "yellowTheme")} style={{backgroundColor: `${colorList[3]}`}} className={`w-9 h-9 border drop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center`}><FontAwesomeIcon className={`${(selectedColor === 3 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
            <button onClick={() => handleCircleClick(4, "purpleTheme")} style={{backgroundColor: `${colorList[4]}`}} className='w-9 h-9 borderdrop-shadow-md border-[#9E9E9E] rounded-full flex items-center justify-center'><FontAwesomeIcon className={`${(selectedColor === 4 && clickedColorModal) ? 'visible text-white' : 'invisible'}`} icon={faCheck} /></button>
        </div>
        </div>
        <hr className='w-[405px] mt-9 bg-[#CCCCCC] h-[2px] mx-auto' />
        <div className="w-full h-[57px] flex flex-col px-6 py-4 rounded-t-md max-sm:scale-90 max-xs:scale-75 sm:scale-90 md:scale-100 lg:scale-100">
        <span classname="font-extrabold z-10" >Tema</span>
        <div className="w-[400px] h-[43px] relative items-center flex justify-around gap-3 px-4 my-2">
            <button onClick={() => {setIsLightMode(1), handleDarkMode(0)}} className={`w-[150px] h-[35px] bg-white border-2 border-black rounded-md flex items-center justify-around px-3 ${isLightMode ? 'shadow-[0_0_25px_5px_#F1C644]' : 'drop-shadow-md'}`}><span>Light Mode</span><FontAwesomeIcon className='text-[#F1C644]' icon={faSun} /></button>
            <button onClick={() => {setIsLightMode(0), handleDarkMode(1)}} className={`w-[150px] h-[35px] bg-black text-white border-2 border-[#383838] rounded-md flex items-center justify-around px-3 ${!isLightMode ? 'shadow-[0_0_25px_5px_#F1C644]' : 'drop-shadow-md'}`}><span>Dark Mode</span><FontAwesomeIcon icon={faMoon} /></button>
        </div>
        </div>
        <br />
    </Modal> 
  )
}
