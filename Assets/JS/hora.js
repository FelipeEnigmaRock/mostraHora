const selectHour = document.querySelector('h1');
const realTime = new Date();

function formataData(realTime) {
    const dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const nameMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const diaS = dayWeek[realTime.getDay()];
    const dia = zeroAEsquerda(realTime.getDate());
    const mes = zeroAEsquerda(nameMonth[realTime.getMonth()]);
    const ano = zeroAEsquerda(realTime.getFullYear());
    const hora = zeroAEsquerda(realTime.getHours());
    const minuto = zeroAEsquerda(realTime.getMinutes());
    const segundo = zeroAEsquerda(realTime.getSeconds());

    return `${diaS}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}:${segundo}`;
}
function zeroAEsquerda(num) {
    return num <10 ? `0${num}` : num;
}

const formata = formataData(realTime);



selectHour.innerHTML = formata;
console.log(formata);