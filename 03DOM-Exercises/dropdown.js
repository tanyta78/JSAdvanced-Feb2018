function addItem() {
    let textInput = document.getElementById('newItemText').value;
    let textValue=document.getElementById('newItemValue').value;
   let newElement= document.createElement('option');
   newElement.textContent=textInput;
   newElement.value=textValue;
   document.getElementById('menu').appendChild(newElement);
   document.getElementById('newItemText').value='';
   document.getElementById('newItemValue').value='';
}
