let now = new Date();

let someDateParse = new Date(Date.parse("May 23, 2019"));

let someDate = new Date("May 23, 2019");

let y2k = new Date(2000, 0);

let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

// get start time
let start = Date.now();

// call a function
doSomething();

// get stop time
let stop = Date.now();
result = stop - start;

let re = null;
for (let i = 0; i < 10; i++) {
  re = /cat/g;
  console.log(re.test("catastrophe"));
}
for (let i = 0; i < 10; i++) {
  re = new RegExp("cat", "g");
  console.log(re.test("catastrophe"));
}

let text = "cat, bat, sat, fat";
let pattern = /.at/;

let matches = pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

matches = pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);
