import dotenv from 'dotenv'
import app from './app'
import connectDB from './config/db'

//  Load environment variables
dotenv.config()

//  Connect to mongoDB
connectDB()

const port = process.env.PORT || 5000

//  Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port} `)
})