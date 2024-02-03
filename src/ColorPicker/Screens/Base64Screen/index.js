import React, { useState } from 'react'
import "./Base64.css"
import UploadImage from '../../Components/UploadImage'

function Base64Screen() {


    const [uploadedImage, setUploadedImage] = useState(null)

    const handleFile = (e) => {

        const readImage = new FileReader()

        readImage.addEventListener('load', (e) => {
            setUploadedImage(e.target.result)
        })

        readImage.readAsDataURL(e.target.files[0])

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


    return (
        <div className='base64--container'>
            {
                uploadedImage === null ?
                    <UploadImage handleFile={handleFile} handleScreenshot={handleScreenshot} type={'base64'} />
                    :
                    <div className='base64--display'>
                        <div className='base64-code'>
                            <p>{uploadedImage}</p>
                        </div>
                        <div className='base64-options'>
                            <button onClick={() => setUploadedImage(null)}>Refresh</button>
                            <a href={uploadedImage} download={'PickiT-downloaded-image'}>Download</a>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Base64Screen