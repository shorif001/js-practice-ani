//// IIFEs (Immediately Invokeable Function Expressions)

// normal function call korar jonno program er sheshe function-name(); likhte hoy
// kintu IIFEs er maddhome function-name call korte hoyna.

// normal function

// function display(){
//     console.log('hello');
// }

// display();

// IIFEs function

// (function display(){
//     console.log('hello');
// })();

(function display(message) {
  console.log(message);
})("Hello");

// Function Expressions

// ( ), { }, [ ], < >
// Task 7: create an IIFEs that print sum of 2 numbers
