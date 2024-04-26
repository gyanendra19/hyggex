import React from 'react'
import { RiLightbulbLine, RiVolumeUpFill, RiLoopRightLine, RiArrowLeftSLine, RiArrowRightSLine, RiSquareLine, RiAddLine } from '@remixicon/react'

const Body = () => {
    return (
        <section className='md:w-5/6 w-11/12 mx-auto'>
            <p className='md:text-3xl text-xl text-btn-gradient text-color font-bold'>Relations and Functions ( Mathematics )</p>
            <div className='w-full gap-3 flex flex-col items-center justify-center pt-14'>
                <div className='flex cursor-pointer md:gap-14 gap-4 font-medium text-sm text-gray-500'>
                    <span className='text-[#06286E] border-b px-1 font-bold pb-1 border-[#06286E]'>Study</span>
                    <span>Quiz</span>
                    <span>Test</span>
                    <span>Game</span>
                    <span>Others</span>
                </div>

                <div className='md:w-[45%] w-full rounded-3xl bg-box-gradient p-5 mt-2'>
                    <div className='w-full flex justify-between'>
                        <RiLightbulbLine color='white' />
                        <RiVolumeUpFill color='white' />
                    </div>
                    <p className='text-center pt-20 pb-24 font-semibold text-2xl text-white'>9 + 6 + 7x - 2x - 3</p>
                </div>

                <div className='flex md:w-[40%] w-full justify-between gap-6 items-center mt-3'>
                    <div className='text-color'><RiLoopRightLine size={24} /></div>
                    <div className='flex gap-8 items-center'>
                        <span className='font-bold p-2 rounded-full bg-btn-gradient'><RiArrowLeftSLine size={26} color='white' /></span>
                        <span className='font-semibold text-lg'>01/10</span>
                        <span className='font-bold p-2 rounded-full bg-btn-gradient'><RiArrowRightSLine size={26} color='white' /></span>
                    </div>
                    <div><RiSquareLine size={24} /></div>
                </div>

                <div className='w-full gap-2 flex items-center justify-between mt-10'>
                    <div className='flex gap-3'>
                        <div className='bg-white md:p-2 p-1 rounded-full logo-shadow'>
                            <img className='md:h-12 h-6 md:mt-1 mt-2' src="./logo.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-1 mt-1'>
                            <span className='text-[10px] text-gray-500'>Published by</span>
                            <p className='text-[rgb(6,40,110)] md:text-2xl text-md font-medium tracking-tighter'>Hygge<span className='font-bold'>X</span></p>
                        </div>
                    </div>

                    <div className='flex md:gap-3 gap-1 items-center'>
                        <span className='font-bold p-[10px] md:h-[45px] rounded-full bg-btn-gradient'><RiAddLine size={24} color='white' /></span>
                        <p className='text-color md:text-lg text-sm font-semibold'>Create Flashcard</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body