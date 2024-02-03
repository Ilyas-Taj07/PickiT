import React, { useState } from 'react'
import "./Home.css"
import UploadImage from '../../Components/UploadImage'
import ImageDisplay from '../../Components/ImageDisplay'

function Home() {

    const [uploadedImage, setUploadedImage] = useState(null)
    const [color, setColor] = useState('#000000')

    const handleFile = (e) => {

        const readImage = new FileReader()

        readImage.addEventListener('load', (e) => {
            setUploadedImage(e.target.result)
        })

        readImage.readAsDataURL(e.target.files[0])

    }

    const handleURL = (e) => {
        setUploadedImage(e.target.value)
    }

    const handleScreenshot = (e) => {

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
        setColor(sRGBHex)

    }

    const handleClear = () => {
        setColor('#000000')
        setUploadedImage(null)
    }

    return (
        <div className='home--container'>
            {
                uploadedImage === null ?
                    <UploadImage
                        handleFile={handleFile}
                        handleScreenshot={handleScreenshot}
                        handleURL={handleURL}
                        type={'home'}
                    />
                    :
                    <>
                        <ImageDisplay ImageURL={uploadedImage} setUploadedImage={setUploadedImage} />
                        <ColorPicker
                            handleClear={handleClear}
                            handlePickiT={handlePickiT}
                            color={color}
                        />
                    </>
            }


        </div>
    )
}

export default Home


function ColorPicker({
    handleClear,
    handlePickiT,
    color
}) {

    return (
        <div className='color--picker--container'>
            <button onClick={handleClear}>Refresh</button>
            <div className='color--picker-diplay' >
                <div className='color--picker-color' style={{ background: color }}></div>
                <p>{color}</p>
            </div>
            <button onClick={handlePickiT}>Picker</button>
        </div>
    )
}