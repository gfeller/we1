function wakeUpCall() {
    console.log("ring ring ring")
}

setTimeout(() => wakeUpCall(), 1000)

function createTimer(fnOK, fnError, time) {
    const startTime = performance.now()

    setTimeout(() => {
            const timePassed = performance.now() - startTime;
            const inTime = (time - timePassed) < 100;
            if (inTime) {
                fnOK()
            }
            else {
                fnError("call to late")
            }

    }, time)
    /*
    while(performance.now() < startTime + time + 2000)
    {

    }*/
}
createTimer(wakeUpCall, console.error, 1000)
//createTimer(wakeUpCall, console.error, "16:30")

/*
function snooze(fn) {
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
    , 1000)*/