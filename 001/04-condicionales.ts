//04-condicionales.ts
const casado = true;
if(casado == true){
    console.log("si estoy casado");
}else{
    console.log("no estoy casado");
}

if(casado == false){ //(EXPRESION => BOOLEANO)
    console.log("si estoy casado");
}else{
    console.log("no estoy casado");
}

if(casado != true){
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}

if(casado != false){
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}

const tengoMosa = true;
const estaCasado = casado == true; // expresion
const soyMosero = tengoMosa == true; //
const casadoYMosero = estaCasado && tengoMosa;
if(estaCasado == true && tengoMosa == true){
    console.log("Cassado y mosero");

}else{
    console.log("O casado O Mosero o Nada");
}

// casadoYMOsero <=> c==true && b==true && d==true

// AND -> && AMPERSON
// TRUE Y TRUE = TRUE 
// TRUE Y FALSE = FALSE
// FALSE Y TRUE = FALSE 
// FALSE Y FALSE = FALSE

// OR -> || -> PIPES 
// TRUE Y TRUE = TRUE 
// TRUE Y FALSE = TRUE
// FALSE Y TRUE = TRUE  
// FALSE Y FALSE = FALSE

// apago la primera alarma me hago
// bolita y lloro hasta la segunda
// alarma y me levanto
// celularDescargado ==true
// amaneceMuerto  == true
// estaActivadaLaAlarma != true
// estaEnModoSilencio == true
// const seAtrasoAClase = celularDescargado ==true || amaneceMuerto  == true || estaActivadaLaAlarma != true|| estaActivadaLaAlarma != true || estaEnModoSilencio == true;



//TRUTY
const nombreVacio ="";
if(null){
    console.log("Truty"); 
}else{
    console.log("Falsy");
}
 //Falsy



// switch
const calculo = "sumar"; //sumar restar multiplicar dividir

 switch (calculo) {
    case "sumar":
      //codigo de sumar
      break;
    case "restar":
      //code restar
      break;
    case "multiplicar":
      //multiplicar code
      break;
    case "dividir":
      // code dividir
      break;   
    default:
      //calculadora con switch
      break;
  }


  // 6 guagua
  // 18 guambra
  // 65 longo
  // 66 ruku

  const vida = prompt("ingrese la edad");
  const vidas = Number(vida);

  if(vidas < 6 || vidas == 6){
      console.log("guagua");
  }else if ( vidas < 6 && vidas <= 18){
      console.log("guambra");
  }else if(vidas > 18 || vidas < 65 || vidas == 65){
      console.log("longo");
  }else if(vidas == 66){
      console.log("ruku");
  }else console.log("nos es ecuatoriano");
