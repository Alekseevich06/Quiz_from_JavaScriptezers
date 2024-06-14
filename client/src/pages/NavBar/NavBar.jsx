import React, { useEffect, useState } from 'react'
import './NavBar.css'
import RegistrationModal from '../Modals/RegistrationModal'
import LoginModal from '../Modals/LoginModal'
import { NavLink } from 'react-router-dom'
import request, { SetAccessToken } from '../../services/axios'

const NavBar = ({ setUser, user }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
	useEffect(() => {
	}, [user])
	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const openLoginModal = () => {
		setIsLoginModalOpen(true)
	}

	const closeLoginModal = () => {
		setIsLoginModalOpen(false)
	}

	const logoutUser = async () => {
		await request.get('/auth/logout')
		setUser(null)
		SetAccessToken('')
		window.location.href = '/'
	}
	return (
		<nav className='spongebob-nav'>
			<div className='nav-logo' onClick={()=>window.location.href = '/'}>
				<img
					className='logoImg'
					src='pineapple-svgrepo-com.svg'
					alt=''
					style={{ width: '30px', marginRight: '20px' }}
				/>
				Спанч Боб
			</div>
			<ul className='nav-links'>
				{/* <li className='nav-item'>Главная будка</li> */}
				{user && user ? (
					<>
						<li className='nav-logo'>Привет, {user.name}</li>
						<li className='nav-logo'>Счет: {user.score}</li>
						<li className='nav-item' onClick={logoutUser}>
							Выход
						</li>
					</>
				) : (
					<>
						<li className='nav-item' onClick={openLoginModal}>
							Логейшин
						</li>
						<li className='nav-item' onClick={openModal}>
							Регистрейшин
						</li>
					</>
				)}
			</ul>
			{isModalOpen && (
				<RegistrationModal onClose={closeModal} user={user} setUser={setUser} />
			)}
			{isLoginModalOpen && (
				<LoginModal onClose={closeLoginModal} user={user} setUser={setUser} />
			)}
		</nav>
	)
}

export default NavBar
