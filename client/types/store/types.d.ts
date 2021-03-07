/**
 * Keeps an index of all the "types" of functions of the store
 * (Getters, Actions, Mutations --internal/external)
 *
 * TODO: it may be smart to granulate this file (either by type or by context)
 */
export const getPageIndexById: "getPageIndexById";
export const getPageById: "getPageById";
export const pageExists: "pageExists";
export const pathInUse: "pathInUse";
export const nameInUse: "nameInUse";
export const getComponentRefIndexByName: "getComponentRefIndexByName";
export const getComponentRefByName: "getComponentRefByName";
export const getComponentRefByIndex: "getComponentRefByIndex";
export const componentExist: "componentExist";
export const getSelectedElIndexById: "getSelectedElIndexById";
export const logIn: "logIn";
export const logOut: "logOut";
export const checkAuth: "checkAuth";
export const downloadProject: "downloadProject";
export const uploadProjectToGH: "uploadProjectToGH";
export const downloadVueSources: "downloadVueSources";
export const uploadVueSourcesToGH: "uploadVueSourcesToGH";
export const checkLastSaved: "checkLastSaved";
export const syncLocal: "syncLocal";
export const loadVueggProject: "loadVueggProject";
export const clearProject: "clearProject";
export const savePageAndClose: "savePageAndClose";
export const duplicatePage: "duplicatePage";
export const removePage: "removePage";
export const registerElement: "registerElement";
export const resizeElement: "resizeElement";
export const moveElement: "moveElement";
export const changeElementParent: "changeElementParent";
export const removeElement: "removeElement";
export const rebaseSelectedElements: "rebaseSelectedElements";
export const addProject: "addProject";
export const updateProject: "updateProject";
export const deleteProject: "deleteProject";
export const createPage: "createPage";
export const updatePage: "updatePage";
export const deletePage: "deletePage";
export const createEgglement: "createEgglement";
export const updateEgglement: "updateEgglement";
export const deleteEgglement: "deleteEgglement";
export const _toggleAuthorizationStatus: "_toggleAuthorizationStatus";
export const _addAuthenticatedUser: "_addAuthenticatedUser";
export const _removeAuthenticatedUser: "_removeAuthenticatedUser";
export const _toggleLoadingStatus: "_toggleLoadingStatus";
export const _toggleBlockLoadingStatus: "_toggleBlockLoadingStatus";
export const _toggleHasChanges: "_toggleHasChanges";
export const _toggleIsSyncing: "_toggleIsSyncing";
export const _toggleCanRedo: "_toggleCanRedo";
export const _toggleCanUndo: "_toggleCanUndo";
export const _togglePageDialog: "_togglePageDialog";
export const _updateEditorZoom: "_updateEditorZoom";
export const _changeActivePage: "_changeActivePage";
export const _rebaseActivePage: "_rebaseActivePage";
export const _clearSelectedElements: "_clearSelectedElements";
export const _addSelectedElements: "_addSelectedElements";
export const _addSelectedElement: "_addSelectedElement";
export const _removeSelectedElement: "_removeSelectedElement";
export const _saveComponentRef: "_saveComponentRef";
export const _updateComponentRef: "_updateComponentRef";
export const _removeComponentRef: "_removeComponentRef";
export default types;
declare namespace types {
    export { getPageIndexById };
    export { getPageById };
    export { pageExists };
    export { pathInUse };
    export { nameInUse };
    export { getComponentRefIndexByName };
    export { getComponentRefByName };
    export { getComponentRefByIndex };
    export { componentExist };
    export { getSelectedElIndexById };
    export { logIn };
    export { logOut };
    export { checkAuth };
    export { downloadVueSources };
    export { downloadProject };
    export { uploadVueSourcesToGH };
    export { uploadProjectToGH };
    export { checkLastSaved };
    export { syncLocal };
    export { loadVueggProject };
    export { clearProject };
    export { savePageAndClose };
    export { duplicatePage };
    export { removePage };
    export { registerElement };
    export { resizeElement };
    export { moveElement };
    export { changeElementParent };
    export { removeElement };
    export { rebaseSelectedElements };
    export { addProject };
    export { updateProject };
    export { deleteProject };
    export { createPage };
    export { updatePage };
    export { deletePage };
    export { createEgglement };
    export { updateEgglement };
    export { deleteEgglement };
    export { _toggleAuthorizationStatus };
    export { _addAuthenticatedUser };
    export { _removeAuthenticatedUser };
    export { _toggleLoadingStatus };
    export { _toggleBlockLoadingStatus };
    export { _toggleHasChanges };
    export { _toggleIsSyncing };
    export { _toggleCanRedo };
    export { _toggleCanUndo };
    export { _togglePageDialog };
    export { _updateEditorZoom };
    export { _changeActivePage };
    export { _rebaseActivePage };
    export { _clearSelectedElements };
    export { _addSelectedElements };
    export { _addSelectedElement };
    export { _removeSelectedElement };
    export { _saveComponentRef };
    export { _updateComponentRef };
    export { _removeComponentRef };
}
