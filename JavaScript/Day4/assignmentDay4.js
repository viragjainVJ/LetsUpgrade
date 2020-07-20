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