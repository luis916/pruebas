export default function reloj(){ 
    let contenedor_mostrar_reloj = document.getElementById('contenedor_mostrar_reloj');
    let mostrar_reloj = document.getElementById('mostrar_reloj');
    let iniciar_reloj = document.getElementById('iniciar_reloj');
    let detener_reloj = document.getElementById('detener_reloj');
    let iniciar_alarma = document.getElementById('iniciar_alarma');
    let detener_alarma = document.getElementById('detener_alarma');
    let sonido_alarma = document.getElementById('sonido_alarma');
    contenedor_mostrar_reloj.style.display = 'none';
    let intervalo;
    let reloj_desactivado = false;
    let alarma_desactivado = false;
    document.addEventListener('click',(e)=>{
        //funcion paara activar y desactivar botones.
        function activar_desactivar_botones(activar,desactivar){
            activar.disabled = false;
            activar.style.opacity = '1';
            activar.style.cursor = 'pointer';
            ///////////////////////////////////////
            desactivar.style.opacity = '.5';
            desactivar.disabled = true;
            desactivar.style.cursor = 'not-allowed';
        }
        if(e.target.matches('#iniciar_reloj')){
            intervalo = setInterval(() => {
                let tiempo = new Date().toLocaleTimeString();
                mostrar_reloj.innerHTML = tiempo;
                contenedor_mostrar_reloj.style.display = 'block';
            }, 1000);
           activar_desactivar_botones(detener_reloj,iniciar_reloj);
           reloj_desactivado = true;
        }
        if (e.target.matches('#detener_reloj')&& reloj_desactivado === true) {
            activar_desactivar_botones(iniciar_reloj,detener_reloj);
            clearInterval(intervalo);
            reloj_desactivado = false;
            contenedor_mostrar_reloj.style.display = 'none';
        }
        //Alarma
        if(e.target.matches('#iniciar_alarma')){
            sonido_alarma.play();   
            activar_desactivar_botones(detener_alarma,iniciar_alarma);
           alarma_desactivado = true;
           setInterval(() => {
            if (Math.round(sonido_alarma.currentTime) === 10) {
                activar_desactivar_botones(iniciar_alarma);
            }
           }, 1000);
//            alert('Alarma');
        
        }
        
        
        if(e.target.matches('#detener_alarma')&& alarma_desactivado === true){
            activar_desactivar_botones(iniciar_alarma,detener_alarma);
            alarma_desactivado = false;
            sonido_alarma.pause();
            sonido_alarma.currentTime = 0;
            
        }
    });
}
