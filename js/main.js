//Variables
let vehiculos = [];
let autos = [];
let motos = [];
let listadoGeneral = "";
let vehiculoFiltrado = "";
// Funcion constructora para los vehiculos
function agregarVehiculo(matricula, padron, marca, modelo, ano, tipo){
    this.matricula = matricula;
    this.padron = padron;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    if (tipo === "Auto" || tipo === "auto") {
        vehiculos.push({"Matricula":this.matricula, "Padron": this.padron, "Marca":this.marca, "Modelo": this.modelo, "Ano": this.ano, "Tipo": this.tipo})
    }else if (tipo === "Moto" || tipo === "moto") {
        vehiculos.push({"Matricula":this.matricula, "Padron": this.padron, "Marca":this.marca, "Modelo": this.modelo, "Ano": this.ano, "Tipo": this.tipo})
    }
}
//Funcion para filtrar vehiculo por matricula
function filtrarVehiculo(matricula){
    vehiculoFiltrado = "";
    let vehiculo = vehiculos.filter(vehiculo => vehiculo.Matricula == matricula);
    console.log(vehiculo[0]);
    vehiculoFiltrado = `| ${vehiculo[0].Matricula} | ${vehiculo[0].Padron} | ${vehiculo[0].Marca} | ${vehiculo[0].Modelo} | ${vehiculo[0].Ano} | ${vehiculo[0].Tipo}`
}
// Funcion para eliminar un vehiculo
function eliminarVehiculo(matricula) {
    vehiculos = vehiculos.filter(vehiculo => vehiculo.Matricula !== matricula);
}
//Funcion para filtrar entre autos, motos, o los dos.
function filtrarVehiculos(tipoVehiculo){
    listadoGeneral = '';
    if (tipoVehiculo == 1) {
        // Autos
        autos = vehiculos.filter(vehiculo => vehiculo.Tipo == "Auto" || vehiculo.Tipo == "auto");
        for (let i = 0; i < autos.length; i++) {
            const auto = autos[i];
            listadoGeneral += `| ${auto.Matricula} | ${auto.Padron} | ${auto.Marca} | ${auto.Modelo} | ${auto.Ano} | ${auto.Tipo} |\n`
        }
    }else if(tipoVehiculo == 2) {
        // Motos
        motos = vehiculos.filter(vehiculo => vehiculo.Tipo == "Moto" || vehiculo.Tipo == "moto");
        for (let i = 0; i < motos.length; i++) {
            const moto = motos[i];
            listadoGeneral += `| ${moto.Matricula} | ${moto.Padron} | ${moto.Marca} | ${moto.Modelo} | ${moto.Ano} | ${moto.Tipo} |\n`
        }
    } else if(tipoVehiculo == 3){
        // Los dos
        for (let i = 0; i < vehiculos.length; i++) {
            let vehiculo = vehiculos[i]
            listadoGeneral += `| ${vehiculo.Matricula} | ${vehiculo.Padron} | ${vehiculo.Marca} | ${vehiculo.Modelo} | ${vehiculo.Ano} | ${vehiculo.Tipo} |\n`
        }
    }
}
// Aplicacion/Menu
function aplicacionMain(){
    let opcionUsuario = Number(prompt("\nBienvenido al gestor de vehiculos, seleccione una opcion: \n\n 1 - Ver listado de vehiculos \n 2 - Agregar nuevo vehiculo \n 3 - Eliminar vehiculo \n 4 - Editar vehiculo \n 0 - Salir \n" ));
    let tipoVehiculo = Number('');
    let matricula = "";
    switch (opcionUsuario) {
        case 1:
            tipoVehiculo = prompt("\nIngrese que tipo de vehiculo desea mostrar: \n\n 1 - Autos \n 2 - Motos \n 3 - Todos \n")
            filtrarVehiculos(tipoVehiculo);
            alert("\n\nMatricula - Padron - Marca - Modelo - Año - Tipo \n" + listadoGeneral);
            aplicacionMain();
            break;
        case 2:
            matricula = prompt("Ingrese la matricula del vehiculo:");
            let padron = Number(prompt("Ingrese el padron del vehiculo:"));
            let marca = prompt("Ingrese la marca del vehiculo:");
            let modelo = prompt("Ingrese el modelo del vehiculo");
            let ano = Number(prompt("Ingrese el año del vehiculo"));
            let tipo = prompt("Ingrese si el vehiculo es un 'Auto' o una 'Moto':")
            agregarVehiculo(matricula, padron, marca, modelo, ano, tipo);
            alert("Se agrego el vehiculo al listado");
            aplicacionMain();
            break;
        case 3:
            matricula = prompt("Ingrese la matricula del vehiculo a eliminar:");
            filtrarVehiculo(matricula);
            alert("Se eliminara el siguiente vehiculo: \n\n" + vehiculoFiltrado)
            eliminarVehiculo(matricula);
            alert("Redirigiendo al menu principal...")
            aplicacionMain();
            break;
        case 4:
    
            break;
        case 0:
            break;
        default:
            alert("\nNo ingreso una opcion correcta, redirigiendolo al menu principal..." );
            aplicacionMain();
            break;
    }
}

aplicacionMain();