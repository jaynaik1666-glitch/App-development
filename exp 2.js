const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log("Hello, " + name);
  rl.close();
});
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
let i = 1;
while (i <= 5) {
  console.log("Count: " + i);
  i++;
}
let i = 1;
do {
  console.log("Count: " + i);
  i++;
} while (i <= 5);
let count = prompt("How many names do you want to enter?");
count = parseInt(count);

for (let i = 0; i < count; i++) {
  let name = prompt(`Enter name ${i + 1}:`);
  console.log("Hello, " + name);
}
