import React, { useState } from 'react'
import "./MainPage.css"
import { MdColorize, MdRefresh, MdZoomIn, MdZoomOut, MdFileCopy } from 'react-icons/md'

function MainPage() {

    const [COLOR, setCOLOR] = useState('#ffffff')

    const [imgURL, setIMGURL] = useState('')

    const handleChangeColor = (e) => {

        setCOLOR(e.target.value)

    }

    const [UploadedImage, setUploadedImage] = useState('')

    const handleUplaodedImage = (e) => {

        const readImage = new FileReader()

        readImage.addEventListener('load', (e) => {
            setUploadedImage(e.target.result)
        })

        readImage.readAsDataURL(e.target.files[0])

    }

    const [zoomOffSet, setZoomOffSet] = useState(70)

    const handleOffSet = (type) => {
        if (type === "ZOOMIN") {
            if (zoomOffSet < 150) {
                setZoomOffSet(zoomOffSet + 10)
            }
        }
        else {
            if (zoomOffSet > 50) {
                setZoomOffSet(zoomOffSet - 10)
            }
        }
    }

    const handleForm = (e) => {
        e.preventDefault()

        setUploadedImage(e.target.img_url.value)

        e.target.img_url.value = ''

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

    const handleActiveSecretPopup = (e) => {
        setIMGURL(e.target.value)
    }

    const handleCopyBase64Code = () => {
        navigator.clipboard.writeText(UploadedImage)
    }

    return (
        <div className='flex w-full laptop:p-10 p-5 laptop:flex-row flex-col justify-evenly items-start'>
            {
                UploadedImage === '' ?
                    /* Image Uploaded.... */
                    < div className='border-2 rounded-sm laptop:w-1/2 w-full h-96 flex justify-center items-center shadow-md'>
                        <input type={'file'} name='image' className='hidden' id='image-upload' onChange={handleUplaodedImage} />
                        <div className='text-center'>
                            <label
                                htmlFor='image-upload'
                                className='bg-white text-black hover:bg-white hover:text-black px-6 py-3 rounded-lg cursor-pointer'
                            >Upload</label>
                            <p className='mt-10 text-white'>Please Upload the Image here....</p>
                        </div>
                    </div>
                    :
                    <div className='w-1/2'>
                        {/* Image Display */}
                        <div className='border-2 shadow-md select-none bg-black overflow-auto'>
                            <div className='custom_image_display_panel'>
                                <div style={{
                                    width: `${zoomOffSet}%`
                                }} className='this-image-class-name'>
                                    <img src={UploadedImage} alt='uploaded_image' />
                                </div>
                            </div>
                            {/* Zoom Option */}
                            <div className='flex flex-col px-2  gap-3 py-4 border-2 text-3xl items-center bg-white absolute top-32 right-0'>
                                <div
                                    className='border w-10 h-10 flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer'
                                    onClick={() => handleOffSet('ZOOMIN')}
                                >
                                    <MdZoomIn />
                                </div>
                                <div className='text-lg ml-5 border-2 px-2 py-1 rounded-md shadow-lg select-none'>
                                    {zoomOffSet}%
                                </div>
                                <div
                                    className='border w-10 h-10 flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer ml-5'
                                    onClick={() => handleOffSet('ZOOMOUT')}
                                >
                                    <MdZoomOut />
                                </div>
                                <div
                                    className='border w-10 h-10 flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer ml-5'
                                    onClick={() => {
                                        setUploadedImage('')
                                    }}
                                >
                                    <MdRefresh />
                                </div>
                                <div className='ml-4 laptop:hidden'>
                                    <label
                                        htmlFor='pickit-color'
                                        className='border w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-teal-700 hover:text-white'>
                                        <MdColorize
                                            className='text-3xl'
                                        />
                                    </label>
                                </div>

                            </div>
                        </div>
                        {/* Base 64 Code */}
                        <div className='border-2 shadow-md w-full mt-5 rounded-md h-96 overflow-auto'>
                            <div className='border-2 shadow-sm w-full h-12 px-5 py-2 flex justify-between sticky top-0 bg-white'>
                                <h2 className='font-bold'>Base64 Code</h2>
                                <MdFileCopy className='text-2xl cursor-pointer' onClick={handleCopyBase64Code} />
                            </div>
                            <div className='px-5 py-10 break-words text-white'>
                                <p>{UploadedImage}</p>
                            </div>
                        </div>
                    </div>
            }

            {/* Image Upload + Color Display.... */}
            <div className='laptop:ml-8 border-2 laptop:px-10 px-5 mt-5 laptop:mt-0 laptop:w-1/3 w-full shadow-md'>
                {
                    UploadedImage === '' ?
                        <>
                            {/* Image Upload */}
                            {/* <label htmlFor='image-upload' className='cursor-pointer'>
                                <div className='my-5 border p-2 shadow-md flex items-center'>
                                    <label
                                        htmlFor='image-upload'
                                        className='cursor-pointer bg-teal-600 rounded-md hover:bg-teal-700 px-4 py-1 text-white'
                                    >Upload</label>
                                    <p className='ml-3'>{UploadedImage === '' ? "Upload Image..." : "Uploaded Successfully..."}</p>
                                </div>
                            </label> */}

                            <form className='border-2 shadow-md px-2 py-2 rounded-md mt-5' onSubmit={handleForm} autoComplete='off'>
                                <label className='font-bold text-white'>Upload Image URL</label>
                                <input
                                    type={'text'}
                                    className='border-2 rounded-md w-full mt-2 h-12 shadow-md pl-2 bg-black text-white focus:border-white focus:outline-none'
                                    placeholder='Enter an Image URL'
                                    name='img_url'
                                    value={imgURL}
                                    onChange={handleActiveSecretPopup}
                                />
                                <input
                                    type={'submit'}
                                    className='mt-3 border w-28 h-10 hover:bg-white hover:text-black bg-white rounded-lg cursor-pointer'
                                />
                            </form>

                            <div
                                className='mt-3 p-2 border-2 shadow-lg rounded-md'
                            >
                                <label className='font-bold text-white'>Paste the Image</label>
                                <input
                                    contentEditable={true}
                                    className='border-2 rounded-md w-full mt-2 h-10 shadow-md pl-2 focus:border-teal-700 focus:outline-none'
                                    onPaste={handleGetImage}
                                />
                            </div>
                        </>
                        :
                        <></>
                }
                {/* Image Color display */}
                <div className='shadow-md my-10 px-2 py-5 border-2 rounded-md flex relative'>
                    {/* Color Picker */}
                    <div className='w-20'>
                        <input
                            type={'color'}
                            name='pickit-color'
                            id='pickit-color'
                            className='hidden'
                            value={COLOR}
                            onChange={handleChangeColor}
                        />
                        <label
                            htmlFor='pickit-color'
                            className='w-10 h-10 flex justify-center items-center rounded-full cursor-pointer bg-white hover:bg-black hover:text-white'>
                            <MdColorize
                                className='text-3xl'
                            />
                        </label>
                    </div>
                    {/* Color Display */}
                    <div className='ml-5 w-full'>
                        {/* Background... */}
                        <div className={`w-full h-20 rounded-lg`}
                            style={{
                                background: COLOR
                            }}
                        ></div>
                        {/* Current Color */}
                        <div className='mt-4 text-center shadow-lg py-3 bg-white'>{COLOR}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainPage