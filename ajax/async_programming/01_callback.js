/*function sayHi(){
    console.log("hi");
}

setTimeout(sayHi, 1000);



function getAccount(cb){

}

function getBalance(account, cb){

}

function createTrensatction(amount, from, to, cb){
    
}

const from = "100001"
const to = "100002"

createTransaction()*/

function wakeUpCall(){
    console.log("ring ring ring")
}

//setTimeout(() => wakeUpCall(), 1000)


function wakeUpCall(){
    console.log("ring ring ring")
}

function snooze(fn){
    setTimeout(() => fn(), 1000)
}

setTimeout(
    () => snooze(
        () => snooze(
             () => snooze(
                () => wakeUpCall()
            )
        )
    )
, 1000)