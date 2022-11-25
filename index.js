// configuração inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


// forma de ler json / middleware
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//rotas da API
const rotasMudas = require('./routes/rotasMudas')

app.use('/mudas', rotasMudas)

// rota inicial // endpoint
app.get('/', (req, res) => {

    // mostrar requisição
    res.json({ massage: 'Mostrar requisições' })

})

//entregar uma porta

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent (process.env.DB_PASSWORD)

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiclustermaisarvore.7k4spzi.mongodb.net/bancoapima?retryWrites=true&w=majority`
)
.then(() => {
    console.log('Conectado ao MongoDB!')
})

.catch((err) => console.log(err))


const PORT = process.env.PORT || 8089
    app.listen(PORT,()=> {
      console.log("Servidor rodando!");
    })
