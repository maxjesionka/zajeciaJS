/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */
let height = 5;
let triangle = '';

for (let i = 0; i < height; i++) {
    // triangle += "# \n";
    
    for (let j = 0; j <= i; j++){
        triangle +="#"
    }
    triangle += "\n";
    // triangle.concat(triangle + "#")
    // console.log("# \n")
}



/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
console.log(triangle);