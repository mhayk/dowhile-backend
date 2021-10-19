/**
 * Receive code(string)
 * Recover the access_token from github
 * verify if the user is already in the database
 * -- if yes, create a user token
 * -- if not, create a new user, then create a user token
 * Return the user token with the user data
 */
class AuthenticateUserService {
    async execute(code: string) {

    }
}

export { AuthenticateUserService };