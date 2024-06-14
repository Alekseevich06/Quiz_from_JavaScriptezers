import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../page/category/Category'
import request from '../services/axios'

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
    <Routes>
      <Route path='/categories' element={<Category category={category}/>}/>
      <Route path='*' />
    </Routes>
    </>
  )
}

export default App
