import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'

const app = express()

// Connect DB
await connectDB()
await connectCloudinary()

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(express.json())
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send("API working"))
app.post('/clerk', clerkWebhooks)
app.use('/api/educator', educatorRouter)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
