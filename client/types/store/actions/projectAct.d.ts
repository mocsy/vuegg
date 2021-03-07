export default projectActions;
declare const projectActions: {
    [x: number]: (({ state, commit }?: string | null, projectB64?: string | null) => Promise<void>) | (({ state, dispatch, commit }: string, { repoName }: {
        repoName: any;
    }) => Promise<void>) | (({ state, dispatch, commit }: {
        state: any;
        dispatch: any;
        commit: any;
    }) => any);
};
