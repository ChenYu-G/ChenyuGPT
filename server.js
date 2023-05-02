const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 8000

app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', async (req, res) => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: req.body.message }],
			temperature: 0.7,
			max_tokens: 10,
		}),
	}
	try {
		const response = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options
		)
		const data = await response.json()
		res.send(data)
	} catch (error) {
		console.log(error)
	}
})

app.listen(PORT, () => console.log(PORT))
