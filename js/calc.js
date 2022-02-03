var boton0 = document.getElementById('b0');
var boton1 = document.getElementById('b1');
var boton2 = document.getElementById('b2');
var boton3 = document.getElementById('b3');
var boton4 = document.getElementById('b4');
var boton5 = document.getElementById('b5');
var boton6 = document.getElementById('b6');
var boton7 = document.getElementById('b7');
var boton8 = document.getElementById('b8');
var boton9 = document.getElementById('b9');
var sum = document.getElementById('b+');
var rest = document.getElementById('b-');
var mult = document.getElementById('bx');
var div = document.getElementById('bd');
var punto = document.getElementById('punto');
var igual = document.getElementById('bigual');
var resultado = document.getElementById('resultado');
var borrar = document.getElementById('clr');
var reset = document.getElementById('rst');

boton0.onclick = function(e){
        if (resultado.value=='0'){
            resultado.value =  this.value;
        }else{
            resultado.value +=  this.value;
        }
 }
 boton1.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton2.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton3.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton4.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton5.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton6.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton7.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton8.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
boton9.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
sum.onclick = function(e){
        resultado.value +=  this.value;
}
rest.onclick = function(e){
        resultado.value +=  this.value;
}
mult.onclick = function(e){
        resultado.value +=  this.value;
}
div.onclick = function(e){
        resultado.value +=  this.value;
}
punto.onclick = function(e){
    if (resultado.value==0){
        resultado.value =  this.value;
    }else{
        resultado.value +=  this.value;
    }
}
igual.onclick= function (e){
    resultado.value = eval(resultado.value);
}
borrar.onclick = function (e){
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
}
reset.onclick = function (e){
    resultado.value = "";
}