class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    dump() {
        console.log("Dog's name is: " + this.name + " age: " + this.age);
    }
}

export default Dog;