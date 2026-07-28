type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Завантаження...");
  } else if (status === "success") {
    console.log("Успіх!");
  } else if (status === "error") {
    console.log("Щось пішло не так");
  }
}

logStatus("loading");
