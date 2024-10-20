import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

export const SecondsCounter = ({ seconds }) => {
  const {themeApp} = useContext(ThemeContext)  
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
    <div className={`container-fluid d-flex justify-content-center gap-5 py-5 theme ${themeApp}`}>
      <div className="valueContainer">
        <i className="far fa-clock text-dark"></i>
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