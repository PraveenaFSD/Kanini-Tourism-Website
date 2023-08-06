import React, { useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './roughtfil.css'
function Roughtfil() {
  const [dates, setDates] = useState([{ startDate: '1', endDate: '1' }]);


    const [activeButton, setActiveButton] = useState('button1'); // Default active button
  
    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId);
    };

  return (
    <div>
      <h5> Tour Dates</h5> <br />

      <div className='btn'>
        <button onClick={() => handleButtonClick('button1')}>Button 1</button>
        <button onClick={() => handleButtonClick('button2')}>Button 2</button>
        <button onClick={() => handleButtonClick('button3')}>Button 3</button>
        <button onClick={() => handleButtonClick('button4')}>Button 4</button>
      </div>

      {activeButton === 'button1' && <div>Content for Button 1</div>}
      {activeButton === 'button2' && <div>Content for Button 2</div>}
      {activeButton === 'button3' && <div>Content for Button 3</div>}
      {activeButton === 'button4' && <div>Content for Button 4</div>}
    </div>
  );
}

export default Roughtfil;
