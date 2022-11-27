const mongoose = require('mongoose')
require('../models/Aluno')
const Aluno = mongoose.model('alunos')

module.exports = class AlunoController{
    static formularioAluno(req, res){
        res.render('alunos/formulario')
    }
    static cadastrarAluno(req, res){
        var erros = []
        if(!req.body.nome){
            erros.push({texto: "Nome inválido"})
        }
        if(!req.body.email){
            erros.push({texto: "E-mail inválido"})
        }
        if(!req.body.endereco){
            erros.push({texto: "Endereço inválido"})
        }
        if(!req.body.cep){
            erros.push({texto: "CEP inválido"})
        }
        if(!req.body.cidade){
            erros.push({texto: "Cidade inválida"})
        }
        if(erros.length > 0){
            res.render("alunos/formulario", {erros: erros})
        }else{
            const aluno = {
                nome: req.body.nome,
                email: req.body.email,
                endereco: req.body.endereco,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep
            }
            new Aluno(aluno).save().then(()=>{
                req.flash("success_msg", "Aluno salvo com sucesso!")
                res.redirect('/alunos')
            }).cath((erro)=>{
                req.flash("error_msg", `Erro ao salvar: ${erro}`)
                req.redirect('/alunos')
            })
        }

    }
    static async listaralunos(req, res){
        const alunos = await Aluno.find(req.params.id)
        res.render('alunos/listaalunos', { alunos })      
    }

    static async deletarralunos(req, res){
        const alunos = await Aluno.find(req.params.id)
        res.render('alunos/listaalunos', { alunos })      
    }
}