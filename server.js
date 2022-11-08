let express = require("express");
let app = express();

//para referencia imagenes, js , html y estilos  estaticos , uno en cada carpeta
app.use(express.static(__dirname+'/public'));
//carpeta views interpretyados con EJS
app.set('views',__dirname+'/views');
//se establece motor de vistas de express con EJS
app.set('view engine','ejs');

//POST de Index hacia Resultado
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.get("/index",function (request,response) {
    response.render("index");
})

app.post('/index',function(request,response){
    let resultado = request.body;
    response.render('resultado',{resultado});
})


//POST de Resultado hacia Index
app.post('/resultado',function(request,response){
    response.redirect('index')
})






//siempre al final
app.listen(8000,function(){
    console.log("escuchando en el puerto 8000 la pagina http://localhost:8000/index");
})
