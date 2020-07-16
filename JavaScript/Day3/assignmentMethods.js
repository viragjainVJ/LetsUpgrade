function checkEvenOdd() {
    let num = +prompt('Enter a Number: ', 0);
    let evenOdd = num%2 === 0 ? 'Even' : 'Odd';
    let msg = `The number entered is ${num} and Number is ${evenOdd}.`;
    document.getElementById("output").innerHTML = msg + '<h3>Also Check Console<h3>';
    console.log(msg);
}

function osNameVersion() {
    let name = prompt('Enter a Number: ', 'Android 9');
    let os = name.split(" ");
    let msg = `The OS name is ${os[0]} and version is ${os[1]}`;
    document.getElementById("output").innerHTML = msg + '<h3>Also Check Console<h3>';
    console.log(msg);
}

let getGrade = function() {
    let marks = +prompt('Enter Marks: ', 0);
    let val;
    if(marks >= 80) {
        val = 'A'
    } else if(marks >= 60){
        val = 'B'
    } else if(marks >= 40){
        val = 'C'
    } else if(marks >= 30){
        val = 'D'
    } else {
        val = 'E'
    }
    let msg = `Marks are ${marks} and grade is ${val}`;
    document.getElementById("output").innerHTML = msg + '<h3>Also Check Console<h3>';
    console.log(msg);
}

let getGradeUsingTernary = function(){
    let marks = +prompt('Enter Marks: ', 0);
    let val = marks >= 80 ? 'A' : marks >= 60 ? 'B' : marks >= 40 ? 'C': marks >= 30 ? 'D' : 'E';
    let msg = `Marks are ${marks} and grade is ${val}`;
    document.getElementById("output").innerHTML = msg + '<h3>Also Check Console<h3>';
    console.log(msg);
}
