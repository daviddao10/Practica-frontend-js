import {buildAddsView,buildAddsListSpinner} from "./view-adds"
import { getAdds } from "./add-list-provide"
import { pubSub } from "../pubSub"


export class AddsListController{
    constructor(element){
        this.addsConteinerElement= element


        // function 

    }

    async loadadds(){
        this.addsConteinerElement.innerHTML=buildAddsListSpinner()
        let adds = []
        
        try {
           adds= await getAdds()
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error cargando de adds')
        }
    }

    drawAdds(adds) {
        for (const add of adds) {
          const articleElement = document.createElement('article');
        
          articleElement.innerHTML = buildAddsView(tweet)
    
          this.tweetsContainerElement.appendChild(articleElement);
        }
    }
}