# Uncovering the Truth About Default Parameters in JavaScript Functions

If you're new to JavaScript or you're still trying to understand the mechanics of how function arguments and parameters work, this article is for you. With the release of ECMAScript 6 (ES6), also known as ES2015, new features were added to the language to make it even more powerful and efficient. One of these new features is default parameters in JavaScript functions, which can help make your code cleaner and more organized. We'll dive into the details of how JavaScript handles function arguments and parameters, and why it does so.

### Understanding the Relationship between Arguments and Parameters

The first thing to understand is the difference between function arguments and parameters. When a function is defined, it can be designed to accept one or more parameters. These parameters are essentially placeholders for the values that the function expects to receive when it is called.

For example, if we have a function that accepts a single parameter called "a", we would define it like this:

```javascript
function example(a) {
  // function code goes here
}
```

When we call this function, we pass in an argument for the "a" parameter:

```javascript
example(42);
```

In this case, the value 42 is the argument that we're passing to the function.

### Assigning Values to Parameters

When the function is called, the values of the arguments are assigned to the parameters. This means that if we have a function like the one in the previous example, and we call it with an argument of 42, the "a" parameter gets assigned the value of 42.

```javascript
function example(a) {
  console.log(a);
}

example(42); // logs 42
```

### Creating a New Scope

When you call a function without default parameter values, a new scope is created for the body of the function, and the parameters are created in that scope like top-level variables in the function.

However, when there are default parameter values, an additional scope is involved. This is because default parameter values are expressions, not just literals.

```javascript
function example(a = 1, b = a + 1) {
  // function code goes here
}
```

In this example, the "a" parameter has a default value of 1, and the "b" parameter has a default value of "a + 1". When this function is called, a new scope is created for the function body and another scope is created for the parameter list.

**An example of the above code is when it transforms:-**

```javascript
function example() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a + 1;
} // function code goes here
```

isn't it interesting right?

This is done to prevent expressions in the parameter list from referring to hoisted variables and functions declared in the function body.

### Using Parameters in an Expression

One interesting thing about how JavaScript handles function parameters is that they're processed in source code order. This means that later parameters can refer to earlier parameters, but earlier parameters can't refer to later ones because those aren't initialized yet.

For example, you can define a function like this:

```javascript
function greet(name, greeting, message = greeting + ' ' + name) {
  console.log(message);
}

greet("John", "Hello"); // logs "Hello John"
```

In this example, the "message" parameter has a default value that includes both the "name" and "greeting" parameters. Since "greeting" is defined before "message" in the parameter list, it can be used in the expression that defines "message".

**An example of the above code is when it transforms:-**

```javascript
function greet(name, greeting) {
  var message =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : greeting + " " + name;
  console.log(message);
}
```

JavaScript's handling of function arguments and parameters can seem a bit complex at first, but understanding how it works is essential for writing effective and maintainable code. By keeping the relationship between arguments and parameters in mind, and being aware of how default parameters and scopes work, you can create more powerful and flexible functions in your JavaScript code.

If you enjoy reading my blog, please consider subscribing to my newsletter, leaving a comment, and liking my posts. By subscribing to my newsletter, you'll receive regular updates on my latest blog posts, as well as exclusive content and other exciting news. Leaving comments and liking my posts also helps to show support for my work and encourages me to keep creating valuable content. Thank you for your support and I look forward to continuing to provide you with informative and entertaining blog posts!

Thank You

%%[youtube]