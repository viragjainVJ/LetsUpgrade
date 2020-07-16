## String Methods
- **String Length**
The length property returns the length of a string:
```
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```
- **Finding a String in a String**
The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
```
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
```
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
```
Both indexOf(), and lastIndexOf() return -1 if the text is not found.
Both methods accept a second parameter as the starting position for the search. The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
- **Searching for a String**
The search() method searches a string for a specified value and returns the position of the match:
```
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```
- **Extracting String Parts**
There are 3 methods for extracting a part of a string:

*slice(start, end)* : slice() extracts a part of a string and returns the extracted part in a new string.
```
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
```
If a parameter is negative, the position is counted from the end of the string.
*substring(start, end)*: substring() is similar to slice().
The difference is that substring() cannot accept negative indexes.
```
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
```
*substr(start, length)*: substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
```
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
```
*Replacing String Content*:
The replace() method replaces a specified value with another value in a string:
```
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```
To replace case insensitive, use a regular expression with an /i flag (insensitive):
```
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
```
To replace all matches, use a regular expression with a /g flag (global match):
```
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
```
*String.trim()*
The trim() method removes whitespace from both sides of a string:
```
var str = "       Hello World!        ";
alert(str.trim());
```
*The charCodeAt() Method*
The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).
```
var str = "HELLO WORLD";
str.charCodeAt(0); 
```

## JS Array Methods
**Converting Arrays to Strings**
The JavaScript method toString() converts an array to a string of (comma separated) array values.
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```
**Popping and Pushing**
When you work with arrays, it is easy to remove elements and add new elements.
Popping items out of an array, or pushing items into an array.
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); 

fruits.push("Kiwi"); 
```
**Deleting Elements**
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
```
**Splicing an Array**
The splice() method can be used to add new items to an array:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```
- The first parameter (2) defines the position where new elements should be added (spliced in).
- The second parameter (0) defines how many elements should be removed.
- The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
**Merging (Concatenating) Arrays**
The concat() method creates a new array by merging (concatenating) existing arrays:
```
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); 
```
**Slicing an Array**
The slice() method slices out a piece of an array into a new array.
```
var f = ["a", "b", "c", "d", "e"];
var demo = f.slice(1);
```
