import express from "express";
import viewRouter from './routes/views.router.js'
import __dirname from "./utils.js";
import handlebars from 'express-handlebars'

const app = express()

app.engine("handlebars", handlebars.engine());

app.set('views', __dirname + "/views");
app.set('view engine', "handlebars");

app.use('/', viewRouter)

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

/* app.use('/api/products',productsRouter)
app.use('/api/session',sessionRouter) */

const server = app.listen(8080,()=>console.log('Server arriba: 8080'))