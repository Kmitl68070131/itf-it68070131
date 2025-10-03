let accountBalance = 0;
let cashBalance = 0;

// อัปเดตยอดแสดงบนหน้า
function updateDisplay() {
    document.getElementById("accountBalance").textContent = accountBalance;
    document.getElementById("cashBalance").textContent = cashBalance;
}

// เพิ่มข้อความลงใน Textarea ประวัติ
function addHistory(message) {
    const history = document.getElementById("historyArea");
    const time = new Date().toLocaleTimeString();
    history.value = `[${time}] ${message}\n` + history.value;
}

// ฟังก์ชันกำหนดยอดเริ่มต้น
function setBalances() {
    const accInput = parseFloat(document.getElementById("accountBalanceInput").value) || 0;
    const cashInput = parseFloat(document.getElementById("cashBalanceInput").value) || 0;

    accountBalance = accInput;
    cashBalance = cashInput;

    updateDisplay();
    addHistory(`กำหนดยอดบัญชี ${accInput} บาท และ เงินสด ${cashInput} บาท`);
}

// ฟังก์ชันฝากเงิน
function deposit() {
    const amount = parseFloat(document.getElementById("amount").value) || 0;

    if (amount <= 0) {
        alert("กรุณาใส่จำนวนเงินที่มากกว่า 0");
        return;
    }

    if (cashBalance < amount) {
        alert("เงินสดไม่พอสำหรับการฝาก");
        return;
    }

    cashBalance -= amount;
    accountBalance += amount;
    updateDisplay();
    addHistory(`ฝากเงิน ${amount} บาท`);
}

// ฟังก์ชันถอนเงิน
function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value) || 0;

    if (amount <= 0) {
        alert("กรุณาใส่จำนวนเงินที่มากกว่า 0");
        return;
    }

    if (accountBalance < amount) {
        alert("ยอดเงินในบัญชีไม่พอสำหรับการถอน");
        return;
    }

    accountBalance -= amount;
    cashBalance += amount;
    updateDisplay();
    addHistory(`ถอนเงิน ${amount} บาท`);
}

// เริ่มต้น
updateDisplay();
