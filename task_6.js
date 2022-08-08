window.addEventListener('load', function() {
    const arr1 = [15, 21, 13, 3, 8, 65, 15, 15, 08, 5, 9, 7, 0, 12];
    const arr2 = [1, 1, 1, 1, 1, 1, 1, 1];

    // 1 Вариант решения ==================
    // const isSame = (arr) => {
    //     let arrIsSame = arr.every(el => el === arr[0]);

    //     console.log(arrIsSame);
    // }

    // 2 Вариант решения ==================
    const isSame = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] !== arr[j]) {
                    console.log('Массив не одинаковый');
                    return;
                }
            }
        }

        console.log('Массив одинаковый');
    }

    isSame(arr2);
});