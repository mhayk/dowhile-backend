import axios from 'axios'
/**
 * Receive code(string)
 * Recover the access_token from github
 * Recover user data from github
 * verify if the user is already in the database
 * -- if yes, create a user token
 * -- if not, create a new user, then create a user token
 * Return the user token with the user data
 */

interface IAccessTokenResponse {
    access_token: string
}

interface IUserResponse {
    avater_url: string,
    login: string,
    id: number,
    name: string
}

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                accept: "application/json"
            }
        });

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })

        return response.data

    }
}

export { AuthenticateUserService };