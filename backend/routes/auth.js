const express = require("express");
const router = express.Router();

const passport = require("passport");

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const isLoggedIn = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.sendStatus(401);
	}
};

router.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: true,
		saveUninitialized: true,
		store: new MongoStore({
			mongooseConnection: mongoose.connection,
			url: process.env.MONGO_URL,
		}),
	})
);

router.use(passport.initialize());
router.use(passport.session());

router.get("/success", isLoggedIn, (req, res) => {
	console.log("from the route => ", req.user.displayName);

	res.send("Auth Successful");
});

router.get("/failed", (req, res) => {
	res.send("Auth Failed");
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/auth/failed" }), (req, res) => {
	// Successful authentication, redirect home.
	res.redirect("/auth/success");
});

router.get("/logout", (req, res) => {
	req.user = null;
	req.logout();
	res.redirect("/");
});

module.exports = router;
