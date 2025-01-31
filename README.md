# Unexpected behavior of strict equality (===) with NaN and +0/-0

This repository demonstrates an uncommon JavaScript bug related to the strict equality operator (===) and its interaction with NaN (Not a Number), +0, and -0 values.

## Bug Description
In JavaScript, NaN is the only value that is not equal to itself when using strict equality (===). This means that `NaN === NaN` evaluates to `false`. Similarly, while +0 and -0 are numerically equivalent, they are distinct values, resulting in `+0 === -0` being `true`.

This leads to unexpected behavior in functions that compare these special values. For example:

```javascript
function foo(a, b) {
  if (a === b) {
    return true; 
  }
  return false;
}

console.log(foo(NaN, NaN)); //false
console.log(foo(0, -0));//true
```

## Bug Solution
To handle NaN values correctly when comparing for equality, use the `Number.isNaN()` function.  For comparing +0 and -0, consider using Object.is method.

```javascript
function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; 
  } else if (Object.is(a, b)){
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); //true
console.log(foo(0, -0));//false
```

This revised function correctly handles NaN and +0/-0 comparisons, avoiding the unexpected behavior demonstrated in the original code.