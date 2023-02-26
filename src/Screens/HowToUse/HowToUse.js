import React from 'react'
import { MdClose } from 'react-icons/md'

import Image1 from './upload.png'
import Image2 from './upload-url.png'
import Image3 from './picker-button.png'
import Image4 from './picker-from-dialog.png'
import Image5 from './colo.png'
import Video1 from './PickiT-1.mp4'
import Tumbnail from './tumbnail-pickiT.png'

function HowToUse({ setHowtoUse }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex justify-center items-start'>
            <div className='bg-white shadow-lg border-2 rounded-lg mt-5 laptop:w-1/2 w-full' style={{

                height: "95vh",
                overflowY: "auto"

            }}>
                {/* Heading with close button */}
                <div className='flex justify-between items-center sticky top-0 bg-white p-5 border-b-2'>
                    <span className='text-xl font-bold'>How to Use?</span>
                    <div className='border w-8 h-8 rounded-lg text-3xl hover:bg-teal-700 hover:text-white cursor-pointer'
                        onClick={() => setHowtoUse(false)}
                    >
                        <MdClose />
                    </div>
                </div>
                {/* Matter  */}
                <div className='p-10'>
                    <span className='mb-5 block font-bold'>Note: Recommended for Desktop</span>

                    {/* Video will go here... */}
                    <div className='my-10'>
                        <span className='mb-5 block text-lg font-bold'>Video Demo</span>
                        <video
                            controls
                            poster={Tumbnail}
                        >
                            <source
                                src={Video1} />
                        </video>
                    </div>

                    <ul className='list-disc'>
                        <li className='font-bold'>Step.1: Upload the Image OR Give a Image URL</li>
                        <div className='mt-2'>
                            <p>Click on Upload button to Uplaod an Image...</p>
                            {/* image go here */}
                            <img src={Image1} alt='upload_image' className='mt-2' />
                            <p className='text-center font-bold py-5'>OR</p>
                            <p>Give an Image URL and Click on Submit</p>
                            {/* image go here */}
                            <img src={Image2} alt='upload-img-url' className='mt-2' />
                        </div>

                        {/* step -2  */}
                        <li className='font-bold'>Step.2: Click on the Picker Button to Open the Color Picker Dialog Box from Right Menu</li>
                        <div className='mt-2'>
                            {/* image go here */}
                            <img src={Image3} alt='picker-button' />
                        </div>

                        {/* step -3  */}
                        <li className='font-bold'>Step.3: Click on the Picker from Dialog Box</li>
                        <div className='mt-2'>
                            {/* image go here */}
                            <img src={Image4} alt='dialog-box' />
                        </div>

                        {/* step -4  */}
                        <li className='font-bold mt-3'>Step.4: Pick the Color from Image</li>

                        {/* step - 5  */}
                        <li className='font-bold mt-3'>Step.5: Hover ober the Picker Selector and Get the Color from Right Menu </li>
                        <div className='mt-2'>
                            {/* image go here */}
                            <img src={Image5} alt='pick-color' />
                        </div>

                    </ul>
                </div>
            </div>
        </div >
    )
}

export default HowToUse