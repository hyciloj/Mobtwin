interface arrayInterface {
    array: any[]
}

interface sizeInterface extends arrayInterface {
    size: number
}

/**
 * Shuffle array
 */
export const _Shuffle = ((arr: any[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
});

/**
 * Split array into chunks of a given size
 */
export const _Chunk = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

/**
 * Split a array into n separate tables
 */
export const _Divide = (array: any[], parts: number) => {
    const chunkSize = Math.ceil(array.length / parts);
    const dividedArrays = [];

    for (let i = 0; i < parts; i++) {
        const start = i * chunkSize;
        const end = start + chunkSize;
        dividedArrays.push(array.slice(start, end));
    }

    return dividedArrays;
}













