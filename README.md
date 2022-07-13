# Katas

Every morning I try to do a kata to wake up my brain before working.
This repos contains the solution of my daily katas. Each solution contains the first passing attempt and the refactored version.

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
