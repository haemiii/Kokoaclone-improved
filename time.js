const time = document.querySelector(".time");

const timeShow = () =>{
    const date = new Date();

    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
 
    time.innerText = `${hours}:${minutes}`;
}

timeShow();
setInterval(timeShow, 1000);