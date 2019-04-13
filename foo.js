var foo = "foo";

//  this is a function declaration because it is the first thing typed on its present line
function bob(){
  var foo = "foo2";
  console.log(foo);  // foo2
}

bob():

console.log(foo);  // foo


//  what's happening here is that we are giving var foo a variable of foo it is a global defined variable
//  then we are making a function named bob and assigning a local scope var with value of foo2
//  we are logging the local foo var with console.log
// then we are console.log(foo) to call the globally scoped foo


// further explanation of this code
//  the java script engine looks are bob() first and then it evaluates the bob function to see what we asked bob() to do



//  here we will write a function expression an IIFE

( function bob(){
  var foo = "foo2";
  console.log(foo); // foo2
})();

console.log(foo);  // from global scope on line 1  -- foo
