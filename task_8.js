window.addEventListener('load', function () {
    let map = new Map();

    map.set('HTML', 'HyperText Markup Language')
        .set('CSS', 'Cascade Style Sheets')
        .set('JS', 'JavaScript');

    for (let [key, value] of map) {
        console.log(`Ключ - ${key}, значение - ${value}`);
    }
});