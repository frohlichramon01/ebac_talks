AOS.init();
id = "timer";
const eventDate = new Date("Dec 13, 2024 13:00:00");
const eventTimeStamp = eventDate.getTime();
const countTime = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();
    const eventDistance = eventTimeStamp - currentTimeStamp;
    const daysUntilEvent = Math.floor(eventDistance / 86400000);
    const hoursUntilEvent = Math.floor(eventDistance % 86400000 / 3600000);
    const minutesUntilEvent = Math.floor(eventDistance % 3600000 / 60000);
    const secondsUntilEvent = Math.floor(eventDistance % 60000 / 1000);
    document.getElementById("timer").innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;
    if (eventDistance < 0) {
        clearInterval(countTime);
        document.getElementById("expirado").innerHTML = "j\xe1 passou!";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
