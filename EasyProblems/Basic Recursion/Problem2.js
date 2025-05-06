// Now, after understanding the basics of recursion, the recursion tree, and the base case of recursion we can solve some basic problems of recursion which would strengthen our concepts and make us understand how recursion functions at its core.

// Problem: Print your Name N times using recursion

// Since in this problem, there is no count that can be incremented each time we call a function, how can we keep a track of how many times we have printed the name?

// For this problem, we’re going to be using a function along with parameters in which we can keep track of the number of times we’ve printed something. To understand this problem better, let us see the pseudocode below for this : 

// void func( i, n )
// {
//    if(i>n) return;
//  print(“Raj”);
//    f( i+1,N );
// }
// main()
// {
//   int n;
//   input(n);
//   f(1,n);
// }
// We can clearly see in this pseudocode that we first call the function when the value of i is 1 and then print the name and increment i by 1 inside the parameter of the function and make a call again. But, we know that this will go on forever as i will be increasing continuously after every function call. So, to avoid this we put a base condition that if i exceeds n, then simply terminate the current recursive call and return to the previous call.

// In this way, the text that we want to print would be printed n times and as soon as we exceed the count of printing by n, the function terminates.

function f(i, n) {
    if (i > n) return;
    console.log("Pallavi");
    f(i + 1, n)
}
f(1, 3);