import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit'

// Middleware
app.use(cors())
app.use(express.json())

// Database connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running', port: PORT })
})

app.get('/api/status', (req, res) => {
  res.status(200).json({
    message: 'OctoFit Tracker API',
    version: '0.0.1',
    backend_port: PORT,
    frontend_port: 5173,
    mongodb_port: 27017
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker Backend running on port ${PORT}`)
  console.log(`Frontend running on port 5173`)
  console.log(`MongoDB running on port 27017`)
})
