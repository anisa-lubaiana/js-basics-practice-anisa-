// operators.js
console.log("Demonstrating basic arithmetic operators in JavaScript:");

{
    console.log("1.Arithmetic Operations:");
    let a = 10;
    let b = 5;
    console.log("Given a = ", a, " and b = ", b);
    console.log("Addition: " ,(a + b));
    console.log("Subtraction: " ,(a - b));
    console.log("Multiplication: " ,(a * b));
    console.log("Division: " ,(a / b));
}   
{
    console.log("2.Assignment Operations:");
    let x = 15;
    console.log("Initial value of x: ", x);
    x += 5;
    console.log("After x += 5: ", x);
    x -= 3;
    console.log("After x -= 3: ", x);
    x *= 2;
    console.log("After x *= 2: ", x);
    x /= 4;
    console.log("After x /= 4: ", x);
}
{
    console.log("3.Comparison Operations:");
    let p = 20;
    let q = 15;
    console.log("Given p = ", p, " and q = ", q);
    console.log("Is p equal to q? ", (p == q));
    console.log("Is p not equal to q? ", (p != q));
    console.log("Is p greater than q? ", (p > q));
    console.log("Is p less than q? ", (p < q));
    console.log("Is p greater than or equal to q? ", (p >= q));
    console.log("Is p less than or equal to q? ", (p <= q));                    
}
{
    console.log("4.Logical Operations:");
    let r = true;
    let s = false;
    console.log("Given r = ", r, " and s = ", s);
    console.log("r AND s: ", (r && s));
    console.log("r OR s: ", (r || s));
    console.log("NOT r: ", (!r));
}
{
    console.log("5.String Concatenation:");
    let str1 = "Hello, ";
    let str2 = "ANISA!";
    let result = str1 + str2;
    console.log("Concatenated String: ", result);
}
console.log(".......................................");
console.log("That's all for basic operators in JavaScript!");