function magicSum(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Number(array[i]) + Number(array[j]) === Number(sum)) {
                console.log(array[i] + ` ` + array[j]);
            }
        }
    }

    console.log();
}
magicSum([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6);
