class Human {
    constructor(name) {
        this.name = name;

        // debugger;
        // this.sayName = () => {
        //     console.log(this.name);
        // };
    }

    sayName = () => {
        // debugger;
        console.log(this.name);
    };
}

const ron = new Human('Ron');

// ron.sayName();
setTimeout(ron.sayName, 1000);
// setImmediate(ron.sayName);
