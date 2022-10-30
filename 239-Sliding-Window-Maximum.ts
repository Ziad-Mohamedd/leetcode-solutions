var maxSlidingWindow = function(array: number[], k: number) {

    let result: number[] = [];
    let window: number[] = [];

    if ( array.length === 0) {
        return result;
    }

    if ( k > array.length) {
        k = array.length;
    }

    for ( let i = 0; i < k ; i++) {
        while (window.length && array[i] > array[window[window.length -1]] ) {
            window.pop();
        }

        window.push(i);
    }

    result.push(array[window[0]]);

    for ( let i = k; i < array.length ; i++) {
        if (window.length && window[0] <= i - k) window.shift();
        while (window.length && array[i] >= array[window[window.length -1]] ) {
            window.pop();
        }

        window.push(i);
        result.push(array[window[0]]);

    }

    return result;
}