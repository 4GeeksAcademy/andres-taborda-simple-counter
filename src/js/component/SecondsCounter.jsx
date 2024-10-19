import React, { useState, useEffect } from 'react';

export const SecondsCounter = ({ seconds }) => {

  
  const [secondsValues, setSecondsValues] = useState([]); 


  const showValues =  (seconds) => {
    const string = seconds.toString()
    
    const values = string.split("").reverse()
    setSecondsValues(values)
    
  }

  useEffect(() => {
    showValues(seconds)
  }, [seconds]);

  
  return(
    <div className='container-fluid d-flex bg-dark text-light justify-content-center gap-5 py-5'>
      <div className="valueContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
        </svg>
      </div>
      <div className='valueContainer'>
        {
          secondsValues[6] ? secondsValues[6] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[5] ? secondsValues[5] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[4] ? secondsValues[4] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[3] ? secondsValues[3] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[2] ? secondsValues[2] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[1] ? secondsValues[1] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[0] ? secondsValues[0] : 0
        }
      </div>
    </div>
  )
}