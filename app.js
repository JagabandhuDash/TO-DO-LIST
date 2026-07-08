function formSubmit() {
    event.preventDefault()
    let data = getData()
    setData(data)
    resetData()

}

function getData(){
let data = document.getElementById("text-box")
let obj = {}
obj["text"] = data.value 
return obj;
}

function setData(data){
let table = document.getElementsByTagName("tbody")[0]
let row = table.insertRow(table.length)



text = row.insertCell(0)
text.innerHTML = data.text 

button = row.insertCell(1)
button.innerHTML = `<button id="delete-button" onclick="deleteData(this)"><i class="fa-solid fa-trash"></i></button>`
text.style.width="500px"
table.style.borderRadius="10px"
}

function deleteData(data){
 row = data.parentElement.parentElement
 document.getElementById("to-do-list").deleteRow(row.rowIndex)
}

function resetData() {
document.getElementById("text-box").value=""

}
