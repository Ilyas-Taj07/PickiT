import React, { useState } from 'react'
import "./ColorPicker.css"

function ColorPicker() {

    const [UploadedImage, setUploadedImage] = useState(null)
    const [hexCode, setHexCode] = useState(null)

    const handleUplaodedImage = (e) => {

        const readImage = new FileReader()

        readImage.addEventListener('load', (e) => {
            setUploadedImage(e.target.result)
        })

        readImage.readAsDataURL(e.target.files[0])

    }

    const handleImage = (e) => {
        setUploadedImage(e.target.value)
    }

    const handleGetImage = (e) => {

        e.preventDefault()

        const items = e.clipboardData.items;

        for (let i = 0; i < items.length; i++) {

            if (items[i].type === 'image/png') {

                const blob = items[i].getAsFile()

                const readImage = new FileReader()

                readImage.addEventListener('load', (e) => {
                    setUploadedImage(e.target.result)
                })

                readImage.readAsDataURL(blob)

            }

        }


    }

    const handlePickiT = async () => {

        const eyeDropper = new window.EyeDropper()

        const { sRGBHex } = await eyeDropper.open()
        setHexCode(sRGBHex)

    }

    const handleClear = () => {
        setUploadedImage(null)
        setHexCode(null)
    }

    return (
        <div className='color-picker--container'>
            {
                UploadedImage === null ?
                    <div className='color-picker--uploader'>
                        {/* Upload */}
                        <div className='color-picker--uploader-span-1'>
                            <input
                                type={'file'}
                                name='image'
                                className='hidden'
                                id='image-upload'
                                onChange={handleUplaodedImage}
                            />
                            <label
                                htmlFor='image-upload'
                            >Upload</label>
                            <p>Please Upload Image Here</p>
                        </div>
                        <p className='--color-picker--center'>Or</p>
                        {/* URL */}
                        <div className='color-picker--uploader-span-2'>
                            <label>Enter the Image URL/Address</label>
                            <input
                                type='text'
                                name='url'
                                placeholder='Enter here...'
                                onChange={handleImage}
                            />
                        </div>
                        <p className='--color-picker--center'>Or</p>
                        {/* Paste the image */}
                        <div className='color-picker--uploader-span-3'>
                            <label>Paste the Image/Screenshot</label>
                            <input
                                contentEditable={true}
                                placeholder='Enter here...'
                                onPaste={handleGetImage}
                            />
                        </div>
                    </div>
                    :
                    <div className='color--pikcer--viewer'>
                        <div className='color--pikcer--viewer--image'>
                            <img src={UploadedImage} alt='uploadedImage' />
                        </div>

                        <div className='color--picker-hex'>
                            <div className='color--picker--div' style={{ background: hexCode === null ? "#000" : hexCode }}></div>
                            <p>{hexCode === null ? "Not Selected" : hexCode}</p>
                        </div>

                        <div className='color--picker'>
                            {/* <button>Zoom In</button> */}
                            <button onClick={handleClear}>Refresh</button>
                            <button onClick={handlePickiT}>Color Picker</button>
                            {/* <button>Zoom Out</button> */}
                        </div>
                    </div>
            }
        </div>
    )
}

export default ColorPicker