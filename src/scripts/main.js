AOS.init();

id = 'timer'


const eventDate = new Date("Dec 13, 2024 13:00:00");
const eventTimeStamp = eventDate.getTime();

const countTime = setInterval(function(){
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const eventDistance = eventTimeStamp - currentTimeStamp;

    const daysUntilEvent = Math.floor(eventDistance / (1000 * 60 * 60 * 24));
    const hoursUntilEvent = Math.floor((eventDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutesUntilEvent = Math.floor(eventDistance % (1000 * 60 * 60) / (1000 * 60));
    const secondsUntilEvent = Math.floor(eventDistance % (1000 * 60) / 1000);

    document.getElementById('timer').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if(eventDistance < 0){
        clearInterval(countTime);
        document.getElementById('expirado').innerHTML = 'já passou!';
    }

}, 1000)