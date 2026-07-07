function formSubmit() {
    event.preventDefault()
    let data = getData()
    setData(data)()

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
button.innerHTML = `<button id="delete-button"><i class="fa-solid fa-trash"></i></button>`
}
