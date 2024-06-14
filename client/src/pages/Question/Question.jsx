import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../services/axios'

function Question({ categories, setUser, user }) {
	let { categoryId, questionId } = useParams()
	const [question, SetQuestion] = useState(null)
	const [inpAnsw, setInpAnsw] = useState('')
	const [rightAns, setRigthAnsw] = useState('')

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
	}, [questionId, categoryId, categories])

	const checkAnswers = async () => {
		let score = user.score + 10
		if (inpAnsw.toLowerCase().trim() === question.answer.toLowerCase().trim()) {
			setRigthAnsw('Правильно!')
			await request.patch(`/auth/${user.id}`, { score }).then(data => {
				// console.log(data.data.user)
				setUser(() => data.data.user)
			})
		} else {
			setRigthAnsw(`Так не надо! Надо вот так: ${question.answer}`)
		}
		setInpAnsw('')
	}

	// console.log('categoryId', categoryId, 'questionId', questionId)

	return (
		<div>
			{question && (
				<>
					<h2>{question && question.name}</h2>
					<input
						type='text'
						value={inpAnsw}
						placeholder='Ваш ответ'
						onChange={e => setInpAnsw(e.target.value)}
					></input>
					<button type='submit' onClick={checkAnswers}>
						Чек
					</button>

					<h3>{rightAns}</h3>
					{+questionId === 7 || +questionId === 15 ? (
						<Link to={`/categories`}>
							<button>На базу</button>
						</Link>
					) : (
						<Link to={`/categories/${categoryId}/question/${+questionId + 1}`}>
							<button
								onClick={() => {
									setRigthAnsw('')
									setInpAnsw('')
								}}
							>
								Далее
							</button>
						</Link>
					)}
				</>
			)}
		</div>
	)
}

export default Question
