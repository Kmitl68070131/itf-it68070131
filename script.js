let accountBalance = 0;
let cashBalance = 0;
let currentBalance = 0;

function gumnod() {
    const accBalance = Number(document.getElementById('account_Balance').value) || 0;
    const cashBal = Number(document.getElementById('cash_Valance').value) || 0;
    
    accountBalance = accBalance;
    cashBalance = cashBal;
    currentBalance = accBalance;
    
    alert(`อัพเดทยอดเงินเรียบร้อย!\nยอดเงินในบัญชี: ${currentBalance.toFixed(2)} บาท\nยอดเงินสด: ${cashBalance.toFixed(2)} บาท`);
}

function Transcation(type, amount) {
    amount = Number(amount);
    if (!amount || amount <= 0) {
        alert("กรุณากรอกจำนวนเงินให้ถูกต้อง");
        return;
    }

    const time = new Date().toLocaleString("th-TH");
    const historyList = document.getElementById("history-list");
    const li = document.createElement("li");

    if (type === "ฝากเงิน") {
        currentBalance += amount;
        li.style.color = "green";
        li.textContent = `${type} จำนวน ${amount} บาท - เวลา ${time} (ยอดคงเหลือ: ${currentBalance.toFixed(2)} บาท)`;
    } else if (type === "ถอนเงิน") {
        if (amount > currentBalance) {
            alert(`ยอดเงินไม่เพียงพอสำหรับถอน\nยอดเงินคงเหลือ: ${currentBalance.toFixed(2)} บาท\nต้องการถอน: ${amount.toFixed(2)} บาท`);
            return;
        }
        currentBalance -= amount;
        li.style.color = "red";
        li.textContent = `${type} จำนวน ${amount} บาท - เวลา ${time} (ยอดคงเหลือ: ${currentBalance.toFixed(2)} บาท)`;
    }

    historyList.prepend(li);

    document.getElementById("balanceInput").value = "";
    document.getElementById("account_Balance").value = currentBalance.toFixed(2);
}

function convertCurrency() {
    const inputAmount = Number(document.getElementById('currencyInput').value);
    const selectedCurrency = document.getElementById("county").value;
    const output = document.getElementById("balanceOutput");

    if (!inputAmount || inputAmount <= 0) {
        alert("กรุณากรอกจำนวนเงินที่ถูกต้อง");
        return;
    }

    let result = 0;

    if (selectedCurrency === "USD") {
        result = inputAmount * 36.5;
    } else if (selectedCurrency === "THB") {
        result = inputAmount / 36.5;
    }

    output.textContent = result.toFixed(2);
}