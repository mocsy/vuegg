/**
 * Returns the component instance from the base component provided
 *
 * @param {object} component : base component to generate the instance
 * @return {object} : Component instance
 *
 * @see {@link [types.registerElement]}
 * @see {@link [types.duplicatePage]}
 */
export function compInst(component: object): object;
/**
 * Returns the component reference from the base component provided
 *
 * @param {object} component : base component to generate the instance
 * @return {object} : Component reference
 *
 * @see {@link [types.registerElement]}
 * @see {@link [types.duplicatePage]}
 */
export function compRef(component: object): object;
export default componentFactory;
declare namespace componentFactory {
    export { compInst };
    export { compRef };
}
