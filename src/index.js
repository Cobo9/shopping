import {form} from "./domelements"
import renderList from "./renderList" 
import createNewItem from "./createNewItem" 



form.addEventListener('submit',submitForm );
function submitForm(e) {
  e.preventDefault();
  createNewItem();
}

//create new item function


//render function 



//edit function



//update count function



//update numbers function














document.addEventListener('DOMContentLoaded', ()=>{
  renderList();
})

//Storage methods