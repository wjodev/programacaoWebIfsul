const mongo = require('mongoose')

mongo.connect('mongodb://localhost/mvcmongo',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('****Conectado ao mongo*****')
}).catch((error)=>{
    console.log("Erro ao conectar ao MongoDB"+error)
})

module.exports = mongo