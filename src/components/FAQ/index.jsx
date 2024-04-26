import React from 'react'
import { RiArrowDownSLine } from '@remixicon/react'

const faqBox = (text) => {
    return <div className='md:w-[65%] text-sm md:text-md mt-6 p-3 border-2 flex justify-between border-blue-200 rounded-lg'>
    <p className='font-semibold'>{text}</p>
    <RiArrowDownSLine color='gray'/>
</div>
}

const FAQ = () => {
    return (
        <section className='md:pt-24 pt-16 pb-40 w-full'>
            <div className='w-5/6 mx-auto'>
                <p className='text-color mb-8 text-4xl font-bold'>FAQ</p>
                {faqBox('Can education flashcards be used for all age groups?')}
                {faqBox('How do education flashcards work?')}
                {faqBox('Can education flashcards be used for test preparation?')}
            </div>
        </section>
    )
}

export default FAQ