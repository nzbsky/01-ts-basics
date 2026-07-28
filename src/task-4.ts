function printUserInfo(name: string, age: number, email?: string): void {
  console.log("Ім'я:", name);
  console.log("Вік:", age);
  if (email) {
    console.log("Електронна пошта:", email);
  }
}

printUserInfo("Аліса", 30);
printUserInfo("Боб", 25, "bob@mail.com");
