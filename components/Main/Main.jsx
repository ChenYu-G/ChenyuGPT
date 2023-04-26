import React from "react"
import "./style.css"
import { BsSend } from "react-icons/bs"
const Main = ({
	message,
	value,
	setMessage,
	setValue,
	currentTitle,
	currentChat,
}) => {
	const handleInputChange = (e) => {
		setValue(e.target.value)
	}

	const getMessages = async (e) => {
		e.preventDefault()

		const options = {
			method: "POST",
			body: JSON.stringify({
				message: value,
			}),
			headers: {
				"content-type": "application/json",
			},
		}
		try {
			const response = await fetch("http://localhost:8000/completions", options)
			const data = await response.json()
			setMessage(data.choices[0].message)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<main>
			{!currentTitle && <h1>ChenyuGPT</h1>}
			<ul className='feed'>
				{currentChat.map((chatMessage, index) => (
					<li key={index}>
						<p>{chatMessage.role}</p>
						<p>{chatMessage.content}</p>
					</li>
				))}
			</ul>
			<section className='bottom-section'>
				<form className='input-container'>
					<input
						placeholder='Send a message ...'
						value={value}
						onChange={handleInputChange}
					/>
					<button onClick={getMessages}>
						<BsSend />
					</button>
				</form>
			</section>
		</main>
	)
}

export default Main
