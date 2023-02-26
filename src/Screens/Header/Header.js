import React, { useState } from 'react'
import HowToUse from '../HowToUse/HowToUse'

function Header() {

    const [howtoUse, setHowtoUse] = useState(false)

    return (
        <div className='flex justify-between laptop:px-40 px-5 items-center py-6 bg-gradient-to-r to-teal-600 from-teal-700 shadow-lg shadow-slate-600'>
            <div className='text-3xl font-bold tracking-widest text-white'>
                <span className='cursor-pointer'>PickiT</span>
            </div>
            <div className='text-white tracking-wide'>
                <span className='hover:bg-teal-700 px-5 py-3 cursor-pointer rounded-md' onClick={() => setHowtoUse(true)}>How to Use</span>
                <a href='https://www.linkedin.com/in/ilyas-hussain-376275202/' target={'blank'} className='hover:bg-teal-700 px-5 py-3 cursor-pointer rounded-md'>About Us</a>
            </div>
            {
                howtoUse && (
                    <HowToUse
                        setHowtoUse={setHowtoUse}
                    />
                )
            }
        </div>
    )
}

export default Header