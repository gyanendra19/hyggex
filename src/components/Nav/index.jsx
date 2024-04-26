import React, { useState } from 'react'
import { RiHome4Fill, RiArrowRightSLine, RiMenu3Line } from '@remixicon/react'

const Nav = () => {
    // state for handling nav buttons
    const [navBar, setNavBar] = useState(false)

    return (
        <section className='w-full py-6'>
            <div className='w-5/6 mx-auto flex justify-between items-center relative'>
                
                <div className='flex items-center'>
                    <img className='h-10 mt-1' src="./logo.png" alt="" />
                    <p className='text-[rgb(6,40,110)] text-3xl font-medium tracking-tighter'>Hygge<span className='font-bold'>X</span></p>
                </div>

                <div className='md:flex hidden gap-10 items-center font-medium text-[#3A3740]'>
                    <a href="#">Home</a>
                    <a href="#">Flashcard</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <button className='px-8 text-sm py-2 rounded-3xl text-white bg-btn-gradient'>Login</button>
                </div>
                <span onClick={() => setNavBar(prev => !prev)} className='md:hidden block'><RiMenu3Line color='gray' /></span>
                
                {/* Nav buttons for mobile phones */}
                <div className={`absolute right-0 top-10 flex bg-white logo-shadow rounded-sm flex-col gap-3 p-6 ${navBar ? 'block' : 'hidden'}`}>
                    <a href="#">Home</a>
                    <a href="#">Flashcard</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <button className='px-8 text-sm py-2 rounded-3xl text-white bg-btn-gradient'>Login</button>
                </div>
            </div>

            <div className='flex gap-1 text-gray-500 md:w-5/6 w-11/12 mx-auto font-medium md:py-12 pt-8 mb-4 text-[10px] md:text-sm items-center'>
                <RiHome4Fill color='gray' size={22} />
                <RiArrowRightSLine color='gray' size={20} />
                <span>Flashcard</span>
                <RiArrowRightSLine color='gray' size={20} />
                <span>Mathematics</span>
                <RiArrowRightSLine color='gray' size={20} />
                <span className='text-[#06286E] font-bold whitespace-nowrap'>Relations and functons</span>
            </div>
        </section>
    )
}

export default Nav