const express = require("express");
const request = require("request");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect(data.'mongodb://localhost/ride', {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
    console.log(err.message);
    process.exit(1);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	console.log("request acepted");
	res.status(200).json({ error: "error" });
	next();
});

app.listen(3000, function() {});
