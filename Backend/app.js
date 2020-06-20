const express = require('express');
const app = express();
const mongoose = require('mongoose');
const loginRegister = require('./routes/loginRegister');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const url = "mongodb+srv://jeel2308:Jeel@@2308@cluster0-hyk34.mongodb.net/Digital_Clinic?retryWrites=true&w=majority";

app.use(express.json());
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

mongoose.connection.once('open',function(){
   console.log("db connected");
});

app.use(session({
    secret: 'KEYBOARD CAT',
    store : new MongoStore({ mongooseConnection : mongoose.connection}),
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

app.use(loginRegister);

app.listen(5000,function(){
   console.log('server has started on 5000');
});