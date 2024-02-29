// const result = ['0','0','0'].map(parseInt)
// console.log(result);
// console.log(parseInt("asdhoollj",2));
// var START= 2 ** 53
// var END = START + 100
// for(var i= START ; i<END ; i++){
//     console.log("loop");
// }
// let result=["1","2","3"].map(X=>parseInt(X,4))
// console.log(result);
// console.log(parseInt("0x10", 16));

// let a=['10','10','10'].map(parseInt)
// console.log(a);
// var twoSum = function(nums,target){
//     const map = new Map()
//     for (var i=0; i<nums.length; i++){
//         const complement = target-nums[i]
//         if(map.has(complement)){
//             return [map.get(complement),i]
//         }
//         map.set(nums[i],i)
//     }
//     return []
// };
// const nums =[2,7,11,15]
// const target =9
// const result = twoSum(nums,target)
// console.log(result);

// function expandAroundCenter(s, left, right) {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return s.substring(left + 1, right);
// }

// function longestPalindrome(s) {
//   if (s === null || s.length < 1) return "";
//   let longest = "";

//   for (let i = 0; i < s.length; i++) {
//     let oddPalindrome = expandAroundCenter(s, i, i);
//     let evenPalindrome = expandAroundCenter(s, i, i + 1);

//     if (oddPalindrome.length > longest.length) {
//       longest = oddPalindrome;
//     }
//     if (evenPalindrome.length > longest.length) {
//       longest = evenPalindrome;
//     }
//   }

//   return longest;
// }

// let inputStr = "babad";
// console.log(longestPalindrome(inputStr)); // 输出 "bab" 或 "aba"
// function convert(s, numRows) {
//   if (numRows === 1) return s;

//   const rows = Array(numRows).fill('');
//   let index = 0;
//   let step = 1;

//   for (let i = 0; i < s.length; i++) {
//     rows[index] += s[i];

//     if (index === 0) {
//       step = 1;
//     } else if (index === numRows - 1) {
//       step = -1;
//     }

//     index += step;
//   }

//   return rows.join('');
// }

// let inputStr = "PAYPALISHIRING";
// let numRows = 3;
// console.log(convert(inputStr, numRows)); // 输出 "PAHNAPLSIIGYIR"
// function abcd(){
//   console.log(this);
// }
// let a=()=>{
// console.log(this);
// }

// function ccc(){
//   a=1
//   console.log(a);
// }
// ccc()
// doSomething(function (result) {
//   doSomethingElse(
//     result,
//     function (newResult) {
//       doThirdThing(
//         newResult,
//         function (finalResult) {
//           console.log(" : " + finalResult);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);
// var a = 20
// var obj = {
//     a:20
// }
// function fu(){
//     console.log(this.a);
    
// }
// fu()
// const obj = {
//   name: 'Alice',
//   sayHello: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   sayGoodbye: () => {
//     console.log(`Goodbye, my name is ${this.name}`);
//   }
// };

// obj.sayHello(); // 输出：Hello, my name is Alice

// // 这里的 this 指向全局对象（在浏览器环境中是 window），因此输出的结果为 undefined。
// obj.sayGoodbye();

// var name ="张三"
// function person(){
//   return this.name
// }
// console.log(person());
// var name = 'Jenny';
// function person() {
//  return this.name;
// }
// console.log(person()); 
const arr = [1,2,3]
const newArr = arr.map(function(item){
    return item*2
})
console.log(newArr);
arr.forEach(function(item){
    console.log(item);
})