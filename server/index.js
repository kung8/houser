require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require ('express-session')
const {CONNECTION_STRING,SESSION_SECRET,SERVER_PORT} = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json())

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db);
    // console.log('I am running!');
    app.listen(SERVER_PORT,()=>console.log(`Don't give up from ${SERVER_PORT}`))
}
    
    

).catch(err =>{
    return err
});

app.use(session({
    secret:SESSION_SECRET,
    resave:false, 
    saveUninitialized:false,
    cookie: {
        maxAge:1000*60*60
    }
}))

//ENDPOINTS WILL BE HERE
app.get('/api/houses',ctrl.getHouses);
