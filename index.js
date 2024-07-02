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
app.use(express.static('public'))

app.use(bodyparser.urlencoded({extended:false}))

app.get('/', (req, res) =>{
    //SELECT * FROM pergunta
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC']
    ]}).then(perguntas =>{
        res.render('index',{
            perguntas: perguntas
        })
    })
})

app.get('/perguntar', (req, res) =>{
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) =>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect('/')
    })
})

app.listen(port, (erro) =>{
    if(erro){
        console.log("Erro ao iniciar o servidor")
    }else{
        console.log(`Servidor rodando em https://localhost:${port}`)
    }
})