import {PubSub} from "../pubSub"
import { createrUserApi, loginApiUser } from "./importSignup"

export class signupControler {
    constructor(nodeElement){
        this.signupControler=nodeElement

        // fuction 
        this.allToEvents()
    }
    
}