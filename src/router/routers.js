const { Router } = require("express")
const dados = require("../data.json")

const router = Router()

router.get("/", (req, res) => {
    res.send(dados)
})

router.get("/api", (req, res) => {
    res.send(dados)
})

module.exports = router;