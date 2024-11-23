
let data=JSON.parse(localStorage.getItem("data"))
console.log(data)


let name=localStorage.getItem("name")
console.log(name);

localStorage.removeItem("data")
localStorage.clear()
