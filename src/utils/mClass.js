class User {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    console.log(this.name);
  }
}

const userClass = new User("John");

userClass.sayMyName();
