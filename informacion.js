var datos = [];

var agregar = function(){

    var nombreObtenido = document.getElementById("nombre").value
    var apellidoObtenido = document.getElementById("apellido").value
    var direccionObtenida = document.getElementById("direccion").value
            
    console.log(nombreObtenido)
    console.log(apellidoObtenido)
    console.log(direccionObtenida)

    var objeto = {
        nombre: nombreObtenido,
        apellido: apellidoObtenido,
        direccion: direccionObtenida
    }

    datos.push(objeto)
    console.log(datos)
    cargardatos()
    var cadenadetexto = JSON.stringify(datos)
    localStorage.setItem('datos', cadenadetexto)
}


var cargardatos = function(){
    var contenedor = document.getElementById('contenedor')

    contenedor.innerHTML = ""

    for (let i = 0; i < datos.length; i++)
    {
    
        var contenido =     '<div class="item">'+
                            '<div class="nombre"> '+ datos[i].nombre +' </div>'+
                            '<div class="apellido"> '+ datos[i].apellido +' </div>'+
                            '<div class="direccion"> '+ datos[i].direccion +' </div>'+
                            '</div>'

        contenedor.innerHTML += contenido
    
    }
}
var cargarlocalS = function(){
    var info = JSON.parse(localStorage.getItem('datos'))
    if(info == null){
        datos = []
    }
    else{
        console.log(datos)
        datos = info 
        console.log(datos)
        cargardatos()
    }   
}

cargarlocalS()