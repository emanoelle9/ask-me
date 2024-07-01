const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const port = 3000

connection
        .authenticate()
        .then(() => {
            console.log("Banco de daods conectado com sucesso!")
        }).catch((msgErro)=>{
            console.log(msgErro)

        })

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render("index")
})

app.get('/perguntar', (req, res) =>{
    res.render('perguntar')
})

app.listen(port, (erro) =>{
    if(erro){
        console.log("Erro ao iniciar o servidor")
    }else{
        console.log(`Servidor rodando em https://localhost:${port}`)
    }
})