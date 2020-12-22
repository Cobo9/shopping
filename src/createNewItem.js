import Article from "./Article"
import {idGenerator, lists} from "./variables"
import renderList from "./renderList"
import Storage from "./Storage"
import {name, number, amount, weight, article, } from "./domelements"

function createNewItem(){
    const item = new Article(name.value, number.value, amount.checked, weight.checked, article.value, idGenerator);
    idGenerator++;
    switch (item.article) {
  
      case 'vegetables':
        lists.vegetables.push(item);
        break;
  
      case 'fruit':
        lists.fruit.push(item);
        break;
  
      case 'dairy':
        lists.dairy.push(item);
        break;
  
      case 'bread':
        lists.bread.push(item);
        break;
  
      case 'hygienics':
        lists.hygienics.push(item);
        break;
        
      default:
    }
    Storage.saveProducts(lists);
    renderList();
  }

  export default createNewItem