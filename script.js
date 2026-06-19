let totalclicks = 0
let clickpower = 1
let autopower = 0
let cprice = 10
let acprice = 50
let money = 0

const totalpara = document.getElementById("totalclicks")
const cp = document.getElementById("clickpower")
const auto = document.getElementById("auto")
const moneypara = document.getElementById("moneypara")
const consolee = document.getElementById("console")
const autobtn = document.getElementById("autoclicker")
const clickupgrade = document.getElementById("clickupgrade")

function autoclicker() {
    if (acprice <= money) {
        money -= acprice
        if (acprice <= 5000) {
            autopower += 1
            acprice = parseInt(acprice * 1.8)
        }
        else if (acprice < 100000) {
            autopower += 2
            acprice = parseInt(acprice * 1.4)
        }
        else {
            autopower += 5
            acprice = parseInt(acprice * 1.6)
        }
        update()
        command("Bought autoclicker")
    }
}

function powerup() {
    if (cprice <= money) {
        money -= cprice
        if (cprice <= 5000) {
            clickpower += 1
            cprice = parseInt(cprice * 1.8)
        }
        else if (cprice < 100000) {
            clickpower += 2
            cprice = parseInt(cprice * 1.4)
        }
        else {
            clickpower += 5
            cprice = parseInt(cprice * 1.6)
        }
        command("Upgraded Clicking Power")
        update()
    }
}

setInterval(() => {
    money += autopower
    update()
}, 1000)

function update() {
    cp.innerText = `Click Power: ${clickpower}`
    clickupgrade.innerText = `Upgrade Click Power ($${cprice})`
    autobtn.innerText = `Buy Autoclicker ($${acprice})`
    auto.innerText = `Auto Clicker Power: ${autopower}`
    moneypara.innerText = `$${money}`
    totalpara.innerText = `Total Clicks: ${totalclicks}`
    document.getElementById("money").innerText = `Make Money(+$${clickpower})`
}

document.getElementById("money").addEventListener("click", () => {
    money += clickpower
    totalclicks++
    update()
})

function command(msg) {
    consolee.innerText = consolee.innerText + "\n" + msg
    consolee.scrollTop = consolee.scrollHeight
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
