const express = require("express");
const path= require("path")

const app = express()

const publicPath = path.resolve(__dirname,"./public")


app.use(express.static(publicPath) ); //Queremos tener la carpeta public como un recurso de archivos estaticos para siempre poder consumirla.

app.listen(3000, () => { console.log( "Servidor corriendo en el puerto 3000");


app.get('/home',(req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});
app.get('/register',(req,res) => {
    res.sendFile(path.resolve('./views/register.html'));
});
app.get('/login',(req,res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.post('/',(req,res) => {
    res.sendFile(req.body);
});






})