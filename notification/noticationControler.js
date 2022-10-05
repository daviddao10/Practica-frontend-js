import { buildNotificationView } from "./notificationView";
import { pubSub } from "../pubSub";


export class notificationController {
    constructor(nodeElement){
        this.notificationElement = nodeElement;

        // fuction
        this.subscribeToEvents()
    }
    
    subscribeToEvents() {
        pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (message) => {
          this.showNotification(message)
        })
      }
    
      showNotification(message) {
        this.notificationElement.innerHTML = buildNotificationView(message);
    
        // ir al dom a por el boton
        const closeButtonElement = this.notificationElement.querySelector('.notification-button-close')
    
        // asignarle un escucheador al evento click
        closeButtonElement.addEventListener('click', () => {
          this.notificationElement.innerHTML = ''
        })
      }
}