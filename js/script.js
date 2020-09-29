var Msg = (nombre, sexo) => `${sexo == "masculino" ? "Bienvenido " : "Bienvenida "} ${nombre}`;
function Mensaje() {
    var nombre = document.getElementById('Nombre').value;
    var sexo = document.getElementById('Sexo').value;
    document.getElementById('Mensaje').value = Msg(nombre, sexo);
}
