class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const user1 = new User("lucky");
// console.log(user1);
// console.log(user1.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const user2 = new Teacher("sam", "sam@gmail.com");
// console.log(user2.createId());
