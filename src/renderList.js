import {listsContainer, totalWeight, totalAmount} from "./domelements"
import {totalNumber, lists} from "./variables"
import Storage from "./Storage"
import updateCount from "./updateCount"
import updateNumbers from "./updateNumbers"
import deleteItem from "./deleteItem"
import editItem from "./editItem"

function renderList(){
    listsContainer.innerHTML ='';
    totalNumber = 0;
  
    let products = Storage.getProduct() || lists;
  
    lists = products;
    let amountCounter = [];
    let weightCounter = [];
  
    let arrOfKeys = Object.keys(products);
  
    arrOfKeys.forEach(property => {
        //here we check which properties have items at all because we don't want to render a list if it's empty
        if(products[property].length!=0){
          let listItem = ``;
  
          products[property].forEach((item)=>{
  
  
            listItem+=`<li>
                        <input class='li__input' type='text' value='${item.name}' data-key=${item.id} disabled/>
                        <input class='li__input' type='number' value=${item.number} data-key=${item.id} disabled/>
                        <span>${item.amount? 'szt.' : 'kg'}</span>
                        <button class='editBtn' data-key=${item.id} data-article=${item.article}>Edytuj</button>
                        <button class='deleteBtn' data-key=${item.id} data-article=${item.article}>X</button>
                        </li>`;
  
  
            if(item.amount){
              amountCounter.push(Number(item.number));
  
            }else if (item.weight){
              weightCounter.push(Number(item.number));
            }
  
          })
  
          let list = `<div>
                        <h1>${property}</h1> <span>${products[property].length} items in ${property}</span>
                          <ul>
                            ${listItem}
                          </ul>
                      </div>`;
  
            totalNumber+=lists[property].length;
            updateCount();
            listsContainer.innerHTML+=list;
        }
  
      })
  
      updateNumbers(amountCounter,totalAmount);
      updateNumbers(weightCounter,totalWeight);
      
      const deleteButtons = [...document.querySelectorAll('.deleteBtn')];
      deleteButtons.forEach(item=> item.addEventListener('click', deleteItem));
  
      const editButtons = [...document.querySelectorAll('.editBtn')];
      editButtons.forEach(item=> item.addEventListener('click', editItem));
  }

  export default renderList