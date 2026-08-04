function wakeUpCall() {
    console.log("ring ring ring")
}

function snooze() {
    return createTimer(500).then(() => console.log('snoozed'));
}

function fakeWait(till) {
    while (performance.now() < till) {

    }
}

function createTimer(time) {
    const startTime = performance.now()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const timePassed = performance.now() - startTime;
            const inTime = Math.abs(time - timePassed) < 100;
            if (inTime) {
                resolve()
            }
            else {
                reject("call to late")
            }
        }, time)

        //fakeWait(startTime + time + 2000);
    });


}
//createTimer(1000).then(wakeUpCall).catch(console.error);
//createTimer(1000).catch(console.error).then(wakeUpCall);


createTimer(1000)
    .then(snooze)
    .then(snooze)
    .then(snooze)
    .then(snooze)
    .catch(console.error)
    .then(wakeUpCall)
    .finally(() => console.log("finished"))

