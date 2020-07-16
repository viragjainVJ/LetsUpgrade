## 1. Various Methods in Console:
```
log()
error()
warn()
clear()
time() and timeEnd()
table()
count()
group() and groupEnd()
custom console logs
```
- Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc.
```
console.log('abc');  
console.log(1); 
console.log(true); 
console.log(null); 
console.log(undefined);  
console.log([1, 2, 3, 4]); // array inside log 
console.log({a:1, b:2, c:3}); // object inside log 
```
- To log error message to the console.
```
console.error('This is a simple error'); 
```
- To log warning message to the console. By default the warning message will be highlighted with yellow color.  
```
console.warn('This is a warning.');
```

- To clear the console.
```
console.clear();
```
- Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object.
```
console.time('abc'); 
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); // calling fun(); 
 fun2(); // calling fun2(); 
console.timeEnd('abc');
```
- To generate a table inside a console. The input must be an array or an object.
```
console.table({'a':1, 'b':2});
```
- To count the number that the function hit.
```
for(let i=0;i<5;i++){ 
    console.count(i); 
}
```
- group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented.
```
console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('vivi vini vici'); 
console.groupEnd('simple'); 
console.log('new section'); 
```
- User can add Styling to the console logs in order to make logs Custom.
```
  const spacing = '10px'; 
  const styles =  
        `padding: ${spacing}; background-color: white; color: green; font-style:  
         italic; border: 1px solid black; font-size: 2em;`; 
  console.log('%cGeeks for Geeks', styles); 
```
## 2. Difference Between var, let and const
- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within its scope, let variables can be updated but not re-declared, const variables can neither be updated nor re-declared
- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration.
```
//var
 var greeter = "hey hi";
    
 function newFunction() {
     var hello = "hello";
 }
 
 // let
 let greeting = "say Hi";
 let times = 4;

 if (times > 3) {
      let hello = "say Hello instead";
      console.log(hello);// "say Hello instead"
  }
 console.log(hello) // hello is not defined
 
 //const
 const greeting = {
        message: "say Hi",
        times: 4
    }
 ```

## 3. DataTypes in JS
- **Number**
The number type represents both integer and floating point numbers.
There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

- **String**
A string in JavaScript must be surrounded by quotes.
In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}

- **Boolean**
The boolean type has only two values: true and false.

This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

- **null**
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

- **undefined**
The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined.

- **Objects**
The object type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

- **symbol**
symbol for unique identifiers.
Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values.
```
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```
