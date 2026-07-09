let counterEL = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterEL.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterEL.textContent = updatedCounterValue;
}

function onReset() {
  let counterValue = 0;
  counterEL.textContent = counterValue;
}

function onDecrement() {
  let previousCounterValue = counterEL.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;

  counterEL.textContent = updatedCounterValue;
}
