var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbSFARMACIA",
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexión exitosa");
  }
});

app.get("/", function (req, res) {
  res.send("Ruta de inicio");
});

app.get("/api/cliente", (req, res) => {
  conexion.query("SELECT * FROM cliente", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

app.post("/api/cliente", (req, res) => {
  let data = {
    nameord: req.body.nameord,
    emaord: req.body.emaord,
    celord: req.body.celord,
    foonamord: req.body.foonamord,
    msgcord: req.body.msgcord
  };
  let sql = "INSERT INTO cliente SET ?";
  conexion.query(sql, data, function (error, results) {
    if (error) {
      throw error;
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});
