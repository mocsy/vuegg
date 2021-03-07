export default auth;
declare namespace auth {
    export { authorizeUser };
    export { getAuthenticatedUser };
}
/**
 * Displays the login with GitHub screen to the user (as a popup or new tab),
 * if everything ok, closes the login screen and retrieves an authentication token for the logged user.
 *
 * If something goes wrong in the process returns false.
 *
 * @return {string|false} : Returns the authentication token or false if something goes wrong
 */
declare function authorizeUser(): string | false;
/**
 * Retrieves the current authenticated user info
 *
 * @param {string} token : Authentication token for the logged user
 * @return {object} Authenticated user
 */
declare function getAuthenticatedUser(token: string): object;
