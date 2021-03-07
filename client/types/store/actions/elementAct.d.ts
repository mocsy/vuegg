export default elementActions;
declare const elementActions: {
    [x: number]: (({ getters, commit }: string, payload: any) => void) | (({ getters, commit, state }: {
        getters: any;
        commit: any;
        state: any;
    }) => void);
};
