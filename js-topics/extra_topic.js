// 1. memoize function javascript
// 2. Flatten the array const nestedArray = [1, 2, [3, 4, [5, 6]]]; without flat function
      https://thesumitshrestha.medium.com/how-to-flatten-an-array-in-javascript-with-and-without-an-inbuilt-function-3169c64c6b19

      function flattenArray(arr){
      let flatArr = [];
      
      arr.forEach(item => {
        if(Array.isArray(item)){
          flatArr = flatArr.concat(flattenArray(item));
        }
        else{
          flatArr.push(item);
        }
     });
  
     return flatArr;
  }
  
  
  let nestedArray = [1, [2, 3], [4, [5, 6]]];
  let flatArray = flattenArray(nestedArray);
  console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
