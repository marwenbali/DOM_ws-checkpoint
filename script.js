// hetha eli 7awelt fih ana
// function changeColor(event) {
    
//     cible=event.target
//     var parent=cible.parentElement

//     var btn1=parent.querySelector("fas")
//     btn.style.backgroundColor="red"
// }

// var btn=document.querySelector(".like")
// console.log(btn);

// btn.addEventListener("click",changeColor)

var btnlike=document.querySelectorAll(".like")
for (let i = 0; i < btnlike.length; i++) {
     btnlike[i].addEventListener("click",like);
    
}
function like(event) {
    var cible=event.target
    var parent=cible.parentElement
    if(parent.style.color!="red"){
        parent.style.color="red"
    }else{
        parent.style.color="#424242"
    }
}







var btnPlus=document.querySelectorAll(".plus")

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click",increment)
    
}

function increment(event) {
    var cible=event.target
    var parent=cible.parentElement
    var count=Number(parent.querySelector("p").innerHTML)
    count++
    parent.querySelector("p").innerHTML=count
    var tr=parent.parentElement.parentElement
    var unitPrice=Number(tr.querySelector(".unitPrice").innerHTML)
    var price=count*unitPrice
    tr.querySelector(".price").innerHTML=price
    total()
}


var btnMin=document.querySelectorAll(".minus")

for (let i = 0; i < btnMin.length; i++) {
    btnMin[i].addEventListener("click",decrement)
    
}

function decrement(event) {
    var cible=event.target
    var parent=cible.parentElement
    var count=Number(parent.querySelector("p").innerHTML)
    count--
    if(count<0){
        count=0
    }
    parent.querySelector("p").innerHTML=count
    var tr=parent.parentElement.parentElement
    var unitPrice=Number(tr.querySelector(".unitPrice").innerHTML)
    var price=count*unitPrice
    tr.querySelector(".price").innerHTML=price
    total()
}

var prices=document.querySelectorAll(".price")

function total() {
    var total=0
    for (let i = 0; i < prices.length; i++) {
        total = total + Number(prices[i].innerHTML)
        document.querySelector("#total").innerHTML=total
        
    }
}


var btnDel=document.querySelectorAll(".delete")

for (let i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click",del)  
}
function del(event) {
    var cible=event.target
    var tr=cible.parentElement.parentElement.parentElement.parentElement
    tr.querySelector("p").innerHTML=0
    tr.querySelector(".price").innerHTML=0
    total()
}