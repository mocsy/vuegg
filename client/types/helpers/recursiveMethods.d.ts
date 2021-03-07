/**
 * Assigns a new id to the element preceded by the parentId and a dot '.'
 *
 * @param {object} el : Element to register
 * @param {string} [parentId] : Id of the parent element
 *
 * @return {object} : New element (cloned from egglement) with newly assigned ids
 */
export function setElId(el: object, parentId?: string): object;
/**
* Creates an array containing all the global/external components inside.
*
* @param {object} el : Current reviewing element
* @return {object} : An array with the global/external components found inside.
*/
export function getExtGlobComps(el: object, compList: any): object;
/**
 * Returns the element identified by targetId, which could be the
 * currentNode itself, one of its children... (and down to any depth)
 *
 * @param {object} currentNode : The element being inspected
 * @param {string} targetId : The id of the element expected
 *
 * @return {object} : The element identified by targetId
 */
export function getChildNode(currentNode: object, targetId: string): object;
/**
 * Returns the element --identified by targetId-- relative position,
 * based on its parent (and full family depth) position
 * and the current mouse left/top position.
 *
 * This method gives positioning support for elements changing "family".
 *
 * @param {object} currentNode : The element being inspected
 * @param {string} targetId : The id of the element expected
 * @param {number} currentX : Current relative left position
 * @param {number} currentY : Current relative top position
 *
 * @return {object} : Relative point obtained from the currentX, currentY
 */
export function calcRelativePoint(currentNode: object, targetId: string, currentX: number, currentY: number): object;
