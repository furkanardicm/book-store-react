import React from 'react'

function index() {
  return (
    <div className='h-[1920px] overflow-hidden bg-hero-pattern bg-cover flex items-center'>
      <div className="px-10 h-[300px] w-[815px] py-10 bg-[#F0EDEE]/85 flex flex-col gap-4 ml-24 rounded-xl drop-shadow-md font-lalezar relative">
        <h1 className='text-[40px] text-[#07393C]'>Aradığınız Kitaplar Uygun Fiyatlarla Burada!</h1>
        <h3 className='w-[613px] text-2xl text-[#2C666E]'>Okumak isteyen herkes için erişilebilir ve uygun fiyatlı kitaplar. Kitaplarınızı seçin, okuyun ve paylaşın.</h3>
        <h4 className='w-[613px] text-base text-[#0A090C]'>Okudukça daha fazla kazan! Kitap alışverişini keyifle yapmak için seni bekliyoruz. Kitap sat, kitap al, bilgiyi paylaş.</h4>
        <button className='w-[135px] absolute right-5 bottom-5 text-white px-2 py-2 bg-[#2C666E] rounded-md hover:bg-[#25585f] transition-all duration-200' type='button'>Şimdi Keşfet</button>
      </div>  
    </div>
  )
}

export default index