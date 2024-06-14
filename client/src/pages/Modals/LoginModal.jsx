import React, { useRef } from 'react'
import './LoginModal.css'
import request, { SetAccessToken } from '../../services/axios'

const LoginModal = ({ onClose, setUser, user }) => {
	const [signInForm, setSignInForm] = React.useState({
		email: '',
		password: '',
	})
	const formRef = useRef(null)

	const handleSubmit = async event => {
		try {
			event.preventDefault()
			const res = await request.post('/auth/authorization', signInForm)
			setUser(() => res.data.user)
			SetAccessToken(res.data.accessToken)
			onClose()
		} catch ({ message }) {
			console.log(message)
		}
	}

	return (
		<div className='modal-overlay'>
			<div className='modal'>
				<button className='close-button' onClick={onClose}>
					&times;
				</button>
				<h2>Входите</h2>
				<form className='registration-form' onSubmit={handleSubmit}>
					<input
						type='email'
						value={signInForm.email}
						onChange={e =>
							setSignInForm({ ...signInForm, email: e.target.value })
						}
						placeholder='Электронная почта'
						required
					/>
					<input
						type='password'
						value={signInForm.password}
						onChange={e =>
							setSignInForm({ ...signInForm, password: e.target.value })
						}
						placeholder='Пароль'
						required
					/>
					<button type='submit'>тыкай</button>
				</form>
			</div>
		</div>
	)
}

export default LoginModal
