let counterEL = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterEL.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterEL.innerText = updatedCounterValue;
}

function onReset() {
  let counterValue = 0;
  counterEL.innerText = counterValue;
}

function onDecrement() {
  let previousCounterValue = counterEL.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;

  counterEL.innerText = updatedCounterValue;
}
