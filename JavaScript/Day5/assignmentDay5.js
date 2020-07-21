let arr = [];
let addToArray = () => {
    let num = document.getElementById("enteredNum").value;
    if(num){
        let positiveArr = num.split(',').filter(el => el != "" && el > 0 )
        console.log(positiveArr)
        arr.push(...positiveArr);
        document.getElementById("showArray").innerHTML = `[${arr}]`;
    } else {
        document.getElementById("showArray").innerHTML = `${arr.length ? `[` + arr + `]<br>`: ''} Please enter Valid Number`
    }
    console.log(arr);
    if(arr.length){
        let oddNumber = arr.filter(el => el%2 != 0);
        document.getElementById('showOddNumber').innerHTML = `Odd Numbers: ${oddNumber} <br> Cube: ${oddNumber.map(el => el*el*el)}`;
    }
    document.getElementById("enteredNum").value = ""
}