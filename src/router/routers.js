const { Router } = require("express")
const dados = require("../data.json")
const Screping = require("../dadosFut")

const router = Router()

router.get("/", (req, res) => {
    res.send({ComoUsar: "Para usar a api use /api"})
})

router.get("/api", (req, res) => {
    function Roda(){
        return Screping()
    }
    Roda()
    res.send(dados)
})

module.exports = router;