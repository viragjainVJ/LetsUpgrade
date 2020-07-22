function generateTable() {
    let input = prompt('Generate Table of', 2);
    let list = document.querySelector('#table1')
    document.getElementById('heading').innerHTML = `Table of ${input}`;
    let i = 1;
    list.innerHTML = ""
    while(i<11) {
        list.innerHTML += `<li>${input} x ${i} = ${input*i}</li>`
        i++;
    }
}

let showUser = () => {
    let userName = document.getElementById('userName').value;
    document.getElementById('welcomeMsg').innerHTML = `Welcome ${userName} to LetsUpgrade JS Course` 
}

let currentTime = () => {
    var date = new Date(); 
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hours, true);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = `${hour}h : ${min}m : ${sec}s ${hours>12 ? 'PM' : 'AM'}`; 
    var t = setTimeout(function(){ currentTime() }, 1000);
}
  
let updateTime = (k, hourCall) => {
    let val = hourCall && k>12 ? (k-12) : k;
    return (val < 10) ? "0" + val: val;
}

currentTime();

let mode = () => {
    var checkBox = document.getElementById("mode");
    var text = document.getElementById("text");
    
    if (checkBox.checked == true){
        text.style.display = "block";
        document.body.classList.toggle('darkMode')
    } else {
        text.style.display = "none";
        document.body.classList.toggle('darkMode')
    }
}