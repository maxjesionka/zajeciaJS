/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
let rectWidth = 7;
let rectHeight = 5;
let rectBorderSymbol = '#';
let rectString = '';
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/

if (rectWidth <= -1 || rectWidth >= 81 || rectHeight <= -1 || rectHeight >= 81) {
    rectString = "Podaj wartości wieksze od -1 i mniejsze od 81"
} else if (rectBorderSymbol.includes(" ")) {
    rectString = "Symbol jest niewłaściwy"
}

else {


    for (let i = 1; i <= rectWidth; i++) {
        rectString += rectBorderSymbol
    }
    rectString += "\n";

    for (let j = 1; j <= (rectHeight - 2); j++) {
        rectString += rectBorderSymbol
        for (let i = 1; i <= (rectWidth - 2); i++) {
            rectString += " "
        }
        rectString += rectBorderSymbol
        rectString += "\n";
    }

    for (let i = 1; i <= rectWidth; i++) {
        rectString += rectBorderSymbol
    }
}
console.log(rectString);