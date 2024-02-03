import React, { useState } from 'react'
import "./ImageDisplay.css"
import { MdZoomIn, MdZoomOut, MdRefresh } from 'react-icons/md'

function ImageDisplay({ ImageURL, setUploadedImage }) {

    const [zoom, setzoom] = useState(100)

    return (
        <div className='image-display--container'>
            <img src={ImageURL} alt='uploaded-img' style={{
                width: zoom + "%"
            }} />
            <div className='image-display--zoom'>
                <div className='image-display--zoom-in' onClick={() => {
                    if (zoom !== 200) {
                        setzoom(zoom + 50)
                    }
                }}>
                    <MdZoomIn />
                </div>
                <div className='image-display--zoom-out' onClick={() => {
                    if (zoom !== 50) {
                        setzoom(zoom - 50)
                    }
                }}>
                    <MdZoomOut />
                </div>
                <div className='image-display--zoom-out' onClick={() => {
                    setUploadedImage(null)
                }}>
                    <MdRefresh />
                </div>
            </div>
        </div>
    )
}

export default ImageDisplay