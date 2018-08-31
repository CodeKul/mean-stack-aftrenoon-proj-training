// Immediately Invokable Functoin Expresions
let pc = (function (ob) {
    return {
        dt: 10 * ob.age,
        val: 'android',
        ver: () => 9
    }
})({ age: 20 })

let cab = ((pcObj) => { 

})(pc)

class Mouse { }

class Computer {
    constructor(mouse) { }
}

let ms = new Mouse()
let cmp = new Computer(ms)







