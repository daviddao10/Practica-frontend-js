import {PubSub} from "../pubSub.js"
import { createrUserApi, loginApiUser } from "./importSignup.js"

export class SignupControler {
    constructor(nodeElement){
        this.signupControler=nodeElement

        // fuction 
        this.allToEvents()
    }

    allToEvents() {
        this.signupControler.addEventListener('submit', (event) => {
          event.preventDefault() // nos dice si las casillas estan llenas o no 
          this.validatePassword()
        })
    
        const createUserInputElements = Array.from(this.signupControler.querySelectorAll('input'))
        const createUserButtonElement = this.signupControler.querySelector('#createUserButton')
    
        createUserInputElements.forEach(createUserInputElement => {
          createUserInputElement.addEventListener('input', () => {
            const areInputsFilled = createUserInputElements.every(inputElement => inputElement.value)
            if (areInputsFilled) {
              createUserButtonElement.removeAttribute('disabled')
            } else {
              createUserButtonElement.setAttribute('disabled', '')
            }
          })
        })
      }
    
      validatePassword() {
        const passwordElement = this.signupControler.querySelector('#password')
        const minLength = 6;
        
        if (passwordElement.value.length <= minLength) {
          pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe tener más de ${minLength} caracteres`)
        }
    
        const regExp = new RegExp(/^[a-zA-Z0-9]*$/)
    
        if (regExp.test(passwordElement.value)) {
          // hacemos cosas
          this.createUser()
        } else {
          PubSub.publish(PubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe contener únicamente minúsculas, mayúsculas o números`)
        }
      }
    
      async createUser() {
        const formData = new FormData(this.signupControler);
        const username = formData.get('username')
        const password = formData.get('password')
    
        try {
          await createrUserApi(username, password)
          const jwt = await loginApiUser(username, password)
          localStorage.setItem('token', jwt)
        } catch (error) {
          // la creación de usuario ha fallado
          PubSub.publish(PubSub.TOPICS.NOTIFICATION_ERROR, `no se pudo conectar con el servidor, intente mas tarde.`)
        }
    }
    
    

}