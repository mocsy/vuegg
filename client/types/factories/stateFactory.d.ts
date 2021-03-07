export default newState;
declare function newState(project: any): {
    app: {
        isLoading: boolean;
        isBlockLoading: boolean;
        hasChanges: boolean;
        isSyncing: boolean;
        canUndo: boolean;
        canRedo: boolean;
        pageDialog: {
            isNew: boolean;
            isOpen: boolean;
        };
        selectedPage: any;
        selectedElements: any[];
        editorZoom: number;
    };
    oauth: {
        isAuthorized: boolean;
        authenticatedUser: any;
    };
    project: any;
};
