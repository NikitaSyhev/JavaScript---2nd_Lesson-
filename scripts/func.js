//функция может возвращать значения или нет, и возвращать любой тип данных

console.log(sum(5,4));
hi_to('Rodion');

function sum(a, b) {
    var result = a + b;
    return result;
}

function hi_to (who) {
    console.log(`Hello, ${who}!`);
}

function addBlocks (blocks_num) {
    for(let i = 0; i < blocks_num; ++i) {
        document.write(`<p class="block">Блок № ${i}</p>`); // метод, который принимает строку, в ней пишется HTML код ( этот метод используется для учебных целей)
    }
} 


addBlocks(+prompt('Введите количество блоков: '));

function superSum() {
    //console.log(arguments);
    let result = 0;
    for (let el of arguments) {  //arguments - массив всех аргументов, которые мы передаем в фунцию
        if(typeof el === 'number') { //здесь мы сделали проверку на тип данных ( если число, то делаем result += el;)
        result += el;
        }
    }
    return result;
}

console.log(superSum(10,20, 30, 'hello'));