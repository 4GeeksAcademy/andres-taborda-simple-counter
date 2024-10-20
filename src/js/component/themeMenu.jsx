import React from 'react';

export const ThemeMenu = ({changeTheme, isPlaying}) => {


  return(
    <><hr className="w-75 mx-auto mb-2" /><div className="container-fluid text-center">
      <h2 className={`fw-bold ${!isPlaying ? 'text-white' : 'text-darck'}`}>Select Color Theme</h2>
      <div className="container">
        <button className="theme-button btn-theme-primary mx-3" onClick={() => changeTheme("primary")}></button>
        <button className="theme-button btn-theme-secondary mx-3" onClick={() => changeTheme("secondary")}></button>
        <button className="theme-button btn-theme-tertiary mx-3" onClick={() => changeTheme("tertiary")}></button>
      </div>
    </div></>		
  )
}