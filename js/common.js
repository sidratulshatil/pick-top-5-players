function getElementById(input) {
    const inputField = document.getElementById(input)
    const inputFieldString = inputField.value
    const inputFieldValue = parseFloat(inputFieldString)
    return inputFieldValue
}
function getElementByTextId(input) {
    const inputField = document.getElementById(input)
    const inputFieldString = inputField.innerText
    const inputFieldValue = parseFloat(inputFieldString)
    return inputFieldValue
}
function setTextOnTextField(input, value) {
    const inputField = document.getElementById(input)
    inputField.innerText = value
}