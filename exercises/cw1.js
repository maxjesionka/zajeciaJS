/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 1;
let radius = '';
let pi = 3.1415


radius = Math.sqrt(area / pi);
radius = radius.toFixed(2);

console.log(radius)

