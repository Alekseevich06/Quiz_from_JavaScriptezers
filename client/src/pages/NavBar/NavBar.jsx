import React, { useState } from 'react'
import './NavBar.css'
import RegistrationModal from '../Modals/RegistrationModal'
import LoginModal from '../Modals/LoginModal'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

	const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

	return (
		<nav className='spongebob-nav'>
			
			<div className='nav-logo'>
			<img className="logoImg" src="pineapple-svgrepo-com.svg" alt="" style={{width: "30px", marginRight: "20px"}}/>
				 Спанч Боб</div>
			<ul className='nav-links'>
				
				
				{/* <li className='nav-item'>Главная будка</li> */}

				
				
				<li className='nav-item' onClick={openLoginModal}>Логейшин</li>
				<li className='nav-item' onClick={openModal} >Регистрейшин</li>
			</ul>
			{isModalOpen && <RegistrationModal onClose={closeModal} />}
			{isLoginModalOpen && <LoginModal onClose={closeLoginModal}  />}
		</nav>
	)
}

export default NavBar
