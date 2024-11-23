
sessionStorage.setItem("name","Mahendra Singh Dhoni")

const obj={"name":"Chombu"}

sessionStorage.setItem("data",JSON.stringify(obj));


// sessionStorage.clear()
sessionStorage.removeItem("name")


const val=JSON.parse(sessionStorage.getItem("data"))
console.log(val)