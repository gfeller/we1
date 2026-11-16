this.name1 = "Bob";
const dummy1 = {
    name: "Bob",
    test: () => {
        console.log("2", this.name1)
    }
};
dummy1.test()

class Person2 {
    name = "Lena"
    hallo = () => {
        console.log(this.name)
    }

    hallo2() {
        console.log(this.name)
    }
}

const {hallo, hallo2} = new Person2();
hallo();
hallo2();