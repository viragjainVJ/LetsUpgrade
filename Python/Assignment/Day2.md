# Python DataType and its default methods

- ## List
A single list may contain DataTypes like Integers, Strings, as well as Objects. Lists are mutable, and hence, they can be altered even after their creation.
Lists are a useful tool for preserving a sequence of data and further iterating over it.
```
lst = []
lst1 = [1,2,3, "LetsUpgrade", [4,5,6]]
```
- Size Of List
```
len(lst) or len(lst1) //0 or 5
```
**Adding Elements to List**
1. append() method
Only one element at a time can be added to the list by using append() method, for addition of multiple elements with the append() method, loops are used. Tuples can also be added to the List with the use of append method because tuples are immutable. Unlike Sets, Lists can also be added to the existing list with the use of append() method.
```
lst.append(1) 
lst.append(2) 
lst.append(4)
print(lst) //[1,2,3]
lst.append((5,6))
print(lst) //[1,2,3,(5,6)]
```
2. insert() method
For addition of element at the desired position, insert() method is used.
```
lst.append(3, 12)
print(lst) //[1,2,3, 12, (5,6)]
```
3. extend() method
This method is used to add multiple elements at the same time at the end of the list.
```
lst.extend([8, "lets", "welcome"])
print(lst) //[1,2,3, 12, (5,6), 8, "lets", "welcome"]
```
**Removing Elements of List**
4. remove() method
Remove method in List will only remove the first occurrence of the searched element.
```
lst.remove(3)
lst.remove(12)
print(lst) //[1,2,(5,6), 8, "lets", "welcome"]
```
5. pop() method
Pop() function can also be used to remove and return an element from the set, but by default it removes only the last element of the set, to remove element from a specific position of the List, index of the element is passed as an argument to the pop() method.
```
lst.pop()
lst.pop(2)
print(lst)//[1,2,8,"lets"]
```