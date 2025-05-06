// What is Recursion ?
// It is a phenomenon when a function calls itself indefinitely until a specified condition is fulfilled.

// Let’s understand recursion with the help of an illustration: 
// As we can see in the above image, a function is calling the same function inside its body.Since there is no condition to stop the recursive calls, the calls will run indefinitely until the stack runs out of memory(stack overflow).

// What is Stack Overflow in Recursion ?
//     Whenever recursion calls are executed, they’re simultaneously stored in a recursion stack where they wait for the completion of the recursive function. A recursive function can only be completed if a base condition is fulfilled and the control returns to the parent function.
// But, when there is no base condition given for a particular recursive function, it gets called indefinitely which results in a Stack Overflow i.e, exceeding the memory limit of the recursion stack and hence the program terminates giving a Segmentation Fault error. 
// The illustration above also represents the case of a Stack Overflow as there is no terminating condition for recursion to stop, hence it will also result in a memory limit exceeded error.

function f() {
    let count = 0;
    if (count === 3) {  //Base Condition
        return;
    }
    count++;
    f();
}
f();