const { Router } = require("express")
const dados = require("../data.json")
const Screping = require("../dadosFut")

const router = Router()

router.get("/", (req, res) => {
    res.send({ComoUsar: "Para atualiza os dados da api use /api", dados} )
})

router.get("/api", (req, res) => {
    function Roda(){
        Screping()
    }
    Roda()
    res.send(dados)
})

module.exports = router;
    