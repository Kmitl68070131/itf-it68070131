let accountBalance = 0;
let cashBalance = 0;

function gumnod() {
    const accBalance = Number(document.getElementById('account_Balance').value) || 0;
    const cashBal = Number(document.getElementById('cash_Valance').value) || 0;

    accountBalance = accBalance;
    cashBalance = cashBal;


    const displayBalance = document.getElementById('displayBalance');
    if (displayBalance) {
        displayBalance.textContent = accountBalance.toFixed(2);
    }

    alert(`อัพเดทยอดเงินเรียบร้อย!\nยอดเงินในบัญชี: ${accountBalance.toFixed(2)} บาท\nยอดเงินสด: ${cashBalance.toFixed(2)} บาท`);
}

function Transcation(type, amount) {
    amount = parseFloat(amount);
    if (!amount || amount <= 0) {
        alert('กรุณากรอกจำนวนเงินที่ถูกต้อง');
        return;
    }

    const accountInput = document.getElementById('account_Balance');
    const cashInput = document.getElementById('cash_Valance');

    let accountBalance = parseFloat(accountInput.value) || 0;
    let cashBalance = parseFloat(cashInput.value) || 0;

    if (type === 'ฝากเงิน') {
        if (cashBalance < amount) {
            alert('ยอดเงินสดไม่เพียงพอสำหรับการฝาก');
            return;
        }
        accountBalance += amount;
        cashBalance -= amount;
    } else if (type === 'ถอนเงิน') {
        if (accountBalance < amount) {
            alert('ยอดเงินในบัญชีไม่เพียงพอสำหรับการถอน');
            return;
        }
        accountBalance -= amount;
        cashBalance += amount;
    }
    accountInput.value = accountBalance.toFixed(2);
    cashInput.value = cashBalance.toFixed(2);
    const historyList = document.getElementById('history-list');
    const newItem = document.createElement('li');
    const now = new Date();
    newItem.textContent = `${type} จำนวน ${amount} บาท - ${now.toLocaleString('th-TH')}`;
    newItem.style.color = type === 'ฝากเงิน' ? 'green' : 'red';
    historyList.prepend(newItem);
    document.getElementById('balanceInput').value = '';
    const displayBalance = document.getElementById('displayBalance');
    if (displayBalance) {
        displayBalance.textContent = accountBalance.toFixed(2);
    }

    alert(`${type} ${amount} บาท สำเร็จ!`);
}
