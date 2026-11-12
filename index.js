document.getElementById("Acerca").addEventListener("click",function(){
window.alert("EcoHato es una Pagina web diseñada para el seguimiento de la quebrada el hato en el sector pedegral bajo, Con el proposito de eliminar o dismuir las grandes cantidades de desecho arrojados sobre esta ");
});

//registro
document.getElementById("Regi").addEventListener("click", function () {
    const Usuario = document.getElementById("Usu");
    const contra = document.getElementById("Contra");
    if(Usuario.value=="" && contra.value == ""){
window.alert("Los dos campos del formulario también sirven para registrarte");
    }
    /*else if (){

    }*/
    else {
        window.alert("aqui va el registro");
        //registrarse
    }
});

//cambio tab
let sesionIniciada = false;
//tab
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const textR = document.getElementById("TextR");
const enviarReporte = document.getElementById("Reporte");

function mostrarTab(numero) {
    tab1.classList.remove("active");
    tab2.classList.remove("active");

    if (numero === 2) {
        tab2.classList.add("active");
        console.log(tab2.scrollLeft);
    } else {
        tab1.classList.add("active");
    }
}

document.getElementById("btnInicio").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarTab(1);
});

document.getElementById("btnReportes").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarTab(2);

});

document.getElementById("Reporte").addEventListener("click", function (event) {
    if (!sesionIniciada) {
        window.alert("Inicia sesión para poder escribir un reporte.");
        textR.value="";
        return;
    }

    const mensaje = textR.value.trim();
    if (mensaje === "") {
        window.alert("Escribe un reporte.");
        return;
    }

    const usuario = document.getElementById("Usu").value ;
    const hora = new Date().toLocaleTimeString("es-CO", {
        hour: "2-digit",
        minute: "2-digit"
    });
    const lista = document.getElementById("listaReportes");
    const linea = usuario + " - " + hora + "\n" + mensaje;
    lista.innerHTML

    lista.value = lista.value === "" ? linea : lista.value + "\n\n" + linea;
    textR.value = "";
});


document.getElementById("Inicio").addEventListener("click", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("Usu").value;
    const contra = document.getElementById("Contra").value;

    if (usuario === "" && contra === "") {
        window.alert("Escribe el usuario y la contraseña.");
        return;
    }
    if (usuario === "" && contra != "") {
        window.alert("Falta el usuario");
        return;
    }
    if (usuario != "" && contra === "") {
        window.alert("Falta La Contraseña");
        return;
    }

    sesionIniciada = true;
    enviarReporte.disabled = false;

    document.getElementById("loginContenido").hidden = true;
    const aviso = document.getElementById("sesionActiva");
    aviso.hidden = false;
    aviso.textContent ="Sesion Iniciada";
});

    
    
