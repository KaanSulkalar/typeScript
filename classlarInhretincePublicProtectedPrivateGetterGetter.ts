class Ev{
    private _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;


    constructor(odaSayisi:number, pencereSayisi:number,kat:number) {
    this._odaSayisi = odaSayisi;
    this._kat = kat;
    this._pencereSayisi = pencereSayisi

    }

    YemekYe(){
        console.log(this._kat + "katlı evde "+" Yemek Yiyildi")

    }
}

let ev = new Ev(3,4,5)
ev.YemekYe();
console.log(ev._kat)


class Kisi{
    private _isim:string
    get isim():string{
        return "Sayın : " + this._isim;

}
    set isim(ad:string){
        this._isim = ad
    }

    kaydet(){
        console.log("Kişi Kaydedildi");

    }

}

class Musteri extends Kisi{
   satısYap(){
       console.log("Satış Yapıldı");
   }


}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş Ödendi");
    }


}

let musteri = new Musteri()
musteri.isim = "Kaan"
console.log(musteri.isim)
musteri.kaydet();
musteri.satısYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();