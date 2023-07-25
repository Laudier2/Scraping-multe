const express = require("express")
const cors = require("cors")
const router = require("./router/routers")
require("./dadosFut")

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(router)
app.use(cors)


app.listen(port, () => {
    console.log("http://localhost:" + port)
})