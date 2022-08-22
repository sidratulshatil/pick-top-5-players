function getElementById(input) {
    const inputField = document.getElementById(input)
    const inputFieldString = inputField.value
    const inputFieldValue = parseInt(inputFieldString)
    return inputFieldValue
}
function getElementByTextId(input) {
    const inputField = document.getElementById(input)
    const inputFieldString = inputField.innerText
    const inputFieldValue = parseInt(inputFieldString)
    return inputFieldValue
}