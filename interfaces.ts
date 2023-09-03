interface product{
    id:number;
    name:string;
    unitPrice:number;
}

class product2 {
    id:number;
    name:string;
    unitPrice:number;

}

function save(product:product){
    console.log(product.name + " Kaydedildi!")
}

save({id:1, name:"Laptop", unitPrice:10000})

let mouse = new product2()
mouse.name = "razer"

function save2(product2:product){
    console.log(product2.name + " Kaydedildi!")
}

save2(mouse)  // bütün değerleri vermek zorundaysak class vermek zorunda değilsek interface

interface personService{
    save();
}

class customerService implements personService{
    save() {
    }
}