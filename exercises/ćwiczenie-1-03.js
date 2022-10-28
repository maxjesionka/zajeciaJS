/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 11;
let romanNumber = 'IV';


/*
    Wpisz kod zadania w miejscu tego komentarza.
*/

function toRoman(dn) {
    let err
    var roman = {
        X: 10,
        IX: 9,
        VIII: 8,
        VII: 7,
        VI: 6,
        V: 5,
        IV: 4,
        III: 3,
        II: 2,
        I: 1
    };

    for (let [key, value] of Object.entries(roman)) {
        if (value == dn) {
            err = key
            break
        }
    }


    return err;

}

if (decimalNumber > 10) {
    romanNumber = 'Decimal number is out of range!'
}
else if (decimalNumber == null || decimalNumber == undefined) {
    romanNumber = 'Decimal number is undefined or null!'
}
else { romanNumber = toRoman(decimalNumber) }


console.log(romanNumber);