function contenido(id){
    return document.getElementById(id);
}

function calcularProme(){
    var pn = parseInt(contenido ('1nota').value);
    var sn = parseInt(contenido ('2nota').value);
    var tn = parseInt(contenido ('3nota').value);
    var cn = parseInt(contenido ('4nota').value);
    var total = (pn + sn + tn + cn)/4;
    contenido ('prom').value = total;

    if (total >=6.5 & total <=7.0){
        contenido ('estado').value = 'Distinguido/a';
    }
    else if (total >=4.5 & total <=6.4){
        contenido ('estado').value = 'Aprobado/a';
    }
    else if (total >=1.0 & total <=4.4){
        contenido ('estado').value = 'Reprobado/a';
    }
    else (
        contenido ('estado').value = 'Invalido'
    )
}
