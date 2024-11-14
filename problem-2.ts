function removeDuplicates(numbers: number[]): number[] {
    let uniqueNumbers: number[] = [];

    for (let number of numbers) {

        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }

    return uniqueNumbers;
}


const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result); 