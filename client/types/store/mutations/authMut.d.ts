export default authMutations;
declare const authMutations: {
    [x: number]: ((state: any, isAuthorized: boolean) => void) | ((state: any) => void);
};
