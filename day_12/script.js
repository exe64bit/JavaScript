
// async function dataLao() {
//     var a = await fetch("https://jsonplaceholder.typicode.com/users")
//     let b = await a.json()
//     console.log(b);   
// }

// // dataLao()

// let p1 = new Promise((resolv, reject)=>{
//     console.log("promise pendding");
//     let result = true

//     if (result) {
//         console.log("full filled");
//     }
//     else{
//         console.log("Rejected");
//     }
//     setTimeout(() => {
        
//     }, 3000);
// })

const arr = []

for(let i = 0; i<10000; i++){
    i = i.toString()
    if (i.length<2) {
        arr.push("000"+i)
    }
    else if (i.length<3) {
        arr.push("00"+i)
    }
    else if (i.length<4) {
        arr.push("0"+i)
    }
    else{
        arr.push(i)
    }
}

const fs = require('fs').promises;

async function appendToFile() {
  try {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        await fs.appendFile("passwords.txt", `${element}\n`, "utf8")
    }
    console.log('Log entry added');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}
appendToFile();