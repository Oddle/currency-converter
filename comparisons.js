// All about ==

5 == 5; //true

6 == 5; //false

// All about >, <, >=, <=

6 > 5; //true

8 < 5; //false

9 <= 9; //true

// Evaluate after operations

5 + 2 > 7; //false

50 / 5 > 7; //true

// All about comparisons and Strings

5 == "5"; //false

"7" == "5"; //false

"9" == "9": //true

"good" == "bad" //false

"number" == "6" //false

// They have to be exactly similar to
// return true

// Finally, we'll also introduce !.
// ! is a negation, so if == means equals,
// !== means not equals

5 !== 6; //true

2 !== 2 //false

// However, this ! is slightly less
// commonly used.

//Exercise Time!

1 + 1 == 2;

5443 >= 5443;

"7" / 7 == 1;

"string " == "string";

"bai nian" !== "bainian";

// Now comes the fun part
// Introducing AND && and OR ||

// Firstly, && AND
// It only returns true when both
// expressions return true

true && true; //true

true && false; //false

false && true; //false

false && false; //false

5 == 5 && 3 < 9; //true

9 >= 3 && 2 > 7; //false

// On the other hand, || OR
// It returns true as long as either
// side returns true

true || true; //true

true || false; //true

false || true; //true

false || false; //false

5 < 9 || "x" == "y"; //true

3 - 9 > 0 || 4 < 8 / 1; //false

// Time for some fun exercises!

3 > 1 && 7 < 9;

6 + 7  < 4 || "try" == "tries";

false == false && true == false;

false == false || true == false;

10 - 5 > 8 + 9 || "x" + "y" == "y" + "x";

// Even more fun stuff

5 == 5 && 7 < 5 || 66 > 99;

3 > 6 - 4 && 6 == 6 && "fail" == "fail" && true == true;

1 < 5 || 3 + 8 < 6 || 7 + 2 < 6 || true == false;

// Why are these important?

// It is used when instructing the computer to do
// a job when a condition is fulfilled
// e.g. (in pseudocode)

//in Oddle
if (order_amount < minimum order)
  then cannot proceed to checkout

if (order_amount > minimum order)
  then proceed to checkout

// or when signing up for services

if (input_email == one_of_the_emails_in_database)
  then do not allow to register

// even when
if (value_in_ezlink_card < 2)
  then "please top up card"

// can you think of any other real
// life examples?
