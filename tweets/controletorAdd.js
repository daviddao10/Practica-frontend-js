import { buildAddsView, buildAddsListSpinner, buildEmptyAddList } from "./viewAdds.js"
import { getAdds } from "./add-list-provide.js"
import { pubSub } from "../pubSub.js"


export class AddsListController{
    constructor(element){
        this.addsConteinerElement= element


        // function 
        this.loadadds()
    }

    async loadadds(){
        this.addsConteinerElement.innerHTML=buildAddsListSpinner()
        let adds = []
        
        try {
           adds= await getAdds()
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error cargando de adds')
        }

        this.addsConteinerElement.querySelector('.spinner').classList.toggle('hide')

        this.drawAdds()

    }

    showTweetsNotFound() {
        const divElement = document.createElement('div');
        divElement.innerHTML = buildEmptyAddList()
        this.addsConteinerElement.appendChild(divElement)
      }

    drawAdds(adds) {
        for (const add of adds) {
          const articleElement = document.createElement('article');
        
          articleElement.innerHTML = buildAddsView(add)
    
          this.addsConteinerElement.appendChild(articleElement);
        }
    }
}