class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}lucky`;
  }

  get email() {
    return `${this._email.toUpperCase()}`;
  }

  set password(value) {
    this._password = value;
  }

  set email(value) {
    this._email = value;
  }
}

const lucky = new User("lucky@gmail.com", "123dfg");
console.log(lucky.password);
console.log(lucky.email);
