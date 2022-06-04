// !perfect numbers

let start = 6;
let finish = 100;
function checkPerfect(finish) {
  let bolenler = [];

  for (let i = 1; i < finish; i++) {
    if (finish % i === 0) {
      bolenler.push(i);
    }
  }

  if (finish && finish === bolenler.reduce((t, i) => t + i, 0)) {
    return true;
  } else {
    return false;
  }
}

let perfect = [];

for (let i = start; i < finish; i++) {
  if (checkPerfect(i)) {
    perfect.push(i);
  }
}

console.log(perfect);
