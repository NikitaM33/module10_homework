window.addEventListener('load', function() {
    let x = 321;
    // let x = 'Hello';
    // let x = true;

    switch (typeof x) {
        case 'number':
            console.log('х - число');
            break;
        case 'string':
            console.log('х - строка');
            break;
        case 'boolean':
            console.log('х - логический тип');
            break;

        default:
            return console.log('Тип х не определен');
    }
});