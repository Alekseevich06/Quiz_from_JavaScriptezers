import React, { useState } from 'react'
import './MainPage.css'
import { Link } from 'react-router-dom'


function MainPage({user}) {
	const [count, setCount] = useState(0)
	return (
		<>
			<div>
			<h1 className='hello'>Добро пожаловать в Quiiiz</h1>
				<img className='patric' src="patrick-star.svg" alt="" />
				<Link to={'/categories'}>
				{user && 
				<button className='but' >Начать игру</button>
				}
				</Link>
			</div>
		</>
	)
}

export default MainPage
