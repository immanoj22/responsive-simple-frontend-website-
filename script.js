//create
const newh1=document.createElement("h2");
//assigning
newh1.textContent="There are four boxes";
newh1.id="heading"
//prepend or append
document.body.prepend(newh1);
//styleing
newh1.style.textAlign="center";
//box1
let box1=document.getElementById("box1");
const newh3=document.createElement("h3");

newh3.id="mybox1h31"

newh3.textContent="1. Fruits Names";
document.body.insertBefore(newh3,box1);

//adding elements to box1-apple,orange,mango,banna,
let box1element1=document.createElement("p");
box1element1.textContent="1.Apple";
box1element1.className="box1class";
box1element1.id="Apple"

let box1element2=document.createElement("p");
box1element2.textContent="2.Mango";
box1element2.className="box1class";
box1element2.id="Mango";


let box1element3=document.createElement("p");
box1element3.textContent="3.Orange";
box1element3.className="box1class";
box1element3.id="Orange";

let box1element4=document.createElement("p");
box1element4.textContent="4.Banana";
box1element4.className="box1class";
box1element4.id="Banana"

let box1element5=document.createElement("p");
box1element5.textContent="5.Strawberry";
box1element5.className="box1class";
box1element5.id="strawberry"

box1.append(box1element1,box1element2,box1element3,box1element4,box1element5);


//box2

let box2=document.getElementById("box2");
const newh3box2=document.createElement("h3");

newh3box2.id="mybox2h31"

newh3box2.textContent="2. Vegetable Names";
document.body.insertBefore(newh3box2,box2);

//adding element
let box2element1=document.createElement("p");
box2element1.textContent="1.Tomato";
box2element1.className="box2class";
box2element1.id="tomato"

let box2element2=document.createElement("p");
box2element2.textContent="2.Potato";
box2element2.className="box2class";
box2element2.id="Potato";


let box2element3=document.createElement("p");
box2element3.textContent="3.Carrot";
box2element3.className="box2class";
box2element3.id="Carrot";

let box2element4=document.createElement("p");
box2element4.textContent="4.Cabbage";
box2element4.className="box2class";
box2element4.id="Cabbage"

let box2element5=document.createElement("p");
box2element5.textContent="5.Spinach";
box2element5.className="box2class";
box2element5.id="Spinach"

box2.append(box2element1,box2element2,box2element3,box2element4,box2element5);


//box3
let box3=document.getElementById("box3");
const newh3box3=document.createElement("h3");

newh3box3.id="mybox3h31"

newh3box3.textContent="3. Flower Names";
document.body.insertBefore(newh3box3,box3);

//box 3 adding
let box3element1=document.createElement("p");
box3element1.textContent="1.Rose";
box3element1.className="box3class";
box3element1.id="Rose"

let box3element2=document.createElement("p");
box3element2.textContent="2.Sunflower";
box3element2.className="box3class";
box3element2.id="Sunflower";


let box3element3=document.createElement("p");
box3element3.textContent="3.Marigold";
box3element3.className="box3class";
box3element3.id="Marigold";

let box3element4=document.createElement("p");
box3element4.textContent="4.Lavender";
box3element4.className="box3class";
box3element4.id="Lavender"

let box3element5=document.createElement("p");
box3element5.textContent="5.Orchid";
box3element5.className="box3class";
box3element5.id="Orchid"

box3.append(box3element1,box3element2,box3element3,box3element4,box3element5)
