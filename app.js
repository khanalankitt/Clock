document.querySelector('.main').style.transform = 'rotate(180deg)';
let a = setInterval(()=>{  
    let date = new Date();
    let tempsec = date.getSeconds();
    let tempmin = date.getMinutes();
    let temphr = date.getHours();
    let amorpm = (temphr <12) ? "AM" : "PM";
    temphr %= 12;
    (tempsec < 10)? tempsec = "0" + tempsec : tempsec;
    (tempmin < 10)? tempmin = "0" + tempmin : tempmin;
    (temphr < 10 )? temphr = "0" + temphr : temphr;
    document.querySelector('.h1').innerHTML = ` ${temphr}:${tempmin}:${tempsec} ${amorpm}`;
    let sec = (date.getSeconds()*6) + ( 6 * date.getMilliseconds() /1000);
    let minute = (date.getMinutes()*6) + (6 * (date.getSeconds() / 60));
    let hour = (date.getHours()*30) + (30 * (date.getMinutes() / 60)) + (30 * (date.getSeconds() / 3600));
    document.querySelector(".second").style.transform = `rotate(${sec}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
 },1);
