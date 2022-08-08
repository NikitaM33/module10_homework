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
});