import { AddsListController } from "./tweets/controletorAdd.js"

document.addEventListener('DOMContentLoaded',()=>{
    const addListElement = document.querySelector('#add-list')

    const addsListController= new AddsListController(addListElement)
})