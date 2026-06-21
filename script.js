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
    let consoletext = consolee.innerText
    consolee.innerText = consoletext + "\n" + msg
    consolee.scrollTop = consolee.scrollHeight
}

function updateClock() {
    const now = new Date();

    document.getElementById("time").innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

document.getElementById("save").addEventListener("click", () => {
    const data = {
        money,
        clickpower,
        totalclicks,
        autopower,
        cprice,
        acprice
    };
    localStorage.setItem("gameSave", JSON.stringify(data));
    command("Game saved");
});

document.getElementById("load").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("gameSave"));
    if (data) {
        totalclicks = data.totalclicks
        clickpower = data.clickpower
        autopower = data.autopower
        cprice = data.cprice
        acprice = data.acprice
        money = data.money
        update();
        command("Game loaded")
    }
    else {
        command("No save found")
    }
});