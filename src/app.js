console.log("Merhaba Kodlama.io")

//JS type safe değildir. "type safe = tip güvenli"

let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "Ankara"

{
    let dolarDun = 9.10
}

console.log(dolarDun)



const euroDun = 11.2
// euroDun = 11 bu olmazzz
console.log(euroDun)

//arrayler 
//camelCase
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak-Konut  Kredisi", "Kamut Konut Kredisi","Özel Konut"]
//react  javascripti kullanan gelişmiş bir kütüphane 
console.log("<ul>")
for (let i=0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")

console.log(konutKredileri)