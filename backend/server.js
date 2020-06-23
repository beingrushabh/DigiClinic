const path = require("path");
const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const expand = require("dotenv-expand");
expand(dotenv);

const BlogsApi = require("./routes/blogs");
const Auth = require("./routes/auth");
require("./config/passport");

const mongoose = require("mongoose");

const morgan = require("morgan");

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/blogs", BlogsApi);
app.use("/auth", Auth);

app.get("/", (req, res) => {
	res.send("Hey there");
});

mongoose
	.connect("mongodb://localhost:27017/digiHospital", {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		const PORT = process.env.PORT || 4769;

		app.listen(PORT, (err) => {
			if (err) {
				console.log(err);
				return;
			}

			console.log("Listening to PORT => ", PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});
