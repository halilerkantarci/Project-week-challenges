//  palindromic numbers
let z = "12321";

let x = z.split("").reverse().join("");
console.log(x);
// if (palindrom == x) {
//   console.log("palindrom");
// } else {
//   console.log("palindrom değil");
// }

let start = 10;
let finish = 30;

let palindrom = [];

for (let i = start + 1; i <= finish; i++) {
  let x = i.toString().split("").reverse().join("");
  if (i.toString() == x) {
    palindrom.push(i.toString());
  }
}
palindrom;
