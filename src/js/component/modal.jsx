import React from 'react';

export const Modal = ({message}) => {
  
  return (
    <>
      <button type="button" id='modalButton' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">¡Hey!</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {message}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}