export default function juego(){
    //getboudingclientrect = obtiene el rectangulo de la pantalla
    let contenedor = document.getElementById('contenedor_juego');
    let jugador = document.getElementById('jugador');
    let top=0;
    let right=0;
    window.addEventListener('keydown',(e)=>{
        let limite_contenedor = contenedor.getBoundingClientRect();
        let limite_jugador = jugador.getBoundingClientRect();
        if(e.key === 'w'){
            //Arriba
            if(limite_jugador.top < limite_contenedor.top){
                top +=10;
                contenedor.classList.add('efecto_colpso');
                contenedor.style.borderTop = '2px solid red';
                setTimeout(() => {
                    contenedor.classList.remove('efecto_colpso');
                    contenedor.style.borderTop = 'none';
                }, 1000);
            }
            top -=10;
            jugador.style.transform =`translate(${right}px,${top}px)`;
            //console.warn(limite_contenedor);
        }
        if(e.key === 'a'){
            //Izquierda
            if(limite_jugador.left < limite_contenedor.left){
                contenedor.classList.add('efecto_colpso');
                contenedor.style.borderLeft = '2px solid red';
                setTimeout(() => {
                    contenedor.classList.remove('efecto_colpso');
                    contenedor.style.borderLeft = 'none';
                }, 1000);
                right +=10;
            }
            right -= 10;
            jugador.style.transform =`translate(${right}px,${top}px)`;
        }
        if(e.key === 'd'){
            //Derecha
            if(limite_jugador.right > limite_contenedor.right){
                right -=10;
                contenedor.classList.add('efecto_colpso');
                contenedor.style.borderRight = '2px solid red';
                setTimeout(() => {
                    contenedor.classList.remove('efecto_colpso');
                    contenedor.style.borderRight = 'none';
                }, 1000);
            }
            right += 10;
            jugador.style.transform =`translate(${right}px,${top}px)`;
        }
        
        if(e.key === 's'){
            //Abajo
            if(limite_jugador.bottom > limite_contenedor.bottom){
                top -=10;
                contenedor.classList.add('efecto_colpso');
                contenedor.style.borderBottom = '2px solid red';
                setTimeout(() => {
                    contenedor.classList.remove('efecto_colpso');
                    contenedor.style.borderBottom = 'none';
                }, 1000);
            }
            top +=10;
            jugador.style.transform =`translate(${right}px,${top}px)`;
            
        }
        if(e.altKey && e.key === 'p'){
            let respuesta = prompt('Sera redireccionado a google, ¿Desea continuar?');
            (respuesta === 'si')
            ?window.open('https://google.com/search?q=hola+mundo')
            :alert('No se redireccionara a google')
        }
    });
}