import React, { useState } from 'react'
import "./YoutubeWatching.css"

function YoutubeWatching() {

    const [embedURl, setEmbedUrl] = useState('')
    const [numberOfTimes, setNumberOfTimes] = useState(0)
    const [embedArray, setEmbedArray] = useState([])

    const handlePopulate = () => {

        const number = new Array(numberOfTimes)

        let values = []

        for (let i = 0; i < number; i++) {

            values.push({
                title: "Hello",
                url: embedURl
            })

        }

        setEmbedArray(values)

    }

    return (
        <div className='youtube-watching--container'>
            <div className='youtube-watching--fields'>
                <input
                    type='text'
                    placeholder='Enter the Youtbe embed url'
                    value={embedURl}
                    onChange={(e) => setEmbedUrl(e.target.value)}
                />
                <input
                    type='text'
                    className='youtube-watching--numbers'
                    value={numberOfTimes}
                    onChange={(e) => setNumberOfTimes(e.target.value)}
                />
                <button onClick={handlePopulate}>Populate</button>
                {
                    embedURl === '' ?
                        <></>
                        :
                        <iframe
                            width="600px"
                            height="150px"
                            src={embedURl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                }
            </div>
            <div className='youtube-watching--content'>
                {
                    embedArray.length !== 0 && (
                        <>
                            {
                                embedArray.map((item, index) => {
                                    return (
                                        <iframe
                                            key={index}
                                            width="15%"
                                            height="150px"
                                            src={item.url}
                                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen></iframe>
                                    )
                                })
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default YoutubeWatching