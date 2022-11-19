//nombre del malware
const sectionNameMalware = document.querySelector('#sectionNameMalware');//Fieldset
const inputNameMalware = document.querySelector('#nameMalware');//input
const btnCreateMalware = document.querySelector('#createMalware');//boton
inputNameMalware.value="";

//caracteristica de malware
const sectionMalwareCaracteristica = document.querySelector('#sectionCaracteristica');//Fieldset
const inputCaracteristicaMalware = document.querySelector('#caracteristicaMalware');//input
const btnAddCaracteristica = document.querySelector('#addCaracteristica');//boton
inputCaracteristicaMalware.value="";

//medidas de malware
const sectionMedidas = document.querySelector('#sectionMedidas');//Fieldset
const inputMedidaMalware = document.querySelector('#medidaMalware');//input
const btnAddMedida = document.querySelector('#addMedida');//boton
inputMedidaMalware.value="";

//notificador
const notifyAdded = document.querySelector('#notify-added');


//Objeto malware
let malware = {
    nombre:"",
    caracteristicas: [],
    medidas: [],
    gradoPertenencia: 0
};


//Arreglo de malwares
let malwares = [];


//Boton para crear malware
const sectionCrearBtn = document.querySelector('#sectionCrearBtn');//Fieldset
const crearBtnMalware = document.querySelector('#crearBtnMalware');//boton


//Input nombre del malware
inputNameMalware.addEventListener('input',e=>{
    if(e.target.value){
        btnCreateMalware.classList.remove('hide');
    }else{
        btnCreateMalware.classList.add('hide');
    }
});
btnCreateMalware.addEventListener('click',e=>{
    sectionNameMalware.classList.add('hide');
    sectionMalwareCaracteristica.classList.remove('hide');
    sectionMedidas.classList.remove('hide');
    sectionCrearBtn.classList.remove('hide');
    malware.nombre = inputNameMalware.value;//Asignamos el nombre
    inputNameMalware.value = "";
    notifyAdded.classList.remove('hide');
    notifyAdded.textContent = "Nombre agregado exitosamente";
    setTimeout(()=>{notifyAdded.classList.add('hide');},2000);
});


//Input caracteristica del malware
inputCaracteristicaMalware.addEventListener('input',e=>{
    if(e.target.value){
        btnAddCaracteristica.classList.remove('hide');
    }else{
        btnAddCaracteristica.classList.add('hide');
    }
});
btnAddCaracteristica.addEventListener('click',e=>{
    malware.caracteristicas.push(inputCaracteristicaMalware.value);//Asignamos la caracteristica al objeto
    inputCaracteristicaMalware.value = "";
    btnAddCaracteristica.classList.add('hide');
    notifyAdded.classList.remove('hide');
    notifyAdded.textContent = "Caracteristica agregada exitosamente";
    setTimeout(()=>{notifyAdded.classList.add('hide');},2000);
});


//Input medidas de malware
inputMedidaMalware.addEventListener('input',e=>{
    if(e.target.value){
        btnAddMedida.classList.remove('hide');
    }else{
        btnAddMedida.classList.add('hide');
    }
});
btnAddMedida.addEventListener('click',e=>{
    malware.medidas.push(inputMedidaMalware.value);//Agregamos las medidas
    inputMedidaMalware.value = "";
    btnAddMedida.classList.add('hide');
    notifyAdded.classList.remove('hide');
    notifyAdded.textContent = "Medida agregada exitosamente";
    setTimeout(()=>{notifyAdded.classList.add('hide');},2000);
});


//Boton para crear malware
crearBtnMalware.addEventListener('click',e=>{
    if(malware.caracteristicas.length < 2 || malware.medidas.length < 2){
        notifyAdded.classList.remove('hide');
        notifyAdded.textContent = "Error! Debes agregar al menos dos caracteristicas o medidas";
        notifyAdded.style.backgroundColor = "#b14f57";
        setTimeout(()=>{
            notifyAdded.classList.add('hide');
            notifyAdded.style.backgroundColor = "#4f97b1";
        },2000);
    }else{
        const modalMalwareCreated = document.querySelector('#modal-malware-created');
        modalMalwareCreated.classList.add('show-modal');
        setTimeout(()=>{
            modalMalwareCreated.classList.remove('show-modal');
        },2000);


        if(localStorage.getItem('malwares')){
            let malwaresLocal = JSON.parse(localStorage.getItem('malwares'));
            malwaresLocal.push(malware);
            localStorage.setItem('malwares',JSON.stringify(malwaresLocal));
            console.log(JSON.parse(localStorage.getItem('malwares')));
        }else{
            malwares.push(malware);
            localStorage.setItem('malwares',JSON.stringify(malwares));
            console.log(JSON.parse(localStorage.getItem('malwares')));
        }

        sectionNameMalware.classList.remove('hide');
        sectionMalwareCaracteristica.classList.add('hide');
        sectionMedidas.classList.add('hide');
        sectionCrearBtn.classList.add('hide');
        btnCreateMalware.classList.add('hide');

    }
});