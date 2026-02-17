import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL!)

app.listen(4000, () => {
  console.log('Backend rodando na porta 4000')
})