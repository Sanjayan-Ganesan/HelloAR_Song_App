import React from 'react';
import './Modal.css';

import { useState } from 'react';

function Modal({ closeModal }) {
    const [songName, setsongName] = useState('');
    const [songLink, setsongLink] = useState('');
    const [songSource, setsongSource] = useState('');

    
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="songAddHeadingModal">
          <p className="titleModalSong" style={{ cursor: "pointer" }}>
            Add Song
          </p>
          <img
            src={
              "https://cdn3.iconfinder.com/data/icons/rounded-monosign/142/delete-512.png"
            }
            onClick={handleCloseModal}
            style={{ width: "15px", height: "15px", cursor: "pointer" }}
          />
        </div>

        <div className="songForm">
          <label>Song Name:</label>
          <input
            type="text"
            value={songName}
            placeholder="Song Name"
            onChange={(e) => {
              setsongName(e.target.value);
            }}
          />
          <label>Song Link:</label>
          <input
            type="text"
            value={songLink}
            placeholder="URL"
            onChange={(e) => {
              setsongLink(e.target.value);
            }}
          />
          <label>Song Source:</label>
          <input
            type="text"
            value={songSource}
            placeholder="Source Name"
            onChange={(e) => {
              setsongSource(e.target.value);
            }}
          />

          <div className="button-container">
            <button className='modalbtn'>Cancel</button>
            <button className='modalbtn' style={{backgroundColor:"#1890FF",color:"white"}}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
