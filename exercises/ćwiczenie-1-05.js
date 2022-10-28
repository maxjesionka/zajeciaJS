/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 36.6;
let m = 50;
let progressBar = ""
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
let percent = Math.ceil((n / m) * 100);
let restOfBar = 100 - percent
let bar = ""


for (let j = 1; j <= percent / 2; j++) {
    console.log(percent);
    bar += '#'

}
for (let i = 1; i <= restOfBar / 2; i++) {
    console.log(restOfBar);
    bar += ' '

}
progressBar = '|' + bar + '|'

let underProgressBar = '0%        ' + '          ' + "    " + percent + "% " + "   " + '          ' + "       100%"
console.log(progressBar)
console.log(underProgressBar)