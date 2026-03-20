const { Router } = require("express");



const router = Router()

router.get('/users', (req, res)=>{

    res.json({
        name: 'Karim Khan',
        age: 33
    })
})

router.post('/users', (req, res, next)=>{

    try {
        const name = req.body || ""
        const age = req.body || ""

        if(!name || !age){
            throw new Error('name and age is required')
        }

        res.json({message : 'user created successfully'})
    } catch (error) {
        next(error)
    }
})


module.exports = router;