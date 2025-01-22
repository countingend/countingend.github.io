function getStats()
{
    let currentDate = new Date();
    let endTerm = new Date(2029, 0, 20);
    let dataPackage = {}

    let timeDiffereceMS = endTerm.valueOf() - currentDate.valueOf()
    let seconds = timeDiffereceMS * Math.pow(10, -3);
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = seconds / (3600 * 24)

    dataPackage["ms"] = timeDiffereceMS;
    dataPackage["s"] = seconds;
    dataPackage["m"] = minutes;
    dataPackage["hr"] = hours;
    dataPackage["d"] = days;

    return dataPackage;
}

function displayInit()
{
    let dataDisplays = {}
    let dayDisplay = document.createElement("h1");
    let hoursDisplay = document.createElement("h2");
    let minutesDisplay = document.createElement("h3");
    let secondsDisplay = document.createElement("h3");
    let millisecondsDisplay = document.createElement("h3");

    dataDisplays = {"day-clock" :dayDisplay, "hour-clock" : hoursDisplay, "minute-clock" : minutesDisplay, "second-clock": secondsDisplay, "ms-clock": millisecondsDisplay};

    for(let entry in dataDisplays)
    {
        dataDisplays[entry].setAttribute("class", "centered-display");
        dataDisplays[entry].id = entry
        document.body.appendChild(dataDisplays[entry]);
    }
}

function getTimeLeft(type){
    return getStats()[type];
}

function updateDisplay()
{
    let dayClock = document.getElementById("day-clock");
    let hoursClock = document.getElementById("hour-clock");
    let minuteClock = document.getElementById("minute-clock");
    let secondClock = document.getElementById("second-clock");
    let msClock = document.getElementById("ms-clock");

    let clocks = {"d": dayClock, "hr": hoursClock, "m": minuteClock, "s" : secondClock, "ms": msClock};
        
    for (let clock in clocks)
    {
        clocks[clock].innerHTML = getTimeLeft(clock).toFixed(3) + ` ${clock}`;
    }
    
}