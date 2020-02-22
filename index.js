function createUser (name, score) {
  const newUser = Object.create(userFunction);
  newUser.name = name;
  newUser.score = score;
  return newUser
}

const userFunction = {
  increment: function (){ this.score++},
  changeName: function (name){ this.name = name},
}

const user1 = createUser("mohammad", 5);

const user2 = createUser("ALi", 1);

user2.increment();
user2.changeName("Husain")
console.log(user2)

console.log(user1)