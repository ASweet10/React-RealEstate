import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dolphin12",
    database: "realestate",
})

app.get('/', (req, res) => {
    return res.json("Hello im the backend")
})

app.get('/reviews', () => {
    const reviews = "SELECT * FROM reviews"
    db.query(reviews, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
})