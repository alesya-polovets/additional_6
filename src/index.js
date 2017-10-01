module.exports = function zeros(str) {
  // your solution
    var array = str.split("*"); // делаем массив
    var number; // элемент массива в числовом представлении
    var elementString; // элемент массива в виде строки
    var lastSymbols; // 2 последних символы а элементе массива
    var numberOfZeros=0; // искомый элемент, количество 0
    var result; // факториал числа
    var product=1; // произведение факториалов



    for (var i = 0; i < array.length; i++) { // счетчик для перебора элементов массива
        elementString = array[i]; // получаем элемент массива в виде строки
        number = parseInt(elementString); // переводим элемент массива в число
        lastSymbols = elementString.substring(elementString.length-2); // выделяем 2 последних символа в элементе массива

        if (lastSymbols == "!!") { // проверка на двойной факториал

            if (number%2==0) { // проверка на четность
                // двойной факториал для четного числа
                result = 1;
                for (var m = 2; m <= number; m += 2) {
                    result *= m;
                }

            }
            else {
                // двойной факториал для нечетного числа
                result = 1;
                for (var j = 1; j <= number; j += 2) {
                    result *= j;
                }
            }
        }

        else { // обычный факториал
            result = 1;
            for (var k = 1; k <= number; ++k) {
                result *= k;
            }
        }
        product = product*result;
    }

    product=String(product);

    for (var l = 0; l < product.length; l++) {
        if (product[l]==0) {
            numberOfZeros+=1;
        }
        else {
            numberOfZeros = 0;
        }
    }
    return Number(numberOfZeros);

}
