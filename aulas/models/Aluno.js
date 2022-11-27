const mongoose = require('../db/bancoMongoDB')
const Schema = mongoose.Schema

const Aluno = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento:{
        type: Date,
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    }
})
mongoose.model('alunos', Aluno)
