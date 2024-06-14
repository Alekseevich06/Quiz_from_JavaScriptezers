
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../page/category/Category'
import request from '../services/axios'
import NavBar from '../pages/NavBar/NavBar'
import MainPage from '../pages/MainPage/MainPage'
import './App.css'

function App() {
  const [category, setCategory] = useState([])

  const oxiosCategory = async () => {
    const {data} = await request.get('/categories')
    console.log(1);
    // console.log(data.categories);
    if(data.message === 'success') {
      setCategory(data.categories)
      console.log(category);
    }
  }
  useEffect(() => {
    oxiosCategory()
  }, [])

  return (
    <>
    <NavBar />
      <div className='App'>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/categories' element={<Category category={category}/>}/>
      <Route path='*' />
    </Routes>
  </div>
    </>
  )
}

export default App
