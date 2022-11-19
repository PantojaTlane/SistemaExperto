let tiposMalware = [
    {
        nombre: "Ransomware",
        caracteristicas: ["Toma el control del dispositivo","No permite el acceso a archivos del dispositivo","Solicita un rescate para el acceso a la informacion"],
        medidas: ["Evitar ejecutar archivos, links o utilizar dispositivos USB de dudosa procedencia","Observar el remitente del mensaje o correo electrónico"],
        gradoPertenencia: 0
    },
    {
        nombre: "Spyware",
        caracteristicas: ["Ha sido instalado sin consentimiento del usuario","Se han instalado archivos adicionales al que he descargado","Rastrea o monitorea mi actividad"],
        medidas: ["Evitar descarga de aplicaciones de sitios no oficiales o software pirata","Ignorar anuncios y ventanas emergentes durante la navegación"],
        gradoPertenencia: 0
    },
    {
        nombre: "Keyloggers",
        caracteristicas: ["Registra las pulsaciones del teclado","Actua sin consentimiento del usuario"],
        medidas: ["Mantener equipo actualizado","Evitar ejecutar archivos, links o utilizar dispositivos USB de dudosa procedencia"],
        gradoPertenencia: 0
    }
];


let problemas = ["Toma el control del dispositivo","Ha sido instalado sin consentimiento del usuario","No permite el acceso a archivos del dispositivo"];

diagnosticar();

function diagnosticar() {

    tiposMalware = tiposMalware.map(malware => {//Iteramos cada tipo de malware

        problemas.forEach(problema => {
    
            malware.caracteristicas.forEach(description => {//Iteramos cada caracteristica del malware
                if(problema.toLowerCase() == description.toLocaleLowerCase()){
                    malware.gradoPertenencia += 1;
                }
            });
    
        });

        return malware;

    });   

    
    graficarPorcentajes(problemas.length, tiposMalware);

}

function graficarPorcentajes(numeroProblemas, malwares) {
    malwares.forEach(malware => {
        console.log("Nombre: " + malware.nombre + " Porcentaje: " + ((malware.gradoPertenencia * 100)/numeroProblemas).toPrecision(3));
    });
}