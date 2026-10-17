import express from 'express'
import { GoogleGenAI } from '@google/genai'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())

const PORT = 3001

app.post('/api/agent', async (req, res) => {
  try {
    const { task, agentName, agentRole, previousResults = [] } = req.body

    if (!task || !agentName || !agentRole) {
      return res.status(400).json({
        error: 'Task, agent name, and role are required.',
      })
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is missing from your .env file.',
      })
    }

    const ai = new GoogleGenAI({ apiKey })

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
You are the ${agentName} in the Singularity AI team.
Your responsibility: ${agentRole}

Business task:
${task}

Results from agents who worked before you:
${JSON.stringify(previousResults, null, 2)}

Do your own role-specific analysis.
State your findings, recommended actions, assumptions, and blockers.
Do not claim to have performed real-world actions you did not perform.
`,
    })

    res.json({ reply: response.text || 'No response returned.' })
  } catch (error) {
    console.error('Agent request failed:', error.message)
    res.status(500).json({
      error: 'The agent could not complete its request. Check the server terminal.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Singularity backend running at http://localhost:${PORT}`)
})
