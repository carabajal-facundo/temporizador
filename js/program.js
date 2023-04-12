let seg;
let min;
let hora;
let inicio;

function iniciar(){
    hora = prompt("ingrese la 'Hora' del cronometro");
    min = prompt("ingrese los 'Minutos' del cronometro");
    seg = prompt("ingrese los 'Segundos' del cronometro");
    if(seg==null) seg=0;
    else seg = parseInt(seg);
    if(min==null) min=0;
    else min = parseInt(min);
    if(hora==null) hora=0;
    else hora = parseInt(hora);
    inicio = setInterval(cronometro, 1000);
}

function cronometro(){
    let crono = document.getElementById('crono');
    crono.innerHTML = `${hora} : ${min} : ${seg}`;
    seg--;
    if(hora <= 0 && min <= 0 && seg <= 0){
        clearInterval(inicio);
    }
    if(seg<=0){
        if(min!=0){
            seg=59;
            min--;
        }
        else if(hora!=0){
                min=59;
                seg=59
                hora--;
            }
    }
    
}

function reset(){
    clearInterval(inicio);
    let crono = document.getElementById('crono');
    crono.innerHTML = `-- : -- : --`;
}

function pausar(){
    clearInterval(inicio);
}