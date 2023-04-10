var i = 0
var texto = 'Raí Rafael Santos Silva'
var tempo = 300

function typer(){
    if (i < texto.length){
        document.getElementById('typing').innerHTML += texto.charAt(i);
        i++;
        setTimeout(typer, tempo);
    }
}

typer();