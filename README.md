
# 🏃‍♂️ Race Day Registration Program

Welcome to the **Race Day Registration Program**! This project is a JavaScript-based solution for managing runner registrations and assigning race numbers and start times for Codecademy's annual race.

---

## 📋 Overview
This program assigns race numbers and start times to participants based on their age and registration status. It also handles edge cases, such as runners exactly 18 years old, directing them to the registration desk.

---

## ✨ Features
- 🎲 **Random Race Numbers:** Each runner is assigned a random race number.
- 🏷️ **Race Number Adjustment:** Early adult registrants receive race numbers 1000 or above.
- 🕒 **Dynamic Start Times:**
  - 🕤 Early adults race at **9:30 am**.
  - 🕚 Late adults race at **11:00 am**.
  - 🕧 All youth runners race at **12:30 pm**.
- 🚦 **Edge Case Handling:** Runners exactly 18 years old are directed to the registration desk.

---

## 🛠️ How It Works
### 🔢 Inputs
- `runnerAge`: The age of the runner.
- `isRegisterEarly`: A boolean indicating whether the runner registered early.

### 🖥️ Outputs
The program logs:
1. 🕑 The runner's start time.
2. 🏅 Their race number.
3. ℹ️ A message for 18-year-old runners to see the registration desk.

### 🔍 Logic
1. 🎲 **Random Race Numbers**: Each runner is assigned a race number using `Math.random()`.
2. ➕ **Adjust Race Numbers**: Runners over 18 who registered early receive an additional 1000 to their race number.
3. ⏰ **Determine Start Times**:
   - 🕤 Early adults race at **9:30 am**.
   - 🕚 Late adults race at **11:00 am**.
   - 🕧 Youth runners (under 18) race at **12:30 pm**.
   - ℹ️ Runners exactly 18 are directed to the registration desk.

---

## 🚀 Usage
### 📦 Prerequisites
- 🖥️ Node.js installed on your system to run the script.

### 🏃 Run the Program
1. 📥 Clone the repository:
   ```bash
   git clone https://github.com/your-username/race-day-registration.git
   ```
2. 📂 Navigate to the project directory:
   ```bash
   cd race-day-registration
   ```
3. ✏️ Open the `index.js` file and set the values for `runnerAge` and `isRegisterEarly`.
4. ▶️ Run the program using Node.js:
   ```bash
   node index.js
   ```

### 📝 Example Outputs
#### Input:
```javascript
let isRegisterEarly = true;
let runnerAge = 25;
```
#### Output:
```
Your race starts at 9:30 am. Your race number is 1045.
```

#### Input:
```javascript
let isRegisterEarly = false;
let runnerAge = 17;
```
#### Output:
```
Your race starts at 12:30 pm. Your race number is 678.
```

#### Input:
```javascript
let isRegisterEarly = true;
let runnerAge = 18;
```
#### Output:
```
Please see the registration desk for assistance.
```

---

## 🧩 Code Example
Here’s the core program logic:
```javascript
let raceNumber = Math.floor(Math.random() * 1000);
let isRegisterEarly = true;
let runnerAge = 25;

if (runnerAge > 18 && isRegisterEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isRegisterEarly) {
  console.log(`Your race starts at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !isRegisterEarly) {
  console.log(`Your race starts at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Your race starts at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk for assistance.");
}
```

---

## ⚙️ Customization
You can modify the values of `runnerAge` and `isRegisterEarly` to test different scenarios.

---

## 📜 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

🎉 Happy coding! If you have any questions or suggestions, feel free to open an issue or create a pull request.

