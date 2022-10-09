import { sparrestApi } from "../SparrestApi.js";

export const createrUserApi = async (userName, password) =>{
    const body = {
        userName:userName,
        password:password
    }
    await sparrestApi.post(sparrestApi.endpoints.signup, body)
}


export const loginApiUser = async (username, password) => {
    const body = {
      username: username,
      password: password
    }
  
    const data = await sparrestApi.post(sparrestApi.endpoints.login, body)
  
    return data.accessToken;
  }
  