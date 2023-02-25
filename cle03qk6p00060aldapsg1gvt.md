# 6 New Array Functions in ES6

ES6, also known as ECMAScript 2015, brought several new features to JavaScript, including new array functions. In this blog, we'll take a look at six of these new functions and how they can make your life easier when working with arrays in JavaScript.

### **USING MAP()**

***Definition and Usage***

The `map()` the method creates a new array with the results of calling a function for every array element.

The `map()` method calls the provided function once for each element in an array, in order.

**Note:** `map()` does not execute the function for array elements without values.

**Note:** this method does not change the original array.

![JavaScript map vs for loop](https://cdn.hashnode.com/res/hashnode/image/upload/v1676126676860/9a418672-6a3b-4a19-8501-612db099dd05.webp align="center")

### **USING FOREACH()**

***Definition and Usage***

The `forEach()` method calls a function once for each element in an array, in order.

**Note:** the function is not executed for array elements without values.

![JavaScript forEach vs for loop](https://miro.medium.com/max/468/1*oYeIEpkxakkL3mvfq0YApw.png align="center")

### **USING FILTER()**

***Definition and Usage***

The `filter()`the method creates an array filled with all array elements that pass a test (provided as a function).

**Note:** `filter()` does not execute the function for array elements without values.

**Note:** `filter()` does not change the original array.

![JavaScript filter vs for loop](https://miro.medium.com/max/759/1*MTqDbNxzIBbJxnOYppHYgA.png align="center")

### **USING REDUCE()**

***Definition and Usage***

The `reduce()` the method reduces the array to a single value.

The `reduce()` the method executes a provided function for each value of the array (from left to right).

The return value of the function is stored in an accumulator (result/total).

**Note:** `reduce()` does not execute the function for array elements without values.

**Note:** this method does not change the original array.

![JavaScript reduce vs for loop](https://miro.medium.com/max/659/1*hKjkdywcXw23cfKv0BthAg.png align="center")

### **USING SORT()**

***Definition and Usage***

The `sort()` method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the `sort()` method sorts the values as strings in alphabetical and ascending order.

**Note:** This method changes the original array.

![JavaScript sort vs for loop](https://miro.medium.com/max/835/1*EUAc8_oldcU-SuXCXIWhEQ.png align="center")

### USING FINDINDEX()

***Definition and Usage***

The `findIndex()` the method returns the index of the first element in an array that passes a test (provided as a function).

The `findIndex()` the method executes the function once for each element present in the array:

* If it finds an array element where the function returns a *true* value, `findIndex()` returns the index of that array element (and does not check the remaining values)
    
* Otherwise, it returns -1
    

**Note:** `findIndex()` does not execute the function for array elements without values.

**Note:** `findIndex()` does not change the original array.

![JavaScript findIndex vs for loop](https://miro.medium.com/max/664/1*xRsIIvQEq34zXa6dM9zI8Q.png align="center")

In conclusion, these six new array functions in ES6 provide a powerful and convenient set of tools for working with arrays in JavaScript. They allow you to perform common array operations with greater ease and make your code more concise and readable. Whether you're just starting out with JavaScript or are an experienced developer, it's worth taking some time to learn these functions and incorporate them into your workflow.

Thank you for reading!

%%[youtube]