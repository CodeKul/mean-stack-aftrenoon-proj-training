let num = 10
if (true) {
    let num = 20
}
console.log(num)

function values() {

}
let vl = () => 10
vl = (num1, num2) => num1 + num2

class Car {
    constructor() {
        this.sp = 10
    }
    speedUp() {
        console.log(` 
            Speeding Up
            ${this.sp * 89}
            is a good speed.
        `)
    }
}

let cr = new Car()
cr.sp = 50

let arr = []
arr.push('Android')
arr.push('Apple')
arr.push('Rim')

for (let i = 0; i < arr.length; i++){
    console.log(`Value at ${i} is ${arr[i]}`)
}

arr.forEach(el => console.log(el))
