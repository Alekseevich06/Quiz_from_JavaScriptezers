import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Question({ categories }) {
	let { categoryId, questionId } = useParams()
	const [question, SetQuestion] = useState({})

	useEffect(() => {
		for (let category of categories) {
			if (category.id === +categoryId) {
				for (let question of category.Questions) {
					if (+question.id === +questionId) {
						SetQuestion(question)
					}
				}
			}
		}
	}, [questionId, categoryId])

	// console.log('categoryId', categoryId, 'questionId', questionId)

	return (
		<div>
			<h2>{question && question.name}</h2>
			<h3>{question.answer}</h3>
			{+questionId === 7 || +questionId === 15 ? (
				<Link to={`/categories`}>
					<button>На базу</button>
				</Link>
			) : (
				<Link to={`/categories/${categoryId}/question/${+questionId + 1}`}>
					<button>Далее</button>
				</Link>
			)}
			Вопрос
		</div>
	)
}

export default Question
