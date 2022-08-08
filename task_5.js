window.addEventListener('load', function() {
    const arr1 = [15, 21, 13, 3, 8, 65, 15, 15, 08, 5, 9, 7, 0, 12];

    const arrCount = (arr) => {
        console.log('Количество элементов ', arr.length);

        arr.map(el => console.log(el));
    }

    arrCount(arr1);
});