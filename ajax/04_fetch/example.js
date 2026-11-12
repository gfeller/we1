// erstes Beispiel
{
    const request = fetch("https://stone.sifs0005.infs.ch/statistics", {method: "get"});
    console.log(request);
    const response = await request;
    console.log(response);
    const textAnswer = await response.text(); // aLternative response.json()
    const json = JSON.parse(textAnswer);
    console.log(json);
}


// zweites Beispiel
{
    const request = fetch("https://stone.sifs0005.infs.ch/play?playerName=DemoUser&playerHand=wrong_hand", {method: "get"});
    const response = await request;
    const json = await response.json();
    console.log(json);
}
/*
fetch("https://stone.sifs0005.infs.ch/statistics", { method: "get" })
    .then(x => x.text())
    .then(x => console.log(x))

*/

