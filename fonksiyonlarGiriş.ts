

function topla(x,y){
    return x+y;
}

function topla2(x:number,y:number){
    return x+y;
}

let topla3 = function (x:number, y:number):number{
    return x+y;
}

console.log(topla(2,3));
console.log(topla("Ankara", "2"))
console.log(topla2(2,4)); // Ankara dersem kızar number olmalı
console.log(topla3(4,8));


function topla4(x:number,y:number=4){
    return x+y;
}

console.log(topla4(3,8));
// 3. sayı yazılamaz, y yazılmaz ise y yi default kabul eder

function topla5(x:number,y?:number){
    return x+y;
    // y ye soru işareti yazılırsa undefined olur
    // if ile çalıştırlımalı
    if (y) {
        return x+y;
    }
    return x;
}               // opsiyonel kullanım default parametreden farklı
// x e soru işareti verilemez defaultlar en sonda olmalı

// rest parametreler:
function davetEt(ilkDavetli: string,...diğerleri: string[]){
return ilkDavetli + " " + diğerleri.join(" ");

}
console.log(davetEt("Kaan", "Sulkalar", "Ahmet"))



console.log(topla5(3,40))
