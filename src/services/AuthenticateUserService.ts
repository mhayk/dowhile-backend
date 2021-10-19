import axios from 'axios'
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
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                accept: "application/json"
            }
        });

        return response.data;
    }
}

export { AuthenticateUserService };