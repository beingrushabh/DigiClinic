const path = require("path");
const express = require("express");
const app = express();

const BlogsApi = require("./routes/blogs");

const mongoose = require("mongoose");

const morgan = require("morgan");

const dotenv = require("dotenv").config();
const expand = require("dotenv-expand");
expand(dotenv);

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/blogs", BlogsApi);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend/html/index.html"));
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
