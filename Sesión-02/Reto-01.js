const time = 25;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
} else (time >= 25); {
    greeting = "invalid time";
}
  

console.log(greeting) 