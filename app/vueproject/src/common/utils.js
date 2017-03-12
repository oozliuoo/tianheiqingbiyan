/**
 * Utility functions used in this project will be defined here
 */

/**
 * Check if an array contains a specified value
 * @param arr - The array checking against
 * @param value - alue we are looking for
 */
function arrayContains(arr, value) {
    for (const val of arr) {
        if (val === value) {
            return true;
        }
    }

    return false;
}

/**
 * Calling the elements' click event when it gets touched
 */
function onTouchStart(event) {
    const target = event.target;
    $(target).click();
}

export {
    arrayContains,
    onTouchStart,
}