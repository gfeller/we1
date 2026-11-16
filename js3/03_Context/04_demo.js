name = "global!";
//what is this
console.log(this); //works in browser different

function hallo(){
    //console.log(this.toString());
    console.log(this.name);
}
hallo();


const dummy = {name : "Bob"};
dummy.hallo = hallo;
dummy.hallo();
//change hallo to => this.name;

//1 regel => object.foo() ist this => object
// --------

//2 regel => functionen ohne object haben this = global
const hallo2 = dummy.hallo;
hallo2();

//3 regel => mit new wird this gleich ein empty object;
new hallo();
new hallo() instanceof hallo

// entspricht
function newHallo(){
    var self = {}; // self = this (this ist schreibgeschütz)
    console.log(self.name);
    return self;
}
const newHalloInstance = new newHallo();


//..........................................................
const test = {name : "hallo"}
hallo();
hallo.call(test);

const bindHallo = hallo.bind(test);
bindHallo();

//..................................




// Vermeiden
element.addEventListener('click', function () {
    // this ist das event.currentTarget
    this.classList.add('active');
});

// Bevorzugen
element.addEventListener('click', function (event) {
    event.currentTarget.classList.add('active');
});