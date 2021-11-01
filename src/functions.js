function addToCart(quantity,productName="elma") {

    console.log("Sepete Eklendi! ürün: "+ productName + " adedi " + quantity)
    
}


//addToCard()
addToCart(10)
//addToCard("karpuz")



let sayHello = () => {
    console.log("Hello World!")
    console.log("Hello World!")
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2 ")
}
sayHello2()

function addToCart2(productName, quantity,unitPrice) {
    
}
addToCart2("elma", 5, 10)
addToCart2("armut", 2, 20)
addToCart2("limon", 3, 15)

let product1 = {productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
console.log("Ürün: " + product.productName)
console.log("Adet: " + product.quantity)
console.log("Fiyat: " + product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)


// güzel örnek stack - heap
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
// güzel örnek stack - heap

function addToCart4(products) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]
addToCart4(products)


function add(...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total+ numbers[i]
        
    }
    console.log(total)

}
add(20,30)

let numbers = [30,10,500,600,120]
console.log(...numbers)
console.log(Math.max(...numbers))

//split ayrıştırır rest toparlar

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},

    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"],
    ]
]
//console.log(marmara.population)
//console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)


let newproductName, newunitPrice,newquantity
({productName:newproductName,unitPrice:newunitPrice,quantity:newquantity} 
= {productName:"Elma",unitPrice:10,quantity:5})
console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)

