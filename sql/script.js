const url = "http://localhost:3000/dbSFARMACIA/cliente/";
let resultados = '';
const formArticulo = document.querySelector("form");
const NOMCLI = document.getElementById("NOMCLI");
const APECLI = document.getElementById("APECLI");
const DNICLI = document.getElementById("DNICLI");
const CELCLI = document.getElementById("CELCLI");
const EMACLI = document.getElementById("EMACLI");
const DOMCLI = document.getElementById("DOMCLI");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
        e.preventDefault();
        if (opcion == 'crear') {
            if (NOMCLI.value == "" || APECLI.value == "" || DNICLI.value == "" || CELCLI.value == "" || EMACLI.value == "" || DOMCLI.value == "") {
                alert("Asegúrese de que todos los campos estén completos");
                return false;
            } else {
                console.log("Todos los campos están completos");
                fetch(
                    url,
                    {
                        method: 'POST',
                        headers: {
                            'content-Type':'application/json'
                        },
                        body: JSON.stringify(
                            {
                                NOMCLI: NOMCLI.value,
                                APECLI: APECLI.value,
                                DNICLI: DNICLI.value,
                                CELCLI: CELCLI.value,
                                EMACLI: EMACLI.value,
                                DOMCLI: DOMCLI.value
                            }
                        )
                    }
                )
                .then(
                    response => response.json()
                )
                .then(
                    response => location.reload()
                );
            }
        } else if(opcion == 'editar'){
            console.log("Activado el ");
        }
    }
);