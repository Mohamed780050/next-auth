/**
 * this is for users that are not signed in
 */
export const publicRoutes = ["/","/error"];
/**
 * these route will be redirected to when user is not registered 
 * @type {string[]}
 */
export const privateRoutes = ["/auth/login", "/auth/register"];
/**
 * this route should be allowed to every user either he is registered and signed in or not
 */
export const apiAuthPrefix = "/api/auth"
export const DEFAULT_LOGIN_REDIRECT = "/settings"
