//Variables
let vehiculos = [];
let autos = [];
let motos = [];
let listadoGeneral = "";
let vehiculoFiltrado = "";
// Funcion constructora para los vehiculos
function crearVehiculo(matricula, padron, marca, modelo, ano, tipo){
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
    let validarMatricula = vehiculos.find(vehiculo => vehiculo.Matricula === matricula);
    let vehiculo = vehiculos.filter(vehiculo => vehiculo.Matricula == matricula);
    if (validarMatricula) {
            vehiculoFiltrado = `| ${vehiculo[0].Matricula} | ${vehiculo[0].Padron} | ${vehiculo[0].Marca} | ${vehiculo[0].Modelo} | ${vehiculo[0].Ano} | ${vehiculo[0].Tipo}`
    } else {
        alert("No se encontro el vehiculo ingresado")
    }
}
// Funcion para eliminar un vehiculo
function eliminarVehiculo(matricula) {
    let validarMatricula = vehiculos.find(vehiculo => vehiculo.Matricula === matricula);
    if (validarMatricula) {
        vehiculos = vehiculos.filter(vehiculo => vehiculo.Matricula !== matricula);
        return true;
    }
    return false;
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
    } else if(tipoVehiculo == 4){
        // Los dos
        for (let i = 0; i < vehiculos.length; i++) {
            let vehiculo = vehiculos[i]
            listadoGeneral += `| ${vehiculo.Matricula} | ${vehiculo.Padron} | ${vehiculo.Marca} | ${vehiculo.Modelo} | ${vehiculo.Ano} | ${vehiculo.Tipo} |\n`
        } 
    } else{
        alert("No selecciono una opcion valida, redirigiendo al menu principal...")
    }
}
//Funcion para editar un registro de vehiculo
function editarVehiculo(matricula){
    let validarMatricula = vehiculos.find(vehiculo => vehiculo.Matricula === matricula);
    let edicionVehiculo = validarMatricula;
    vehiculoFiltrado = "";
    if (validarMatricula) {
        vehiculoFiltrado = `| ${edicionVehiculo.Matricula} | ${edicionVehiculo.Padron} | ${edicionVehiculo.Marca} | ${edicionVehiculo.Modelo} | ${edicionVehiculo.Ano} | ${edicionVehiculo.Tipo}`
        let nuevaMatricula = prompt("Vehiculo a editar:\n\n" + vehiculoFiltrado + "\nIngrese el nuevo valor para la matricula:")
        edicionVehiculo.Matricula = nuevaMatricula;
        let nuevoPadron = prompt("Vehiculo a editar:\n\n" + `| ${edicionVehiculo.Matricula} | ${edicionVehiculo.Padron} | ${edicionVehiculo.Marca} | ${edicionVehiculo.Modelo} | ${edicionVehiculo.Ano} | ${edicionVehiculo.Tipo}` + "\nIngrese el nuevo valor para el padron:")
        edicionVehiculo.Padron = nuevoPadron;
        let nuevaMarca = prompt("Vehiculo a editar:\n\n" + `| ${edicionVehiculo.Matricula} | ${edicionVehiculo.Padron} | ${edicionVehiculo.Marca} | ${edicionVehiculo.Modelo} | ${edicionVehiculo.Ano} | ${edicionVehiculo.Tipo}` + "\nIngrese el nuevo valor para la marca:")
        edicionVehiculo.Marca = nuevaMarca;
        let nuevaModelo = prompt("Vehiculo a editar:\n\n" + `| ${edicionVehiculo.Matricula} | ${edicionVehiculo.Padron} | ${edicionVehiculo.Marca} | ${edicionVehiculo.Modelo} | ${edicionVehiculo.Ano} | ${edicionVehiculo.Tipo}` + "\nIngrese el nuevo valor para el modelo:")
        edicionVehiculo.Modelo = nuevaModelo;
        let nuevoAno = prompt("Vehiculo a editar:\n\n" + `| ${edicionVehiculo.Matricula} | ${edicionVehiculo.Padron} | ${edicionVehiculo.Marca} | ${edicionVehiculo.Modelo} | ${edicionVehiculo.Ano} | ${edicionVehiculo.Tipo}` + "\nIngrese el nuevo valor para el año:")
        edicionVehiculo.Ano = nuevoAno;
        let nuevoTipo = prompt("Vehiculo a editar:\n\n" + `| ${edicionVehiculo.Matricula} | ${edicionVehiculo.Padron} | ${edicionVehiculo.Marca} | ${edicionVehiculo.Modelo} | ${edicionVehiculo.Ano} | ${edicionVehiculo.Tipo}` + "\nIngrese el nuevo valor para el tipo:")
        edicionVehiculo.Tipo = nuevoTipo;
        alert("Quedó editado el vehiculo, puede verlo en los registros...")
    }
    return false;
}
// Aplicacion/Menu
function aplicacionMain(){
    let opcionUsuario = Number(prompt("\nBienvenido al gestor de vehiculos, seleccione una opcion: \n\n 1 - Ver listado de vehiculos \n 2 - Agregar nuevo vehiculo \n 3 - Eliminar vehiculo \n 4 - Editar vehiculo \n 0 - Salir \n" ));
    let tipoVehiculo = Number('');
    let matricula = "";
    switch (opcionUsuario) {
        case 1:
            tipoVehiculo = prompt("\nIngrese que tipo de vehiculo desea mostrar: \n\n 1 - Autos \n 2 - Motos \n 3 - Filtrar por matricula \n 4 - Todos")
            if (tipoVehiculo == 1 || tipoVehiculo == 2 || tipoVehiculo == 4) {
                filtrarVehiculos(tipoVehiculo);
                alert("\n\nMatricula - Padron - Marca - Modelo - Año - Tipo \n" + listadoGeneral);
            } else if (tipoVehiculo == 3){
                matricula = prompt("Ingrese la matricula del vehiculo a filtrar:");
                filtrarVehiculo(matricula);
                if (vehiculoFiltrado !== "") {
                    alert("Se encontró el siguiente vehiculo: \n\n Matricula - Padron - Marca - Modelo - Año - Tipo \n" + vehiculoFiltrado)
                }
            }else {
                alert("\nNo ingresó una opción correcta, redirigiendo al menu principal..." );
            }
            aplicacionMain();
            break;
        case 2:
            matricula = prompt("Ingrese la matricula del vehiculo:");
            let padron = Number(prompt("Ingrese el padron del vehiculo:"));
            let marca = prompt("Ingrese la marca del vehiculo:");
            let modelo = prompt("Ingrese el modelo del vehiculo");
            let ano = Number(prompt("Ingrese el año del vehiculo"));
            let tipo = prompt("Ingrese si el vehiculo es un 'Auto' o una 'Moto':")
            crearVehiculo(matricula, padron, marca, modelo, ano, tipo);
            alert("Se agrego el vehiculo al listado");
            aplicacionMain();
            break;
        case 3:
            matricula = prompt("Ingrese la matricula del vehiculo a eliminar:");
            filtrarVehiculo(matricula);
            if (vehiculoFiltrado !== "") {
            alert("Se eliminara el siguiente vehiculo: \n\n" + vehiculoFiltrado)
            }
            eliminarVehiculo(matricula);
            alert("Redirigiendo al menu principal...")
            aplicacionMain();
            break;
        case 4:
            matricula = prompt("Ingrese la matricula del vehiculo a editar:")
            filtrarVehiculo(matricula)
            if (filtrarVehiculo) {
                editarVehiculo(matricula)
            }
            aplicacionMain();
            break;
        case 0:
            break;
        default:
            alert("\nNo ingresó una opción correcta, redirigiendo al menu principal..." );
            aplicacionMain();
            break;
    }
}
aplicacionMain();