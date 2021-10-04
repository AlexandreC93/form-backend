let express = require('express')
let exphbs = require('express-handlebars')

let app = express()



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static("public"))



app.get('/login', function (req, res) {
    res.render('home')

})

app.get('/maison', function (req, res) {
    res.render('maison')


})

app.use(express.urlencoded({ extended: true }))
// app.use(express.json());
app.post('/login', function (req, res) {
    console.log(req.body);
    res.redirect("/maison")
})

app.listen(3000)
