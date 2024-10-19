import React, { useState } from 'react';
import { icons } from '../utils/icons';

export const Button = ({description,action, currentIcon = ""}) => { 

  return(
    <button onClick={action} className='row gap-5'>
      {currentIcon && icons[currentIcon]()}
      {description}
    </button>
  )
}