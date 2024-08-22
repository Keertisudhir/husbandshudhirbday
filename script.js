// script.js
const countdown = () => {
    const countDate = new Date("2024-08-22T16:17:00").getTime(); // Set the date and time
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = textDay;
    document.getElementById('hours').innerText = textHour;
    document.getElementById('minutes').innerText = textMinute;
    document.getElementById('seconds').innerText = textSecond;

    if (gap < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<span style="color:white">Happy Birthday My Sweet Heart!</span>';
        showModal();
    }
};
const showModal = () => {
    const modal = document.getElementById("birthdayModal");
    modal.style.display = "block";
    const closeBtn = document.getElementsByClassName("close")[0];

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

const countdownInterval = setInterval(countdown, 1000);

setInterval(countdown, 1000);

let change=(c)=>{
    if(c=='1'){
        let image=document.querySelector(".fig1")
// console.dir(image)
image.innerHTML='<img src="marriage.jpg" width="246px" height="200px"></img>'
let fc=document.getElementById("fc1")
fc.innerHTML='<figcaption>Holy Knot for our happy beginning</figcaption>'
    }
else if(c=='2'){
    let image1=document.querySelector(".fig2")
// console.dir(image)
image1.innerHTML='<img src="kiss.jpg" width="200px" height="200px"></img>'
let fc2=document.getElementById("fc2")
fc2.innerHTML='<figcaption>First Kiss with Shy!!!</figcaption>'
}
else{
    let image3=document.querySelector(".fig3")
    image3.innerHTML='<img src="hand.jpg" width="250px" height="200px"></img>'
let fc3=document.getElementById("fc3")
fc3.innerHTML='<figcaption>Missing Him for the first Time!!!</figcaption>'
}
}
