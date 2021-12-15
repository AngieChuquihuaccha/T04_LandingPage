
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
  
  app.get("/dbsfarmacia/cliente", (req, res) => {
    conexion.query("SELECT * FROM CLIENTE", (error, filas) => {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    });
  });
  
  app.post("/dbsfarmacia/cliente", (req, res) => {
    let data = {
      NOMCLI: req.body.NOMCLI,
      APECLI: req.body.APECLI,
      DNICLI: req.body.DNICLI,
      CELCLI: req.body.CELCLI,
      EMACLI: req.body.EMACLI,
      DOMCLI: req.body.DOMCLI
    };
    let sql = "INSERT INTO CLIENTE SET ?";
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