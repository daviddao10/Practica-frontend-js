import {NotificationController } from "../notification/noticationControler.js"
import { SignupControler } from "./signupControler.js"

document.addEventListener("DOMContentLoaded",()=>{
    const noticificationElement = document.querySelector('.notification')
    const formElement = document.querySelector('.create-user-form')


    const notificationController = new NotificationController(noticificationElement)
    const signupControler = new SignupControler(formElement)
})
