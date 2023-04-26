import React from "react"
import "./style.css"
import { VscAdd } from "react-icons/vsc"
import { BsChatLeft } from "react-icons/bs"

const SideBar = ({ setMessage, setValue, setCurrentTitle, uniqueTitles }) => {
	const createNewChat = () => {
		setMessage(null)
		setValue("")
		setCurrentTitle(null)
	}

	const handleClick = (title) => {
		setMessage(null)
		setValue("")
		setCurrentTitle(title)
	}

	return (
		<aside className='dark'>
			<section className='sidebar'>
				<button className='dark-btn new-chat' onClick={createNewChat}>
					<VscAdd /> <p> new chat</p>
				</button>
				<div className='divider'></div>
				<ul className='cnv-history'>
					{uniqueTitles?.map((title, index) => (
						<li key={index} onClick={() => handleClick(title)}>
							{title}
						</li>
					))}
				</ul>
				<div className='divider'></div>
				<nav>
					<p>made by ChenYu</p>
				</nav>
			</section>
		</aside>
	)
}

export default SideBar
