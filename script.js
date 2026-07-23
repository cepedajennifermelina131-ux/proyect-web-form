document.getElementById("formulario").addEventListener("submit", function(event){

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre === "" || email === "" || telefono === "" || mensaje === ""){
        alert("Debe completar todos los campos.");
        event.preventDefault();
        return;
    }

    alert("Consulta enviada correctamente.");
});