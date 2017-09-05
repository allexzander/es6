class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    dump() {
        console.log("Cat's name is: " + this.name + " age: " + this.age);
    }
}

export default Cat;