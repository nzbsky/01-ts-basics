function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Привіт від TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));
