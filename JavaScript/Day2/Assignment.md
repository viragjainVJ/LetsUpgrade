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

