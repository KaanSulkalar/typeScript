abstract class KrediBase {
    constructor() {

    }
    kaydet(): void {
        console.log("Kaydedildi");
    }
    abstract hesapla(): void;
}

class MortgageKredisi extends KrediBase {
    constructor() {
        super();
    }

    hesapla() {
        console.log("Konut Kredisine göre hesap yapıldı.");
    }
}

class TuketiciKredisi extends KrediBase {
    constructor() {
        super();
    }
    hesapla() {
        console.log("Tüketici Kredisine göre hesap yapıldı.");
    }

    BaskaBirOperasyon() {

    }
}

let tuketiciKrediInstance = new TuketiciKredisi();
tuketiciKrediInstance.hesapla();
tuketiciKrediInstance.kaydet();

let mortgageKrediInstance = new MortgageKredisi();
mortgageKrediInstance.hesapla();
mortgageKrediInstance.kaydet();

let kredi: KrediBase;
kredi = new TuketiciKredisi();
kredi = new MortgageKredisi();
