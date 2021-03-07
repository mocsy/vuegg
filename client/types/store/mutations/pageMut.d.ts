export default pageMutations;
declare const pageMutations: {
    [x: number]: ((state: any, page: object) => void) | ((state: any, payload: any) => void);
};
