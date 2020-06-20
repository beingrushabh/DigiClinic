const passport = require('passport');
const Localstrategy = require('passport-local');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function validate(username,password,done){
    try{
        const user = await User.findOne({userId:username});
        if(!user) return done(null,false,{userIdErr:'Incorrect Username'});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return done(null,false,{passwordErr:'Incorrect Password'});
        return done(null,user);
    }
    catch(e){
        return done(e);
    }
}

passport.use(new Localstrategy({
    usernameField: 'userId',
    passwordField: 'password'
},validate));

passport.serializeUser(function(user,done){
    // console.log("called");
   done(null,user._id);
});

passport.deserializeUser(async function(id,done){
   const user = await User.findById(id);
   // console.log(user,"Jeel",id);
   done(null,user);
});


// console.log("jeel 34");