window.addEventListener('load', function() {

    // Задание 1 ====================
    let value = prompt('Enter the value');
    
    if (value !== '') {
        if (isNaN(value)) {
            console.log('Упс, кажется, вы ошиблись')
        } else {
            if (value % 2 == 0) {
                console.log('Четное');
            } else {
                console.log('Нечетное');
            }
        }
    }




    // Задание 2 ====================
    // let x = true;

    // switch (typeof x) {
    //     case 'number':
    //         console.log('x - число');
    //         break;
    //     case 'string':
    //         console.log('x - строка');
    //         break;
    //     case 'boolean':
    //         console.log('x - логический тип');
    //         break;
            
    //     default:
    //         console.log('Тип переменной не определён');
    // }
});