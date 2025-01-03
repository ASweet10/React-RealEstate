import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import propertyRoutes from './routes/propertyRoute.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/test", (req, res)=> {
    res.send("Testing testing")
})

app.use('/api', propertyRoutes)

app.listen(8000, () => {
    console.log(`Listening on port 8000`)
})