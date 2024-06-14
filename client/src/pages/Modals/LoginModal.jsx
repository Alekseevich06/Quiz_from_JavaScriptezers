import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Входите</h2>
        <form className="registration-form">
          <input type="email" placeholder="Электронная почта" required />
          <input type="password" placeholder="Пароль" required />
          <button type="submit">тыкай</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
