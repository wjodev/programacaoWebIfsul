var express = require('express');
var router = express.Router();

const AlunoController = require('../controllers/AlunoController')


router.get('/formulario', AlunoController.formularioAluno)
router.get('/', AlunoController.listaralunos)
router.post('/cadastrarAluno', AlunoController.cadastrarAluno)
router.post('/deletarAluno', AlunoController.deletaraluno)
router.post('editarAlunoPost')
module.exports = router;
