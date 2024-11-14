{
    function countWordOccurrences(sentence: string, word: string): number {

        word = word.toLowerCase();


        const words = sentence.split(" ");


        let count = 0;
        for (let w of words) {
            if (w === word) {
                count++;
            }
        }

        return count;
    }


    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result); // Output: 1
}