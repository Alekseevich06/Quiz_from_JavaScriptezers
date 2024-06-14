import React from 'react';
import './RegistrationModal.css';

const RegistrationModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Регистрация</h2>
        <form className="registration-form">
          <input type="text" placeholder="Имя пользователя" required />
          <input type="email" placeholder="Электронная почта" required />
          <input type="password" placeholder="Пароль" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
