import React, { useState } from 'react'
import "./Base64CodeGenerator.css"

function Base64CodeGenerator() {


    const [UploadedImage, setUploadedImage] = useState(null)

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

    const handleClear = () => {
        setUploadedImage(null)
    }


    return (
        <div className='base64--container'>
            {
                UploadedImage === null ?
                    <div className='base64--uploader'>
                        {/* Upload */}
                        <div className='base64--uploader-span-1'>
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
                        <p className='--base64--center'>Or</p>
                        {/* URL */}
                        <div className='base64--uploader-span-2'>
                            <label>Enter the Image URL/Address</label>
                            <input
                                type='text'
                                name='url'
                                placeholder='Enter here...'
                                onChange={handleImage}
                            />
                        </div>
                        <p className='--base64--center'>Or</p>
                        {/* Paste the image */}
                        <div className='base64--uploader-span-3'>
                            <label>Paste the Image/Screenshot</label>
                            <input
                                contentEditable={true}
                                placeholder='Enter here...'
                                onPaste={handleGetImage}
                            />
                        </div>
                    </div>
                    :
                    <div className='base64--viewer'>
                        <div className='base64--copy'>
                            <button onClick={handleClear}>Clear</button>
                            <button>Copy</button>
                        </div>
                        <div className='base64--image'>
                            <img src={UploadedImage} alt='uploaded' />
                        </div>
                        <div className='base64--code'>
                            <p>{UploadedImage}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Base64CodeGenerator