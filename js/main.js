//declaracion de variables
let precio = 0;
let cantidad = 0;
let nombre;
let direccion;
let x = 0;
let inputdir;
let inputmail;
let email;
const inputs = document.querySelectorAll('input[type="text"]');

//objetos
let producto1 ={
  tipo: 'Estandar',
  vale: 450
}

let producto2 ={
  tipo: 'Light',
  vale: 400
}

let producto3 ={
  tipo: 'Guarnición',
  vale: 200
}

//funcion de validacion de caracteres
function validname(nombre) {
    let name = nombre.toUpperCase();
    if(!/^[ABCDEFGHIJKLMNOPQRSTUVWXYZÑÁÉÍÓÚ ]+$/.test(name)){
      console.log("Nombre no válido");
      //alert("El nombre ingresado sólo debe contener letras")
      x = 0;
    }else{
      console.log("Nombre aceptado");
      x = 1;
      }
}

//recopilacion de datos
function user(identif,direc,email){
  this.identif = nombre;
  this.direc = inputdir;
  this.email = inputmail;
}

//desarrollo
const formulario = document.querySelector("#form");
formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  nombre=e.target[0].value;
  inputdir=e.target[2].value;
  inputmail=e.target[1].value;
  console.log (nombre);
  localStorage.setItem("nombre",nombre)
  validname(nombre);
  let user1 = new user(nombre,direccion,email);
  console.log(user1);
  console.log(user1.direc);
  if(x == 0){
    document.getElementById("total_pedido").innerHTML = ("El nombre no es válido" );
  }else{
    let pre1=parseInt(e.target[3].value,10);
    let pre2=parseInt(e.target[4].value,10);
    let pre3=parseInt(e.target[5].value,10);
    precio = (pre1 * producto1.vale + pre2 * producto2.vale + pre3 * producto3.vale);
    document.getElementById("total_pedido").innerHTML = ("Gracias" + " " + nombre + ". " + "El total de tu pedido es:" + " " + precio);}
  })




