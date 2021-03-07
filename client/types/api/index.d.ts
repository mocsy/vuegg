export default api;
declare namespace api {
    export { saveVueggProject };
    export { getVueggProject };
    export { generateVueSources };
}
/**
 * Saves the current vuegg project definition in the specify repository
 *
 * @param  {object} project : Project definition to be saved in the repository (as vue.gg)
 * @param  {string} owner : Repository owner
 * @param  {string} repo : Repository where to save the project definition
 * @param  {string} token : Authentication token
 * @return {object|false} : returns a JSON of the created file of false is something goes wrong
 */
declare function saveVueggProject(project: object, owner: string, repo: string, token: string): object | false;
/**
 * Retrieves the base64 vue.gg project definition from the especified repository.
 *
 * @param  {string} owner : owner of the repository
 * @param  {string} repo : repository to get the vue.gg project definition from
 * @param  {string} [token] : oauth2 token (for access private repos) [unused for now]
 * @return {string} : base64 string of the vue.gg file of the repository
 */
declare function getVueggProject(owner: string, repo: string, token?: string): string;
/**
 * Generated vuejs sources from a vuegg project definition
 *
 * @param  {object} project : current project
 * @return {blob} : A zip file containing the vuejs sources of the passed project
 */
declare function generateVueSources(project: object): any;
