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