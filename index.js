const express= require('express')
const port = 8000
const app = express()

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