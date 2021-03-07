export default elementMutations;
declare const elementMutations: {
    [x: number]: ((state: any, payload: any) => void) | ((state: any) => void) | ((state: any, elements: any[]) => void);
};
