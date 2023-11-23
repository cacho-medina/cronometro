const tiempo = document.getElementById("tiempo");
let segundos = 0;
let minutos = 0;
let hora = 0;
let time;

function iniciarCronometro() {
    time = setInterval(() => {
        segundos++;
        if (segundos >= 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos >= 60) {
            hora++;
            minutos = 0;
        }
        tiempo.innerText = `${format(hora)}:${format(minutos)}:${format(
            segundos
        )}`;
    }, 1000);
}

function pausarCronometro() {
    clearInterval(time);
}

function resetearCronometro() {
    pausarCronometro();
    segundos = 0;
    minutos = 0;
    hora = 0;
    time = 0;
    tiempo.innerText = `00:00:00`;
}

function format(valor) {
    return valor < 10 ? `0${valor}` : valor;
}
