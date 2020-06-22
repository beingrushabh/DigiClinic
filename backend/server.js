const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require('cors');
const dotenv = require("dotenv").config();
const expand = require("dotenv-expand");
const loginRegister = require('./routes/loginRegister');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const BlogsApi = require("./routes/blogs");
expand(dotenv);

const url = "mongodb+srv://jeel2308:Jeel@@2308@cluster0-hyk34.mongodb.net/Digital_Clinic?retryWrites=true&w=majority";
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

const corsOptions = {
    origin : "http://localhost:3000",
    credentials: true
}
app.use(cors(corsOptions));

app.use(morgan("short"));

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

app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/blogs", BlogsApi);

app.use(loginRegister);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend/html/index.html"));
});

app.listen(5000,function(){
   console.log('server has started on 5000');
});