const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("./database");
const cors = require("cors");

//Settings
app.set("port", process.env.PORT || 3000); //process.env.PORT --> para que la aplicación use el puerto que nos de el SO

//Middlewares
app.use(morgan("dev")); //para ver en consola las peticiones
app.use(express.json()); //para que el server entienda JSON
app.use(cors({ origin: "http://localhost:4200" }));

//Routes
app.use("/api/contacts", require("./routes/contact.routes"));

//Starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port"));
});