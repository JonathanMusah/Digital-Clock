const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const statusEl = document.getElementById("status");

function updateClock(){
    let d = new Date();

    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    
    

    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;

    
    secondEl.innerText = second < 10 ? "0" + second : second;
    minuteEl.innerText = minute < 10 ? minute + "0" : minute;
    hourEl.innerText = hour < 10 ? hour + "0" : hour;



    if(hour > 12){
        statusEl.innerText = "PM"
    }

    
    
    
    // s = s < 10 ? "0" + s: s;

    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()
