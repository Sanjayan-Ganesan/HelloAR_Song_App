import React, { useState } from 'react';
import './songs.css';
import Modal from './Modal';

function Songs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createModalData = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mainContainer">
      <div className="logoContainer">
      <img
          src={
            "https://media.licdn.com/dms/image/C510BAQEIUanjf8LZTw/company-logo_200_200/0/1630586552040/helloar_logo?e=2147483647&v=beta&t=zyHuem3O0MNDrm_YbIBXbijM61oKodp6lyT_cpheIWA"
          }
          alt={"LOGO"}
          className="logo"
        />
      </div>
      <div className="songContainer">
        <div className="topContainer">
          <p>Welcome!</p>
          <button className="addsongbtn" onClick={createModalData}>
            Add Song
          </button>
        </div>
              {isModalOpen && <Modal closeModal={closeModal} />}
        <div></div>
      </div>
    </div>
  );
}

export default Songs;
