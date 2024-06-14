import React, { useState } from 'react'
import './MainPage.css'


function MainPage() {
	const [count, setCount] = useState(0)
	return (
		<>
			<div>
			<h1 className='hello'>Добро пожаловать в Quiiiz</h1>
				<img className='patric' src="patrick-star.svg" alt="" />
				<button className='but'>Начать игру</button>
			</div>
		</>
	)
}

export default MainPage
