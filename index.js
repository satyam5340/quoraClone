const express= require('express')
const port = 8000
const app = express()
const expressEjsLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
app.use(expressEjsLayouts)
app.use(express.urlencoded())
app.use(cookieParser())
//extraxct styles and scripts from subpages to the layout
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.use(express.static('assets'))
//use express router
app.use('/',require('./router'))
//setup the view engine
app.set('view engine','ejs')
app.set('views','./views')

app.listen(port,function(err){
    if (err){
        console.log(err,'error in starting the server')
        return;
    }
    console.log('server is up and running on port: ',port)
})