import React, { useState } from 'react';
import './App.css';
import Header from './Screens/Header/Header';
import MainPage from './Screens/MainPage/MainPage';

function App() {

  const [message, setMessage] = useState(true)

  return (
    <>
      <Header />
      <MainPage />
      {
        message && (
          <div className='fixed laptop:bottom-5 bottom-0 laptop:left-1/4 border-2 shadow-2xl laptop:w-1/2 w-full py-5 px-10 bg-white rounded-lg'>
            {/* Message */}
            <div>
              <li className='mb-2'>This Application Help you to get the <b>Color Hex Code</b> from an Image. It is an free web application which is made for Practice to help People.</li>
              <li>And You can upload any picture you want it will <b>100% secure</b> and the Images will not going to store anywhere, It will be in local Cache which will be clear after you refresh the page or Close the Browser.</li>
              <li>You can Upload an <b>Image from local Machine</b> or Enter the <b>URL of the Image</b>...</li>
            </div>
            {/* Button for OK */}
            <div className='text-center mt-4'>
              <button
                className='border-2 rounded-lg w-16 h-10 hover:bg-teal-700 hover:text-white'
                onClick={() => setMessage(false)}
              >OK</button>
            </div>
          </div>
        )
      }
    </>
  );
}

export default App;
