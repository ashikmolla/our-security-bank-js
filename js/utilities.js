 function getInputFieldValueById(inputFieldId){

    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString =inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
 }
 function getTextElementValueById(elementFieldId){

    const elementField = document.getElementById(elementFieldId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue = paresFloat(elementFieldValueString);
    return elementFieldValue;
     
 }
 function setTextElementValueById(elementId, newValue){

    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
 }
