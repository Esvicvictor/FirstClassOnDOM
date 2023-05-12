// let id1 = document.getElementById("hello")
// console.log(id1)

// let div1 = document.getElementById("one")
// console.log(div1)

// div1.innerHTML = `
// <h2>Hello h2</h2>
// <h3>Hello h3</h3>
// `
// console.log(div1)

let heading = document.getElementById("heading")
heading.style.textAlign = "center"
heading.style.color = "grey"
heading.style.fontFamily = "monospace"
heading.style.fontSize = "3rem"

let subHeading = document.getElementById("sub-heading")
subHeading.style.textAlign = "center"
subHeading.style.fontSize = "30px"
subHeading.style.color = "gold"
subHeading.style.fontFamily = "monospace"


let buttons = document.querySelectorAll("#buttons");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "flex"
    buttons[i].style.justifyContent = "center"
    buttons[i].style.gap = "10px"
}

// button for signup and login starts
let btn = document.getElementById("btn1")
btn.style.padding = "8px 30px"
btn.style.borderRadius = "15px"
btn.style.borderStyle = "none"
btn.style.backgroundColor = "blue"
btn.style.fontFamily = "monospace"
btn.style.color = "white"


let btn2 = document.getElementById("btn2")
btn2.style.padding = "8px 30px"
btn2.style.borderRadius = "15px"
btn2.style.boxShadow = "5px 2px 21px grey"
btn2.style.borderStyle = "none"
btn2.style.fontFamily = "monospace"

// button for signup and login ends

//style for the body
let body = document.querySelector("body")
body.style.backgroundColor = "#000009"


//querySelector ----- singular(focused on one element)
//querySelectorAll ---- plural(focused on all element inside a div or container or whatever)

// let pTag = document.querySelector(".ptag")
// console.log(pTag)


//style for the text paragraph
let ptag = document.querySelectorAll(".ptag")
console.log(ptag)

for (i = 0; i < ptag.length; i++) {
    ptag[i].style.color = "grey"
    ptag[i].style.fontFamily = "monospace"
    ptag[i].style.fontSize = "30px"
    ptag[i].style.fontWeight = "800"

}

//individual styling for paragraph tags starts
let pitems = document.getElementById("flex-item")
pitems.style.display = "flex"
pitems.style.gap = "30px"
pitems.style.width = "70%"
pitems.style.margin = "auto"
pitems.style.padding = "60px"

// styling for span paragraph starts
let spanItem = document.getElementById("span1")
spanItem.style.color = "gold"

let Item2 = document.getElementById("span2")
Item2.style.color = "gold"

let Item3 = document.getElementById("span3")
Item3.style.color = "gold"

let Item4 = document.getElementById("span4")
Item4.style.color = "gold"

// styling for span paragraph ends

let textItems = document.getElementById("item-1")
textItems.style.textAlign = "center"
textItems.style.lineHeight = "2.3rem"
textItems.style.border = "2px groove #f4f4f4"
textItems.style.padding = "0px 16px"

let Items = document.getElementById("item-2")
Items.style.textAlign = "center"
Items.style.lineHeight = "2.3rem"
Items.style.padding = "0px 16px"
Items.style.border = "2px groove #f4f4f4"

let Items3 = document.getElementById("item-3")
Items3.style.textAlign = "center"
Items3.style.lineHeight = "2.3rem"
Items3.style.padding = "0px 16px"
Items3.style.border = "2px groove #f4f4f4"

let Items4 = document.getElementById("item-4")
Items4.style.textAlign = "center"
Items4.style.lineHeight = "2.3rem"
Items4.style.padding = "0px 16px"
Items4.style.border = "2px groove #f4f4f4"

//individual styling for paragraph ends