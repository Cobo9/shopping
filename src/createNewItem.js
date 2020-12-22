import Article from "./Article"
import {idGenerator, lists} from "./variables"
import renderList from "./renderList"
import Storage from "./Storage"
import {name, number, amount, weight, article, } from "./domelements"

function createNewItem(){
    const item = new Article(name.value, number.value, amount.checked, weight.checked, article.value, idGenerator);
    idGenerator++;
    switch (item.article) {
  
      case 'warzywa':
        lists.vegetables.push(item);
        break;
  
      case 'owoce':
        lists.fruit.push(item);
        break;
  
      case 'nabiał':
        lists.dairy.push(item);
        break;
  
      case 'pieczywo':
        lists.bread.push(item);
        break;
  
      case 'higiena':
        lists.hygienics.push(item);
        break;
        
      default:
    }
    Storage.saveProducts(lists);
    renderList();
  }

  export default createNewItem