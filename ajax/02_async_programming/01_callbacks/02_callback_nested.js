function wakeUpCall() {
    console.log("ring ring ring")
}



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
, 1000)


timer(
  () => snooze((err) => {
    if (err) {
      console.error(err);
      return;
    }
    snooze((err) => {
      if (err) {
        console.error(err);
        return;
      }
      snooze((err) => {
        if (err) {
          console.error(err);
          return;
        }
        wakeUpCall();
      });
    });
  })
, 1000)