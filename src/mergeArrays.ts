function merge(leftArray: number[], rightArray: number[]): number[] {
    let resultArray: number[] = [];
    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            resultArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    } 
    
    return [...resultArray, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
}

function mergeSort(collection_1: number[], collection_2: number[]): number[] {
    if (collection_1.length <= 1 && collection_2.length <= 1) {
        return merge(collection_1, collection_2);
    }

    const pivot_1 = Math.floor(collection_1.length / 2);
    const leftArray_1 = collection_1.slice(0, pivot_1);
    const rightArray_1 = collection_1.slice(pivot_1);

    const pivot_2 = Math.floor(collection_2.length / 2);
    const leftArray_2 = collection_2.slice(0, pivot_2);
    const rightArray_2 = collection_2.slice(pivot_2);

    return merge(mergeSort(leftArray_1, rightArray_1), mergeSort(leftArray_2, rightArray_2));
}

export default mergeSort;
