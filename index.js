const showHideBtn = document.getElementById("showHideBtn");
const depositLogic = document.getElementById("depositLogic");
const ErrMsgForWithdrawal = document.getElementById("ErrMsgForWithdrawal");

showHideBtn.addEventListener("click", () => {
  depositLogic.classList.toggle("hideCls");
});

// -----withdrawalBtnDiv logic

const withdrawalBtnDiv = document.getElementById("WithdrawalshowHideBtn");
const withdrawalLogic = document.getElementById("withdrawalLogic");

withdrawalBtnDiv.addEventListener("click", () => {
  withdrawalLogic.classList.toggle("hideCls");
});

//--------------addMoney Section

const addMoneyInput = document.getElementById("addMoneyInput");

const DepositBtn = document.getElementById("DepositBtn");

const balance = document.getElementById("balance");
const congretulationMsgDiv = document.getElementById("congretulationMsgDiv");

const ErrMsgForDepositValue = document.getElementById("ErrMsgForDepositValue");

DepositBtn.addEventListener("click", () => {
  let depositInputVar = addMoneyInput.value;

  const regex = /^\d+$/;

  if (regex.test(depositInputVar)) {
    let oldBalance = balance.innerText.slice(1);
    balance.innerText = `$${parseInt(oldBalance) + parseInt(depositInputVar)}`;
    congretulationMsgDiv.classList.add("congCls");
    ErrMsgForDepositValue.classList.remove("congCls");
    ErrMsgForWithdrawal.classList.remove("congCls");
  } else {
    ErrMsgForDepositValue.classList.add("congCls");
    congretulationMsgDiv.classList.remove("congCls");
  }
});

//--------------Withdrawl money Section

const withdrawalInput = document.getElementById("withdrawalInput");

const withdrawalBtn = document.getElementById("withdrawalBtn");

const oldBalance = document.getElementById("balance");
const congretulationMsgForWithdrawal = document.getElementById(
  "congretulationMsgForWithdrawal"
);

const ErrMsgForWithdrawalCL = document.getElementById("ErrMsgForWithdrawalCL");

const forWrongInputTypeErr = document.getElementById("forWrongInputTypeErr");

withdrawalBtn.addEventListener("click", () => {
  let withdrawlInputVar = withdrawalInput.value;

  const regex = /^\d+$/;

  if (regex.test(withdrawlInputVar)) {
    let oldBalance = balance.innerText.slice(1);

    if (parseInt(withdrawlInputVar) > oldBalance) {
      ErrMsgForWithdrawal.classList.add("congCls");
      congretulationMsgForWithdrawal.classList.remove("congCls");
      forWrongInputTypeErr.classList.remove("congCls");
    } else {
      let afterWithdrawl = parseInt(oldBalance) - parseInt(withdrawlInputVar);

      balance.innerText = `$${afterWithdrawl}`;
      congretulationMsgForWithdrawal.classList.add("congCls");
      forWrongInputTypeErr.classList.remove("congCls");
      ErrMsgForWithdrawal.classList.remove("congCls");
    }
  } else {
    forWrongInputTypeErr.classList.add("congCls");
    congretulationMsgForWithdrawal.classList.remove("congCls");
  }
});
