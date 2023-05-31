
class Person {
    name;
    age;
    talk () {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`)
    }
}

const newPerson = new Person()


newPerson.name = "hélio"
newPerson.age = 42
newPerson.talk()