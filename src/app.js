const express = require("express")
const dados = require("./data.json")
const geraDaos = require("./dadosFut")

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    
    res.json({
        dados
    })
})
app.use(geraDaos)

app.listen(port, () => {
    console.log("http://localhost:" + port)
})