import { sparrestApi } from "../SparrestApi.js";
export async function getAdds (){
    const endpoint = `${sparrestApi.endpoints.adds}?_expamd=user`
    const tweets = await sparrestApi.get(endpoint)

    return tweets;
  
}