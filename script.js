let totalclicks = 0
let clickpower = 1
let autopower = 0
let cprice = 10
let acprice = 50

const totalpara = document.getElementById("totalclicks")
const cp = document.getElementById("clickpower")
const auto = document.getElementById("auto")
const moneypara = document.getElementById("moneypara")
const consolee = document.getElementById("console")

function autoclicker() {
    acprice = parseInt(acprice * 1.5)
    if (acprice <= 5000) {
        autopower += 1
    }
    else if (acprice < 50000) {
        autopower += 2
    }
    else {
        autopower += 5
        acprice = parseInt(acprice * 2)
    }
}

function powerup() {
    if (cprice <= 5000) {
        clickpower += 1
        cprice = parseInt(cprice * 1.5)
    }
    else if (cprice < 50000) {
        clickpower += 2
        cprice = parseInt(cprice * 1.7)
    }
    else {
        clickpower += 5
        cprice = parseInt(cprice * 2)
    }
}

function update(){
    
    moneypara.innerText = `$${money}`
}

// let money = 0;
// let clickPower = 1;
// let totalClicks = 0;
// let autoclickers = 0;

// const moneyEl = document.getElementById("money");
// const clickPowerEl = document.getElementById("clickPower");
// const totalClicksEl = document.getElementById("totalClicks");
// const autoclickersEl = document.getElementById("autoclickers");
// const totalMoneyEl = document.getElementById("totalMoney");
// const consoleEl = document.getElementById("console");

// function updateUI() {
//     moneyEl.innerText = money;
//     clickPowerEl.innerText = clickPower;
//     totalClicksEl.innerText = totalClicks;
//     autoclickersEl.innerText = autoclickers;
//     totalMoneyEl.innerText = money;
// }

// function log(message) {
//     consoleEl.value += "\n" + message;
//     consoleEl.scrollTop = consoleEl.scrollHeight;
// }

// document.getElementById("moneyButton").addEventListener("click", () => {
//     money += clickPower;
//     totalClicks++;

//     if (totalClicks >= 10) {
//         document.getElementById("achievement1").classList.add("unlocked");
//     }

//     updateUI();
// });

// document.getElementById("buyAutoclicker").addEventListener("click", () => {
//     if (money >= 10) {
//         money -= 10;
//         autoclickers++;
//         log("Bought an autoclicker");
//         updateUI();
//     } else {
//         alert("Not enough money");
//     }
// });

// document.getElementById("upgradePower").addEventListener("click", () => {
//     if (money >= 50) {
//         money -= 50;
//         clickPower++;
//         log("Click power upgraded");
//         updateUI();
//     } else {
//         alert("Not enough money");
//     }
// });

// setInterval(() => {
//     money += autoclickers;
//     updateUI();
// }, 1000);

// document.getElementById("saveBtn").addEventListener("click", () => {

//     const gameData = {
//         money,
//         clickPower,
//         totalClicks,
//         autoclickers
//     };

//     localStorage.setItem("idleGameSave", JSON.stringify(gameData));

//     log("Game saved");
// });

// document.getElementById("loadBtn").addEventListener("click", () => {

//     const saveData = JSON.parse(localStorage.getItem("idleGameSave"));

//     if (saveData) {
//         money = saveData.money;
//         clickPower = saveData.clickPower;
//         totalClicks = saveData.totalClicks;
//         autoclickers = saveData.autoclickers;

//         updateUI();

//         log("Game loaded");
//     } else {
//         alert("No save found");
//     }
// });

// document.getElementById("saveName").addEventListener("click", () => {

//     const newName = document.getElementById("nameInput").value.trim();

//     if (newName !== "") {
//         document.getElementById("playerName").innerText =
//             "Player: " + newName;
//     }
// });

// function setTheme(mode) {

//     if (mode === "light") {
//         document.body.style.background = "#f5f5f5";
//         document.body.style.color = "#111";
//     } else {
//         document.body.style.background = "#121212";
//         document.body.style.color = "white";
//     }
// }

// function updateClock() {
//     const now = new Date();

//     document.getElementById("clock").innerText =
//         now.toLocaleTimeString();
// }

// setInterval(updateClock, 1000);

// updateClock();
// updateUI();
