# Python DataType and its default methods

- ## List
A single list may contain DataTypes like Integers, Strings, as well as Objects. Lists are mutable, and hence, they can be altered even after their creation.
Lists are a useful tool for preserving a sequence of data and further iterating over it.
```
lst = []
lst1 = [1,2,3, "LetsUpgrade", [4,5,6]]
```
##### Size Of List
```
len(lst) or len(lst1) //0 or 5
```
**Adding Elements to List**
1. *append() method*:

Only one element at a time can be added to the list by using append() method, for addition of multiple elements with the append() method, loops are used. Tuples can also be added to the List with the use of append method because tuples are immutable. Unlike Sets, Lists can also be added to the existing list with the use of append() method.
```
lst.append(1) 
lst.append(2) 
lst.append(4)
print(lst) //[1,2,3]
lst.append((5,6))
print(lst) //[1,2,3,(5,6)]
```
2. *insert() method*:

For addition of element at the desired position, insert() method is used.
```
lst.append(3, 12)
print(lst) //[1,2,3, 12, (5,6)]
```
3. *extend() method*:

This method is used to add multiple elements at the same time at the end of the list.
```
lst.extend([8, "lets", "welcome"])
print(lst) //[1,2,3, 12, (5,6), 8, "lets", "welcome"]
```
**Removing Elements of List**

4. *remove() method*:

Remove method in List will only remove the first occurrence of the searched element.
```
lst.remove(3)
lst.remove(12)
print(lst) //[1,2,(5,6), 8, "lets", "welcome"]
```
5. *pop() method*:

Pop() function can also be used to remove and return an element from the set, but by default it removes only the last element of the set, to remove element from a specific position of the List, index of the element is passed as an argument to the pop() method.
```
lst.pop()
lst.pop(2)
print(lst)//[1,2,8,"lets"]
```

- ## Dictionary
Dictionary holds a pair of values, one being the Key and the other corresponding pair element being its Key:value. Values in a dictionary can be of any datatype and can be duplicated, whereas keys can’t be repeated and must be immutable.
Dictionary keys are case sensitive, same name but different cases of Key will be treated distinctly.
```
dt = {1: 'code', 2: 'me', 3: 'again'} 
print(dt) //{1: 'code', 2: 'me', 3: 'again'}
dt1 = dict({1: 'code', 2: 'calmly', 3:'welcome'}) 
print("\nDictionary with the use of dict(): ") 
print(dt1) //{1: 'code', 2: 'calmly', 3: 'welcome'}
  
//Creating a Dictionary with each item as a Pair 
dt2 = dict([(1, 'Codificar'), (2, 'For')]) 
print("\nDictionary with each item as a pair: ") 
print(dt2) //{1: 'Codificar', 2: 'For'}
```
1. *copy() method*:

Returns a shallow copy of the dictionary.
```
newDt = dt.copy()
print(newDt) //{1: 'code', 2: 'me', 3: 'again'}
```
2. *clear() method*:

Removes all items from the dictionary.
```
text1 = {1: "python", 2: "learn"} 
text2 = text1 
  
// Using clear makes both text1 and text2 empty. 
text1.clear() 
  
print('After removing items using clear()') 
print(text1) //{}
print(text2) //{}
  
text1 = {1: "one", 2: "two"} 
text2 = text1 
  
//This makes only text1 empty. 
text1 = {} 
  
print('After removing items by assigning {}') 
print(text1) //{}
print(text2) //{1: "one", 2: "two"}
```
3. *pop() method*:

Returns :
Value associated to deleted key-value pair, if key is present.
Default value if specified if key is not present.
KeyError, if key not present and default value not specified.
```
test_dict = { "Nikhil" : 7, "Akshat" : 1, "Akash" : 2 } 
   
print ("The dictionary before deletion : " + str(test_dict)) //The dictionary before deletion : {'Nikhil': 7, 'Akshat': 1, 'Akash': 2}
  
//using pop to return and remove key-value pair. 
pop_ele = test_dict.pop('Akash') 
   
print ("Value associated to poppped key is : " + str(pop_ele)) //Value associated to poppped key is : 2
  
print ("Dictionary after deletion is : " + str(test_dict)) //Dictionary after deletion is : {'Nikhil': 7, 'Akshat': 1}
```
4. *update() method*:

Returns: It doesn’t return any value but updates the Dictionary with elements from a dictionary object or an iterable object of key/value pairs.
```
Dictionary1 = { 'A': 'python', 'B': 'js' } 
Dictionary2 = { 'B': 'java' } 
  
print(Dictionary1) //{ 'A': 'python', 'B': 'js' }
  
Dictionary1.update(Dictionary2) 
print(Dictionary1) //{ 'A': 'python', 'B': 'java' }

Dictionary1.update(C = 'js', D = 'ruby')
print(Dictionary1) //{'A': 'python', 'B': 'java', 'C': 'js', 'D': 'ruby'}
```
5.*keys() method*:

A view object is returned that displays all the keys. This view object changes according to the changes in the dictionary.
```
print(Dictionary1.keys()) //dict_keys(['A', 'B', 'C', 'D'])
```

- ## Sets
Set is an unordered collection of data type that is iterable, mutable and has no duplicate elements. The order of elements in a set is undefined though it may consist of various elements.

The major advantage of using a set, as opposed to a list, is that it has a highly optimized method for checking whether a specific element is contained in the set.
```
st = set()
print(st)
st = set('mississipi')
print(st)
st = set(["keep", "calm", "keep", "coding"])
print(st)
Output:
set()
{'s', 'm', 'i', 'p'}
{'keep', 'coding', 'calm'}
```

1. *add() method*:

Only one element at a time can be added to the set by using add() method, loops are used to add multiple elements at a time with the use of add() method.
```
st = set()
st.add(1)
st.add((6,7))
st.add(9)
for i in range(1, 6): 
    st.add(i) 
print(st)
Output:
{1, 2, 3, 4, 5, 9, (6, 7)}
```
2. *update() method*:

The update() method accepts lists, strings, tuples as well as other sets as its arguments. In all of these cases, duplicate elements are avoided
```
st.update([10,11])
print(st) //{1, 2, 3, 4, 5, 9, 10, 11, (6, 7)}
```
3. *remove() or discard() method*:

remove() function but a KeyError arises if element doesn’t exist in the set. To remove elements from a set without KeyError, use discard(), if the element doesn’t exist in the set, it remains unchanged.
```
 set1 = set([1, 2, 3, 4, 5, 6,  
            7, 8, 9, 10, 11, 12]) 
print(set1) //{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}

set1.remove(5) 
set1.remove(6) 
print(set1) //{1, 2, 3, 4, 7, 8, 9, 10, 11, 12}
set1.discard(8) 
set1.discard(9) 
set1.discard(6)
print(set1) //{1, 2, 3, 4, 7, 10, 11, 12}
```
4. *pop() method*:

Pop() function can also be used to remove and return an element from the set, but it removes only the last element of the set.
```
set1.pop()
print(set1) //{2, 3, 4, 7, 10, 11, 12}
```
5. *issubset() method*:

Returns True if all elements of a set A are present in another set B which is passed as an argument and returns false if all elements not present.
```
A = {4, 1, 3, 5} 
B = {6, 0, 4, 1, 5, 0, 3, 5} 
print(A.issubset(B)) //True
print(B.issubset(A)) //False
```

- ## Tuples
Tuples are created by placing sequence of values separated by ‘comma’ with or without the use of parentheses for grouping of data sequence.
Creation of Python tuple without the use of parentheses is known as Tuple Packing.
```
Tuple1 = () 
print (Tuple1) 
   
Tuple1 = ('Geeks', 'For') 
print(Tuple1) 

list1 = [1, 2, 4, 5, 6] 
print(tuple(list1)) 
 
Tuple1 = tuple('Geeks') 
print(Tuple1) 

Output:
()
('Geeks', 'For')
(1, 2, 4, 5, 6)
('G', 'e', 'e', 'k', 's')

//Unpacking of Tuple
a, b, c, d,e = Tuple1 
print(a,b,c,d,e)
```

1. *del() method*:

Tuples are immutable and hence they do not allow deletion of a part of it. Entire tuple gets deleted by the use of del() method.
```
Tuple1 = (0, 1, 2, 3, 4) 
del Tuple1 
  
print(Tuple1) 
```

2. *max() method*:

Returns the maximum value in the Tuple
```
tup = (0,1,2,3,4,5)
print(max(tup)) //5
```

3. *min() method*:

Returns the minimum value in the Tuple
```
tup = (0,1,2,3,4,5)
print(min(tup)) //0
```

4. *sorted() method*:

Returns the sorted list of Tuple.
```
Tuple1 = (2, 4, 3, 0, 1) 
print(sorted(Tuple1)) //[0, 1, 2, 3, 4]
print(type(sorted(Tuple1))) //<class 'list'>
```

5. *sum() method*:

Returns the summation of elements in tuple.
```
Tuple1 = (2, 4, 3, 0, 1)
print(sum(Tuple1)) //10
```

- ## Strings
 Strings are arrays of bytes representing Unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1. Square brackets can be used to access elements of the string.
```
String1 = 'Welcome to the Codificar World'
print(String1) 
  
# Creating a String 
# with double Quotes 
String1 = "I'm a Codificar"
print(String1) 
  
# Creating a String 
# with triple Quotes 
String1 = '''I'm a Codificar and I live in a world of "Tech"'''
print(String1) 
  
# Creating String with triple 
# Quotes allows multiple lines 
String1 = '''Code 
            For 
            Life'''
print(String1)

Output:
Welcome to the Codificar World
I'm a Codificar
I'm a Codificar and I live in a world of "Tech"
Code 
            For 
            Life
```

1. *String slicing*:

To access a range of characters in the String, method of slicing is used. Slicing in a String is done by using a Slicing operator (colon).
```
String1 = "CodeToLearn"
print("Initial String: ")  
print(String1) 
  
# Printing 3rd to 12th character 
print(String1[3:11]) 
  
# Printing characters between  
# 3rd and 2nd last character  
print(String1[3:-2])

Output:
Initial String: 
CodeToLearn
eToLearn
eToLea
```

2. *Formatting of Strings*:

Strings in Python can be formatted with the use of format() method which is very versatile and powerful tool for formatting of Strings. Format method in String contains curly braces {} as placeholders which can hold arguments according to position or keyword to specify the order.
```
String1 = "{} {} {}".format('Code', 'For', 'Life') 
print(String1) 
  
# Positional Formatting 
String1 = "{1} {0} {2}".format('Code', 'For', 'Life') 
print(String1) 
  
# Keyword Formatting 
String1 = "{l} {f} {c}".format(c = 'Code', f = 'For', l = 'Life') 
print(String1)

Output:
Code For Life
For Code Life
Life For Code
```

3. *endswith() method*:


The endswith() method returns True if a string ends with the given suffix otherwise returns False.
```
str = "Code For Life"
print(str.endswith("Lif"))
print(str.endswith("Life"))
print(str.endswith("Life", 9))
print(str.endswith("Life", 9, 13))
print(str.endswith("Life", 9, 12))

output:
False
True
True
True
False
```

4. *isdigit() method*:

The isdigit() method returns “True” if all characters in the string are digits, Otherwise, It returns “False”. 
```
string = '15460'
print(string.isdigit()) //True
  
 
string = '154ayush60'
print(string.isdigit()) //False
```

5. *index() method*:

Returns the position of the first occurrence of substring in a string.
```
voltages = ["001101 AC", "0011100 DC", "0011100 AC", "001 DC"]  
  
# initializing argument string  
type = "AC"
  
# initializing bit-length calculator 
sum_bits = 0
  
for i in voltages :  
      
    ch = i 
      
    if (ch[len(ch)-2]!='D'): 
       # extracts the length of bits in string  
       bit_len = ch.index(type)-1
         
       # adds to total 
       sum_bits = sum_bits + bit_len 
  
print ("The total bit length of AC is : ",end="") 
print (sum_bits) 

output:
The total bit length of AC is : 13
```