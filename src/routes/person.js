const router = require("express").Router()

router.get("/",(req,res)=>{


    const result = {
        "name":"Nome da pessoa",
        "id":"Id da pessoa"
    }
    res.send(result)
})

module.exports = router