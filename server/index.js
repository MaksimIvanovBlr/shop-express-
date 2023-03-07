require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')

const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({messaage:'WORKING!!!'})
    
})



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.get('/', (req, res) => res.send('Hello World!'))
        app.listen(PORT, () => console.log(`Start server at on port ${PORT}!`))
        
    } catch (error) {
        console.log(error);
    }
}


start()