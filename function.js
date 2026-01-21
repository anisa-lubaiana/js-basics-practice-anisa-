console.log("........................................");
console.log("Demonstrating basic functions in JavaScript:");
{
    console.log("1.Simple Function without Parameters:");
    function greet() {
        return "Hello, welcome to JavaScript functions!";
    }   
    console.log(greet());
}
{
    console.log("2.Function with Parameters:");
    function add (num1, num2) {
        return num1 + num2;
    }
    console.log("Sum of 8 and 12 is: ", add (8, 12));
}
{
    console.log("3.Function with Return Value:");
    function multiply (x, y) {
        return x * y;
    }   
    let result = multiply (4, 5);
    console.log("Product of 4 and 5 is: ", result);
}
{
    console.log("4.Arrow Function:");
    const square = (n) => n * n;
    console.log("Square of 6 is: ", square(6));
}
console.log(".......................................");
console.log("That's all for basic functions in JavaScript!");