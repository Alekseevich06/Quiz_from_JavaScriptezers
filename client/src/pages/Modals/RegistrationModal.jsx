import React from 'react'
import './RegistrationModal.css'
import request, { SetAccessToken } from '../../services/axios'

const RegistrationModal = ({ onClose, setUser, user }) => {
	const [signUpForm, setSignUpForm] = React.useState({
		name: '',
		email: '',
		password: '',
	})

	const handleSubmit = async event => {
    try {
      event.preventDefault()
      const result = await request.post('/auth/registration', signUpForm)
			// console.log(result)
			setUser(result.data.user)
			SetAccessToken(result.data.accessToken)
      onClose()
		} catch ({message}) {
      console.log(message);
    }
	}

	return (
		<div className='modal-overlay'>
			<div className='modal'>
				<button className='close-button' onClick={onClose}>
					&times;
				</button>
				<h2>Регистрация</h2>
				<form className='registration-form' onSubmit={handleSubmit}>
					<input
						type='text'
						value={signUpForm.name}
						onChange={elem =>
							setSignUpForm({
								...signUpForm,
								name: elem.target.value,
							})
						}
						placeholder='Имя пользователя'
						required
					/>
					<input
						type='email'
						value={signUpForm.email}
						onChange={elem =>
							setSignUpForm({
								...signUpForm,
								email: elem.target.value,
							})
						}
						placeholder='Электронная почта'
						required
					/>
					<input
						type='password'
						value={signUpForm.password}
						onChange={elem =>
							setSignUpForm({
								...signUpForm,
								password: elem.target.value,
							})
						}
						placeholder='Пароль'
						required
					/>
					<button type='submit'>Зарегистрироваться</button>
				</form>
			</div>
		</div>
	)
}

export default RegistrationModal
