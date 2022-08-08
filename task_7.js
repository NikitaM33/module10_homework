window.addEventListener('load', function () {
    const arr1 = [15, [], {}, 21, 13, '!', 3, 8, 65, null, 15, 'A', 15, 8, 5, 9, 7, 0, 12];

    const isEven = (arr) => {
        let evens = [];
        let odd = [];

        for (let i = 0; i < arr1.length; i++) {
            if (arr[i] % 2 === 0 && typeof arr[i] === 'number') {
                if (arr[i] === 0) {
                    console.log('Присутствует 0');
                    continue;
                }

                evens.push(arr[i]);
            } else if (arr[i] % 2 !== 0 && typeof arr[i] !== 'string' && typeof arr[i] !== 'object') {
                odd.push(arr[i]);
            }
        }

        console.log(`Четных ${evens.length}, нечетных ${odd.length}`);
    }

    isEven(arr1);
});