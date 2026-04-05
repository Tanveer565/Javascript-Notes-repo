// DOM = DOCUMENT OBJECT MODEL
//Object{} that represents the page you see in the web browser 
//and provides you with an API to interact with it.
//Web browser constructs the DOM when it loads an HTML document,
//and structures all the elements in a tree-like representation.
//JavaScript can access the DOM to dynamically 
//change the content, structure, and style of a web page.


// document.getElementById("id").textContent = "Welcome";

// console.log(document);

console.log("Element Selectors");

// // element selectors = Methods used to target and manipulate HTML elements 
// //They allow you to select one or multiple HTML elements
// //from the DOM (Document Object Model)

// // 1. document.getElementById()        // ELEMENT OR NULL
// // 2. document.getElementsClassName() // HTML COLLECTION
// // 3. document.getElementsByTagName() // HTML COLLECTION
// // 4. document.querySelector()       // FIRST ELEMENT OR NULL
// // 5. document.querySelectorAll()   // NODELIST

// // ---------- getElementById() ----------

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
// myHeading.textContent = "Fruits Here";

// // ---------- getElementsByClassName() ----------

// const fruits = document.getElementsByClassName("fruits");


// //you cannot use forEach() method as it is collection not array

// //Converting into an array and then using forEach

// Array.from(fruits).forEach(fruits =>
//     fruits.style.backgroundColor = "purple"
// );

// // // ---------- getElementsByTagName() ----------

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "#FFD700";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// // // ---------- querySelector() ----------

// //only select the first match even if you have two element or Null

// const element = document.querySelector("li");

// element.style.backgroundColor = "yellow";

// // // ---------- querySelectorAll() ----------

// // In case of node list it is already array

// const foods = document.querySelectorAll("li");

// foods.forEach(food => {
//     food.style.backgroundColor = "yellow"
// });

console.log("Dom-Navigation");

// Dom-navigation = DOM Navigation refers to the process of moving between different nodes in the Document Object Model (DOM) tree using the relationships between them. Since the DOM represents an HTML document as a hierarchical tree of nodes, every element, attribute, and piece of text is a node that is connected to others.

// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------

// const ulElements1 = document.querySelectorAll("ul");

// ulElements1.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "orange";
// });

// // ---------- .lastElementChild ----------

// const ulElements2 = document.querySelectorAll("ul");

// ulElements2.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "Green";
// });

// ---------- .nextElementSibling ----------

// will take the after 
// const element = document.getElementById("lady");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// ---------- .previousElementSibling ----------

// the previous one
// const element1 = document.getElementById("apple");
// const prevSibling = element1.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// // ---------- .parentElement ----------

// will take the whole parent of element
// const element2 = document.getElementById("spple");
// const parent = element2.parentElement;
// parent.style.backgroundColor = "yellow";

// // ---------- .children ----------

// const element3 = document.getElementById("fruits");
// const children = element3.children;

// //type casting as array
// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "gray";
// });

console.log("Changing Html by js dom");

// STEP 1 CREATE THE ELEMENT
const newh1 = document.createElement("h1");

newh1.textContent = "Welcom";
newh1.id = "Welcom";
newh1.style.backgroundColor = "Green";
newh1.style.textAlign = "center";

// const newH1 = document.createElement("h1");

// // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// // STEP 3 APPEND ELEMENT TO DOM

// // document.body.append(newH1); //first child as append

// // document.body.prepend(newH1); // last child as prepend

// document.getElementById("box1").append(newH1);
// // document.getElementById("box1").prepend(newH1);

// // const box4 = document.getElementById("box4");
// // document.body.insertBefore(newH1, box4);

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[1]);l

// // REMOVE HTML ELEMENT

// // document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// // ---------- EXAMPLE 2 li ELEMENT ----------

// // STEP 1 CREATE THE ELEMENT
// const newListItem = document.createElement("li");

// // // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// // STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// // document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("fruits").removeChild(newListItem);
