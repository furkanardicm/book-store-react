import React from 'react'
import {  useSelector } from 'react-redux';
function index() {
 
  const theme = useSelector((state) => state.theme.theme); // Redux'tan temayı alıyoruz

  const stylePrimaryColor = {color: theme.primary}
  const styleSecondaryColor = {color: theme.secondary}

  return (
    <div className="h-screen overflow-hidden bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="px-4 md:px-10 h-auto lg:max-w-2xl sm:mx-auto sm:max-w-md md:max-w-lg xs:max-w-lg py-10 bg-[#F0EDEE]/90 flex flex-col gap-4 ml-4 md:ml-24 rounded-xl drop-shadow-md font-lalezar relative">
        <h1 style={stylePrimaryColor} className="text-2xl md:text-[40px]">
          Aradığınız Kitaplar Uygun Fiyatlarla Burada!
        </h1>
        <h3 style={styleSecondaryColor} className="text-lg md:text-2xl">
          Okumak isteyen herkes için erişilebilir ve uygun fiyatlı kitaplar. Kitaplarınızı seçin, okuyun ve paylaşın.
        </h3>
        <h4 className="text-sm md:text-base text-[#0A090C]">
          Okudukça daha fazla kazan! Kitap alışverişini keyifle yapmak için seni bekliyoruz. Kitap sat, kitap al, bilgiyi paylaş.
        </h4>
        <button
          style={{ backgroundColor: theme.primary }}
          className="w-[135px] text-white px-4 py-2 rounded-md hover:text-white/95 transition-all duration-200"
          type="button"
        >
          Şimdi Keşfet
        </button>
      </div>
    </div>

  
  )
}

export default index