
const minAge = 18;
const maxAge = 60;
const age = 18; 
 
if (!Number.isFinite(age)) {
  console.log('Incorrect data type')
}
 
if (age < minAge) {
    console.log("You don't have access cause your age is " + (age) + ". It's less than ")
}
else if (maxAge >age && age >= minAge) {
    console.log("Welcome")
}
else if (age >= maxAge) {
    console.log("Keep calm and look culture Channel")
}else {
    console.log("Technical work")}