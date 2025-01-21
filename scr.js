function getUntil()
{
    let currentDate = new Date();
    let endTerm = new Date(2029, 0, 20);

    let timeLeftMs = endTerm.valueOf() - currentDate.valueOf();
    let daysLeft = timeLeftMs * Math.pow(10, -3) / (3600 * 24);

    return daysLeft;
}

function updateDisplay()
{
    let clock = document.getElementById("clock");
    clock.innerHTML = getUntil().toFixed(5) + ((getUntil() > 1) ? " days" : " day!!!"); 
}