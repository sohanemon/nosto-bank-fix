function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
  inputField.value = "";
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText.slice(1);
  const textElementValue = parseInt(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  !!newValue
    ? (textElement.innerText = "$" + newValue)
    : alert("Give valid input 🐐");
}
