import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Question.css'


function Question({ categories }) {
  let { categoryId, questionId } = useParams();
  const [question, SetQuestion] = useState({});
  const [inpAnsw, setInpAnsw] = useState("");
  const [rightAns, setRigthAnsw] = useState("");

  useEffect(() => {
    for (let category of categories) {
      if (category.id === +categoryId) {
        for (let question of category.Questions) {
          if (+question.id === +questionId) {
            SetQuestion(question);
          }
        }
      }
    }
  }, [questionId, categoryId]);

  const checkAnswers = () => {
    if (inpAnsw.toLowerCase().trim() === question.answer.toLowerCase().trim()) {
      setRigthAnsw("Правильно!");
    } else {
      setRigthAnsw(`Так не надо! Надо вот так: ${question.answer}`);
    }
    setInpAnsw("");
  };

  // console.log('categoryId', categoryId, 'questionId', questionId)

  return (
    <div className='container'>
      <h1>{question && question.name}</h1>
      <input
	  className="input-bob"
        type="text"
        value={inpAnsw}
        placeholder="Ваш ответ"
        onChange={(e) => setInpAnsw(e.target.value)}
      ></input>
      <button className='button-bob' type="submit" onClick={checkAnswers}>
        Чек
      </button>

      <h3>{rightAns}</h3>
      {+questionId === 7 || +questionId === 15 ? (
        <Link to={`/categories`}>
          <button className='button-bob'>На базу</button>
        </Link>
      ) : (
        <Link to={`/categories/${categoryId}/question/${+questionId + 1}`}>
          <button className='button-bob'
            onClick={() => {
              setRigthAnsw("");
              setInpAnsw("");
            }}
          >
            Далее
          </button>
        </Link>
      )}
    </div>
  );
}

export default Question;
