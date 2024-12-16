// Race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

// Variables to store registration status and runner's age
let isRegisterEarly = true; // Change this to test different cases
let runnerAge = 10; // Change this to test different cases

// Add 1000 to raceNumber if the runner is an adult and registered early
if (runnerAge > 18 && isRegisterEarly) {
  raceNumber += 1000;
}

// Determine race time based on age and registration
if (runnerAge > 18 && isRegisterEarly) {
  console.log(
    `Your race starts at 9:30 am. Your race number is ${raceNumber}.`
  );
} else if (runnerAge > 18 && !isRegisterEarly) {
  console.log(
    `Your race starts at 11:00 am. Your race number is ${raceNumber}.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Your race starts at 12:30 pm. Your race number is ${raceNumber}.`
  );
} else {
  // Runner is exactly 18 years old
  console.log("Please see the registration desk for assistance.");
}
