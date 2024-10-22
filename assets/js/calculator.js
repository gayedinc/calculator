billInput.addEventListener("change", handleBill);
tipInput.addEventListener("change", handleSelect);
peopleInput.addEventListener("change", handlePeople);
calcBtn.addEventListener("click", handleCalc);
resetBtn.addEventListener("click", handleReset);

function handleBill() {
  if (billInput.value.trim() !== '') {
    billInput.innerHTML += billInput.value;
  } else {
    billInput.innerHTML = "Boş değer girilmez";
  }
}

function handleSelect() {
  if (tipInput.value.trim() !== '') {
    tipInput.innerHTML += tipInput.value;
  } else {
    tipInput.innerHTML = "Boş değer girilmez";
  }
}

function handlePeople() {
  if (peopleInput.value.trim() !== '') {
    peopleInput.innerHTML += peopleInput.value;
  } else {
    peopleInput.innerHTML = "Boş değer girilmez";

  }
}

let total = 0;
let amountTip = 0;
let tipPercent = 0;

function handleCalc() {
  if (Number(peopleInput.value) === 0) {
    warnTxt.innerHTML = "Can't be zero!";
  }

  if (billInput.value === "" || tipInput.value === "" || peopleInput.value === "") {
    alert('Boş değer girerek hesaplama yapılmaz');

  } else {
    tipPercent = Number((Number(billInput.value) * Number(tipInput.value)) / 100);
    amountTip = tipPercent / Number(peopleInput.value);
    total = Number((Number(billInput.value) + Number(tipPercent)) / Number(peopleInput.value));
    totalPriceTxt.innerHTML = total.toFixed(2);
    amountPriceTxt.innerHTML = amountTip.toFixed(2);
  }
}

function handleReset() {
  billInput.value = "";
  tipInput.value = "";
  peopleInput.value = "";
  totalPriceTxt.innerHTML = "$0.00";
  amountPriceTxt.innerHTML = "$0.00";
  warnTxt.innerHTML = "";
}