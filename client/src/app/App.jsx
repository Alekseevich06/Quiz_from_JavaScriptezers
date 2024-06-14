import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../pages/category/Category'
import request from '../services/axios'
import NavBar from '../pages/NavBar/NavBar'
import MainPage from '../pages/MainPage/MainPage'
import './App.css'
import Question from '../pages/Question/Question'

function App() {
	const [user, setUser] = useState(null)
	const [categories, setCategories] = useState([])
	const axiosCategory = async () => {
		const { data } = await request.get('/categories')
		// console.log(data.categories);
		if (data.message === 'success') {
			setCategories(data.categories)
		}
	}
	const loadUser = async () => {
		try {
			await request.get('/token/refresh').then(data => {
				console.log(data)
				const { accessToken, user } = data.data
				setUser(user)
				SetAccessToken(accessToken)
			})
		} catch ({ message }) {
			return console.log(message)
		}
	}

	useEffect(() => {
		axiosCategory()
		loadUser()
	}, [])

	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<div className='App'>
				<Routes>
					<Route path='/' element={<MainPage user={user}/>} />
					<Route
						path='/categories'
						element={<Category categories={categories} />}
					/>
					<Route
						path='/categories/:categoryId/question/:questionId'
						element={<Question categories={categories} />}
					/>
					<Route path='*' />
				</Routes>
			</div>
		</>
	)
}

export default App
