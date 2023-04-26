import Main from "../components/Main/Main"
import SideBar from "../components/Sidebar/Sidebar"
import { useState, useEffect } from "react"
import "./App.css"

function App() {
	const [message, setMessage] = useState(null)
	const [currentTitle, setCurrentTitle] = useState(null)
	const [previousChats, setPreviousChats] = useState([])
	const [value, setValue] = useState("")

	useEffect(() => {
		console.log(currentTitle, value, message)
		if (!currentTitle && value && message) {
			setCurrentTitle(value)
		}
		if (currentTitle && value && message) {
			setPreviousChats((prevChats) => [
				...prevChats,
				{ title: currentTitle, role: "user", content: value },
				{ title: currentTitle, role: message.role, content: message.content },
			])
		}
	}, [message, currentTitle])
	console.log(previousChats)

	const currentChat = previousChats.filter(
		(prevChat) => prevChat.title === currentTitle
	)
	const uniqueTitles = Array.from(
		new Set(previousChats.map((prevChat) => prevChat.title))
	)

	return (
		<div className='App'>
			<Main
				message={message}
				setMessage={setMessage}
				value={value}
				setValue={setValue}
				currentTitle={currentTitle}
				currentChat={currentChat}
			/>
			<SideBar
				setMessage={setMessage}
				setValue={setValue}
				setCurrentTitle={setCurrentTitle}
				uniqueTitles={uniqueTitles}
			/>
		</div>
	)
}

export default App
