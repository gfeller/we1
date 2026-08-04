fetch("https://stone.sifs0005.infs.ch/statistics", { method: "get" })
    .then(x => x.text())
    .then(x => console.log(x))

/*

fetch("https://stone.sifs0005.infs.ch/play?playerName=DemoUser&playerHand=Banana", { method: "get" })
    .then(x => {
        debugger;
        return x.json()
    })
    .then(x => {
        return console.log(x)
    })
*/        