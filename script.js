let a = 0;
let acc = 0;
let cash = 0;
let USD = 32.32;
const CurrentAccount = document.getElementById("Currentbox1");
const CurrentCash = document.getElementById("Currentbox2");
const log = document.getElementById("output-box");
const OPs = document.getElementById("BankOps");
const Bin = document.getElementById("BankInput");
const inM = document.getElementById("inputmoney");
const outM = document.getElementById("outputmoney");
const conM = document.getElementById("ConvertM");

function Change() {
  a++;
  const newText = `${a}, Current account Balance: ${CurrentAccount.value}, Current cash Balance: ${CurrentCash.value}\n`;
  log.value = newText + log.value;
  acc = CurrentAccount.value;
  cash = CurrentCash.value;
}
function Process() {
  a++;
  let amount = Number(Bin.value);
  acc = Number(CurrentAccount.value);
  cash = Number(CurrentCash.value);

  if (OPs.value === "Deposit") {
    if (cash < amount) {
      const newText = `${a}. Couldn't deposit entered balance. (Insufficient cash balance)\n`;
      log.value = newText + log.value;
    } else {
      acc += amount;
      cash -= amount;
      const newText = `${a}. Current account Balance: ${acc}, Current cash Balance: ${cash}\n`;
      log.value = newText + log.value;
    }
  } else if (OPs.value === "Withdraw") {
    if (acc < amount) {
      const newText = `${a}. Couldn't withdraw entered balance. (Insufficient account balance)\n`;
      log.value = newText + log.value;
    } else {
      acc -= amount;
      cash += amount;
      const newText = `${a}. Current account Balance: ${acc}, Current cash Balance: ${cash}\n`;
      log.value = newText + log.value;
    }
  }
  CurrentAccount.value = acc;
  CurrentCash.value = cash;
}

function Convert() {
  let inputValue = Number(inM.value);
  let currency = conM.value;
  let rate = Number(USD);

  if (currency === "USD") {
    outM.value = inputValue * rate;
  } else {
    outM.value = inputValue / rate;
  }
}
