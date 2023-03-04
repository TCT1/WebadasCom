import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.render('landpage')
})

router.get('/concursos',(req,res)=>{
    res.render('concursos')
})

router.get('/frasesdimarco',(req,res)=>{
    res.render('frases')
})

router.get('/social',(req,res)=>{
    res.render('social')
})

router.get('/ajedrez',(req,res)=>{
    res.render('ajedrez')
})

export default router