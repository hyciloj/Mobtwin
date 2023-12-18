export class _ArrayFunctions {
    static Shuffle = ((arr: any[]) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    });

    /**
     * Split array into chunks of a given size
     */
    static Chunk = <T>(array: T[], n: number): T[][] => {

        return Array.from({length: Math.ceil(array.length / n)}, (v, i) =>
            array.slice(i * n, i * n + n)
        );
    }


    /**
     * Split a array into n separate tables
     */
    static Divide = <T>(array: T[], n: number): T[][] => {
        const chunkSize = Math.ceil(array.length / n);
        const dividedArrays = [];

        for (let i = 0; i < n; i++) {
            const start = i * chunkSize;
            const end = start + chunkSize;
            dividedArrays.push(array.slice(start, end));
        }

        return dividedArrays;
    }


    /**
     * Get n value from an array with a size
     */
    static PreciseSize = <T>(array: T[], n: number): T[] => {

        let shuffled = array.sort(function(){ return 0.5 - Math.random() });
        return shuffled.slice(0, n)
        // return array.sort((a, b) => b - a).slice(0, size)
    }

}