let  arregloFloron = [0,0,0,0,1];
let existeElFloro = false;
for(let i = 0; i < 5 ; i++){
    if(arregloFloron[i] == 1 ){
        existeElFloro = true;
    }
}
if(existeElFloro == true){
    console.log('Adivinar');
    
}else{
    console.log('Asignar y luego adivinar');
}



