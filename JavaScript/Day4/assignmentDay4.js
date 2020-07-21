let forLoop = function(){
    let html = '<ul>';
    for(let i=1; i<=100; i++){
        if(i%3 == 0 && i%5 == 0){
            html += `<li>fizzbuzz (${i})</li>`
        } else if(i%5 == 0) {
            html += `<li>buzz (${i})</li>`
        } else if(i%3 == 0) {
            html += `<li>fizz (${i})</li>`
        }
    }
    html += '</ul>';
    document.getElementById("output").innerHTML = html;
}

let destructureObject = () => {
    const student = {
        name: "Helsinki",
        age: 24,
        projects: {
            diceGame: "Two Player dice game using Javascript"
        }
    }

    let {name, age, projects : {diceGame}} = student;
    let obj = JSON.stringify(student, null, 4);
    alert('Destructure Object: ' + obj);
    document.getElementById("output").innerHTML = `Name: ${name}, Age: ${age}, Projects: ${diceGame}`;
}

let shoppingList = () => {
    let shoppingList = ['Tomato sauce', 'Mustard', 'Barbecue sauce', 'Red-wine vinegar', 'Salsa']
    let list = '<ul id = "myList">';
    for(item in shoppingList){
        list += `<li>${shoppingList[item]}</li>`
    }
    list += '</ul>'
    document.getElementById("output").innerHTML = `<h4>Open Console to Get ShoppingList and ShoppingBasket</h4><h3>MyList:</h3>${list}`;
    
    let shoppingBasket = [...shoppingList];
    console.log('ShoppingList: ', shoppingList);
    console.log('ShoppingBasket: ', shoppingBasket);

    //check if Addd Button Exists
    if(!document.getElementById('add')){
        //Dynamically Create Add Button
        let btn = document.createElement("BUTTON");
        btn.setAttribute("id", "add");
        btn.innerHTML = "Add More Items";
        document.body.appendChild(btn);
        btn.addEventListener("click", function() {
            //Add items to the Shoppingbasket List
            let li = document.createElement("li");
            let inputValue = prompt('Enter Grocery Item Name', '');
            shoppingBasket.push(inputValue);
            let t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') {
            alert("You must write something!");
            } else {
            document.getElementById("myList").appendChild(li);
            }
            console.log('ShoppingList: ', shoppingList);
            console.log('ShoppingBasket: ', shoppingBasket);
        });
    }
}

let printPrime = () =>{
    let input = prompt('Enter value of n:', 10);
    let primeNumbers = [];
    for (var counter = 0; counter <= input; counter++) {
        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            primeNumbers.push(counter);
        }
    }
    console.log(primeNumbers);
    document.getElementById("output").innerHTML = `Prime Number between 2 to ${input} are ${primeNumbers}`;
}

function enterVal(value) {
    if(!value){
        document.getElementById("displayValue").value = "";
        return;
    }
    if(value === 'sqrt') {
        solve();
        let sqrt = Math.sqrt(document.getElementById("displayValue").value)
        document.getElementById("displayValue").value = sqrt;
        return;
    }
    if(value === '%') {
        solve();
        let number = document.getElementById("displayValue").value;
        document.getElementById("displayValue").value = number/100;
        return;
    } 
    document.getElementById("displayValue").value += value;
}

function solve() {
    let x = document.getElementById("displayValue").value
    let y = eval(x)
    document.getElementById("displayValue").value = y
}

let getCommission = () => {
    let sales = prompt('Enter sales made in a year: ', 1000);
    let totalCommission = 0;

    if(sales > 20000) {
        totalCommission += (sales-20000)*0.1
        sales = 20000;
    }
    if(sales > 10000 ) {
        totalCommission += (sales-10000)*(0.07)
        sales = 10000;
    }
    if(sales > 5000) {
        totalCommission += (sales-5000)*(0.05)
        sales = 5000
    }
    if(sales > 0){
        totalCommission += (sales)*(0.02)
        sales = 0
    }
    document.getElementById("output").innerHTML = `Total Commission for the Year: ${totalCommission}`;
}

let getPrompt = () => {
    let num = prompt('enter', 100);
    num && num < 100 ? getPrompt() : "";
}

let ask = (question) => {
    (confirm(question) ? () => alert("You Agreed."): () => alert("You Cancelled the execution."))(); 
}