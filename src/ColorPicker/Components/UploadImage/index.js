import React from 'react'
import "./UploadImage.css"

function UploadImage({
    handleURL,
    handleScreenshot,
    handleFile,
    type
}) {
    return (
        <div className='uploader--card'>
            {
                type !== 'base64' && (
                    <>
                        <div className='uploader--field'>
                            <label htmlFor='url'>Enter the Image URL/Address</label>
                            <input type='text' placeholder='Enter here....' id='url' onChange={handleURL} />
                        </div>
                        <p style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>OR</p>
                    </>
                )
            }
            <div className='uploader--field'>
                <label htmlFor='screenshot'>Paste the Image/Screenshot</label>
                <input type='text' placeholder='Paste here....' id='screenshot' onPaste={handleScreenshot} />
            </div>
            <p style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>OR</p>
            <div className='uploader--upload'>
                <label htmlFor='upload-image'>Upload</label>
                <input type='file' id='upload-image' hidden onChange={handleFile} />
                <label htmlFor='upload-image'>Upload the file...</label>
            </div>
        </div>
    )
}

export default UploadImage