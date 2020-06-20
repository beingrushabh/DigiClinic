const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
	title: {
		type: Schema.Types.String,
		required: true,
	},
	content: {
		type: Schema.Types.String,
		required: true,
	},
	date: {
		type: Schema.Types.Date,
		required: true,
	},
	author: {
		type: Schema.Types.String,
		required: true,
	},
});

module.exports = mongoose.model("Blog", blogSchema);
