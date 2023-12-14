import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './Components/Header';
import ColorPicker from './Components/ColorPicker';
import Base64CodeGenerator from './Components/Base64CodeGenerator';
import TextExtraction from './Components/TextExtraction';
import YoutubeWatching from './Components/YoutubeWatching';

function App() {

  const [message, setMessage] = useState(true)

  return (
    <div className='container'>
      <Routes>
        <Route element={<>
          <Header />
          <Outlet />
        </>}>
          <Route path='/' element={<ColorPicker />} />
          <Route path='/code-generator' element={<Base64CodeGenerator />} />
          <Route path='/text-extraction' element={<TextExtraction />} />
        </Route>
        <Route path='/yt' element={<YoutubeWatching />} />
      </Routes>
      {
        message && (
          <div className='fixed laptop:bottom-5 bottom-0 laptop:left-1/4 border-2 shadow-2xl laptop:w-1/2 w-full py-5 px-10 bg-white rounded-lg'>
            <div>
              <li className='mb-2'>This Application Help you to get the <b>Color Hex Code</b> from an Image. It is an free web application which is made for Practice to help People.</li>
              <li>And You can upload any picture you want it will <b>100% secure</b> and the Images will not going to store anywhere, It will be in local Cache which will be clear after you refresh the page or Close the Browser.</li>
              <li>You can Upload an <b>Image from local Machine</b> or from the <b>URL of the Image</b> OR you can <b>Paste the Screen Shot or Images</b>...</li>
              <li><b>Key Feature:</b> You can Paste the Image or Screen Shot and get the Colors from that Image...</li>
            </div>
            <div className='text-center mt-4'>
              <button
                className='border-2 rounded-lg w-16 h-10 hover:bg-teal-700 hover:text-white'
                onClick={() => setMessage(false)}
              >OK</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;


/*




*/




/*

Extract image text

--> Rotate funtionality


*/