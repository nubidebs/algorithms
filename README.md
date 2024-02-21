# Algos

This repos contains the solution of the algo I solved so far.

## [Express: Echo server](https://www.codewars.com/kata/62bf6fa7eccf8e000f9cae60) (6kyu)

In this Express exercise, your task is to create an app that responds to `GET` and`POST` requests on the `/` route. The responses will echo a message string from the request.

`GET /`

This route will read the message parameter and send a `JSON` response containing the echoed message value. The response should have a 200 status.
An example query string is ?message=hello which would be echoed as `{"message": "hello"}`. An empty string, ?message=, is valid and should be echoed normally.

Respond with a `422` status when no query parameter message exists, or if the message type is other than a string. The Content-Type header should be set to `text/plain` rather than `application/json` in this case.

`POST /`

This route will parse the request body as `JSON` and echo a response containing the value from the "message" key of the request. The JSON response is in the same format as the `GET` above: `{"message": "some message"}`. Set a 200 status on the response to indicate that the request was OK. An empty string `("message": "")` is valid and should be echoed.

Respond with a `422` status when no "message" key exists, or if the message type is other than a string. The Content-Type header should be set to text/plain rather than `application/json` in this case.

All `JSON` sent to the `POST` route will be well-formed.

For either method, a request is still valid if additional parameters or keys are present in the query or JSON body. You can ignore them and echo message as normal.

Notes
Please use the variable name app to implement your server. Don't use app.listen() to start the Express server; the test suite will invoke the route handlers directly on the app object.

Your solution file is automatically included with the test suite, so no export is necessary.

Test input strings consist of alphanumeric characters and spaces.

If you're not familiar with the Express concepts needed to complete this kata, feel free to reference the documentation and other resources as you build your solution.

## [Unique in Order](https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript) (6kyu)

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

```js
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'];
uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D'];
uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];
```

## [Does my number look big in this](https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript) (6kyu)

A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

```js
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```

and 1652 (4 digits), which isn't:

```js
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g.`PHP`.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

## [Ascend, Descend, Repeat?](https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f) (6kyu)

You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Decends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:

```js
 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
```

Notes:
length will always be non-negative
negative numbers can appear for minimum and maximum values
hyphens/dashes ("-") for negative numbers do count towards the length
the resulting string must be truncated to the exact length provided
return an empty string if maximum < minimum or length == 0
minimum and maximum can equal one another and result in a single number repeated for the length of the string

## [Last digit of a very large number](https://www.codewars.com/kata/5511b2f550906349a70004e1) (5kyu)

Define a function that takes in two non-negative integers `a` and `b` and returns the last decimal digit of `a^b`.
Note that `a` and `b` may be very large!

For example, the last decimal digit of `9^7` is `9`, since `9^7`=`47829699`.

You may assume that the input will always be valid.

Examples

```js
lastDigit('4', '1'); // returns 4
lastDigit('4', '2'); // returns 6
lastDigit('9', '7'); // returns 9
lastDigit('10', '10000000000'); // returns 0
```

## [Linked List](https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list)

This is an to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's  element, one per line. If the head pointer is `null` (indicating the list is empty), there is nothing to print.

__Function Description__
Complete the printLinkedList function in the editor below.
`printLinkedList` has the following parameter(s):
    - `SinglyLinkedListNode head`: a reference to the head of the list

__Print__
    - For each node, print its  value on a new line (console.log in Javascript).

__Input Format__
    - The first line of input contains , the number of elements in the linked list.
    - The next  lines contain one element each, the  values for each node.
```
Sample Input
2
16
13
Sample Output
16
13
```
Explanation

There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the printLinkedList function should print 16 and 13 each on a new line.
*/


## [Mirror Object](https://www.codewars.com/kata/586305e8916e244b66001a93) (6kyu)

Can you mirror the properties on an object?

Given an object with properties with no value

```
abc: -
arara: -
xyz: -
```

Return a new object that have the properties with its mirrored key!

```
abc: cba
arara: arara
xyz: zyx
"You cannot change the original object, because if you did that the reflection would change."
```

## [Move Zeros to the end](https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript) (6kyu)

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```js
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
```

## [Strip Comments](https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript) (4kyu)

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

```
apples, pears # and bananas
grapes
bananas !apples
```

The output expected would be:

```
apples, pears
grapes
bananas
```

The code would be called like so:

```
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
```

## [Extract the domain name from a URL](https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript) (5kyu)

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```
- url = "http://github.com/carbonfive/raygun" -> domain name = "github"
- url = "http://www.zombie-bites.com" -> domain name = "zombie-bites"
- url = "https://www.cnet.com" -> domain name = cnet"
```
## [Directions Reduction](https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript) (5kyu)

Once upon a time, on a way through the old wild mountainous west,…

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
```

You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
```
["WEST"]
```

Other examples:

In `["NORTH", "SOUTH", "EAST", "WEST"]`, the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes `["EAST", "WEST"]`, now "EAST" and "WEST" annihilate each other, therefore, the final result is `[]` (nil in Clojure).

In `["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]`, "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to `["WEST", "WEST"]`.

Task

Write a function `dirReduc` which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).


Notes

Not all paths can be made simpler. The path `["NORTH", "WEST", "SOUTH", "EAST"]` is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : `["NORTH", "WEST", "SOUTH", "EAST"]`.


## [RGB To Hex Conversion](https://www.codewars.com/kata/513e08acc600c94f01000001/javascript) (5kyu)

The rgb function is incomplete. Complete it so that passing in `RGB` decimal values will result in a `hexadecimal representation` being returned. Valid decimal values for `RGB` are `0 - 255`. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be `6 characters long`, the shorthand with 3 will not work here.

The following are examples of expected output values:

```
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```
