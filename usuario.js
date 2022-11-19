const contenedorSelect = document.querySelector('#select-carac');//Seleecciono el contendor que tendra el select
let malwaresArenderizar = JSON.parse(localStorage.getItem('malwares'));//Obtengo los malwares del local storage

let problemas = [];

contenedorSelect.innerHTML = "";//Lo limpiamos o lo reseteamos


//Creamos el select
let select = document.createElement('select');
select.setAttribute('name','select');
select.setAttribute('id','select');
let option = document.createElement('option');
option.setAttribute('value','');
option.setAttribute('disabled','');
option.setAttribute('selected','');
option.setAttribute('hidden','');
option.innerText = "Selecciona lo que ves en el malware";
select.appendChild(option);


//Agregamos el select al contenedor
contenedorSelect.appendChild(select);

//Agregamos los malwares como option del select
malwaresArenderizar.forEach(malware => {
    malware.caracteristicas.forEach(caracteristica => {
        let optionCaracteristica = document.createElement('option');
        optionCaracteristica.setAttribute('value',caracteristica);
        optionCaracteristica.innerText = caracteristica;

        select.appendChild(optionCaracteristica);
    });
});



const contenedorProblemas = document.querySelector('#problems-by-user');
const btnDiagnosticar = document.querySelector('#diagnosticar');//Boton para diagnosticar
contenedorProblemas.innerHTML = "";
//Quitamos el option cada que se seleccione
select.childNodes.forEach(option => {
    option.addEventListener('click',e=>{

        if(btnDiagnosticar.classList.contains('hide')){//Aqui mostramos el boton de diagnosticar
            btnDiagnosticar.classList.remove('hide');
        }

        e.target.remove();//Aqui lo eliminamos del select

        //Aqui creamos el div para ser mostrado. Insertamos los problema en forma grafica
        let div = document.createElement('div');
        div.innerText = e.target.value;
        contenedorProblemas.appendChild(div);


        //Insertamos en un arreglo
        problemas.push(e.target.value);
    });
});



//Seleccionamos el boton de restart
const btnRestart = document.querySelector('#restart');
btnRestart.addEventListener('click',e=>{
    btnDiagnosticar.classList.add('hide');
});



//Seleccionamos el boton para diagnosticar
btnDiagnosticar.addEventListener('click',e=>{
    let malws = JSON.parse(localStorage.getItem('malwares'));
    console.log(malws);
    console.log(problemas);
});