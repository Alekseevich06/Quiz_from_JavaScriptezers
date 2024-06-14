import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../pages/NavBar/NavBar'
import MainPage from '../pages/MainPage/MainPage'
import './App.css'

function App() {
	return (
		<>
			<NavBar />
      <div className='App'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					{/* <Route path='/loga' element={<Category />} /> */}
					{/* <Route path='/rega' element={<Category />} /> */}
					{/* <Route path='/caterogy/:categoryId' element={<Movie/>} /> */}
					{/* <Route path='*' element={<ErrorPage />} /> */}
				</Routes>
			</div>
		</>
	)
}

export default App
