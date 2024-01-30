const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({message: 'Kintech'})
})

router.get('/login', () => {})

router.post('/login', ()=>{})


router.get('/post',(req,res)=>{
    res.json({message: 'post'})
})


module.exports = router