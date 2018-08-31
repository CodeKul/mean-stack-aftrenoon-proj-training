// assigning functions to variables
/*function named() {
    console.log(`android`)
}

let fn1 = () => console.log(`Its lambda`)
fn1()

fn1 = named()
fn1 = named
fn1()

// function can be passed as parameter

function remote(fnBd) {
    fnBd()
}

remote(function () {
    console.log(`Passing function to parameter`)
})

remote(() => console.log(`Good`))*/

// functions can return other functions

function speaker() {
    console.log(`This is speaker`)
    return function () {
        console.log(`This is internal speaker`)
    }
}
speaker()()

setTimeout(() => console.log(`Timing out`), 1500)
// let sp = speaker()
// console.log(''+sp())


