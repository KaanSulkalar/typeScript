



function  SelamınHello(isminiz:string){
    return " Merhaba " + isminiz
}

let mesaj = SelamınHello('Kaan')
console.log(mesaj)


let sayı: number = 17
sayı = 20
sayı = 20.7


let şehir: string = "Istanbul"
şehir = "Ankara"
şehir = "NewYork"

let doğruMu: boolean = true
doğruMu = false
doğruMu = true


let sayılar: number[] = [1, 2, 3] // string koyulması imkansız array sonuçta
let sayılar2: Array<number> = [1, 2, 3]


let dizi:[number, string] = [2, "Ankara"]
dizi[0]
dizi[1]


enum Renk {Kırmızı=1, Mavi, Mor}
let renk : Renk = Renk.Kırmızı



let değer : any = "Ankara"
değer = 2
değer = {}


let değer2 : void = undefined


function Selamver2() {
    console.log("Merhaba")
    return 5;
}

// undefined null

let yaş:number;
yaş = 10











