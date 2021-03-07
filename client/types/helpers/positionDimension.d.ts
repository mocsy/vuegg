/**
 * Fixes the properties (top, left, height, width) of an element,
 * based on the parent container
 *
 * @param {object} element : The element to which fix its props
 * @param {object} parent : Parent element of the 'element'
 * @return {object} : Object with clean/fixed top, left, height, width properties for the element
 */
export function fixElementToParentBounds(element: object, parent: object): object;
/**
 * Calculates the computed prop of an element,
 * based on its own props and the parent props.
 *
 * (Specially created to deal with percentage dimensions)
 *
 * @param {object} element : The element to get the dimension for
 * @param {object} parent : The parent element of the 'element'
 * @param {string} prop : Property for which to extract the dimension (height/width)
 * @return {number} : The real dimension for the element (height/width)
 */
export function getComputedProp(prop: string, element: object, parent: object): number;
