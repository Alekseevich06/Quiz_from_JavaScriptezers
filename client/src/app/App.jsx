import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/category/Category";
import request from "../services/axios";
import NavBar from "../pages/NavBar/NavBar";
import MainPage from "../pages/MainPage/MainPage";
import "./App.css";
import Question from "../pages/Question/Question";

function App() {
  const [categories, setCategories] = useState([]);

  const axiosCategory = async () => {
    const { data } = await request.get("/categories");
    // console.log(data.categories);
    if (data.message === "success") {
      setCategories(data.categories);
    }
  };
  useEffect(() => {
    axiosCategory();
  }, []);

  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/categories"
            element={<Category categories={categories} />}
          />
          <Route
            path="/categories/:categoryId/question/:questionId"
            element={<Question categories={categories} />}
          />
          <Route path="*" element={<h1>С ДР, Олег неМонгол! </h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
