const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timesStampDoEvento = dataDoEvento.getTime();

const contAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const distanciaAteEvento = timesStampDoEvento - timeStampAtual;


    const horasEmMs = 1000 * 60 * 60;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento =  Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteEvento %  horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    const contador = document.getElementById('contador');
    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}m  ${minutosAteOEvento}s ${segundosAteOEvento}`;

    if (distanciaAteEvento < 0){
        clearInterval(contAsHoras);
        document.getElementById('contador').innerHTML = "Evento Expirado";
    }


}, 1000);