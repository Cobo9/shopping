import {lists} from "./variables"
import Storage from "./Storage"
import renderList from "./renderList"

function deleteItem (){
    //first we need to get the article of the item being deleted
    const article = this.dataset.article;
  
    //We create a deep copy of the original list. It's better to do that to avoid breaking the original array.
    let tempList = JSON.parse(JSON.stringify(lists));
  
    //Then we select the particular array from which we want to delete the item by using [article].
    //This way we filter only the relevant array, not all of them.
  
    
    let filteredList= tempList[article].filter(item =>item.id != this.dataset.key);
  
    //here we replace the original array with the modified array.
    tempList[article] = filteredList;
  
    //here we replace the original list object with the modified object.
    lists = tempList;
    //here we update the local storage
    Storage.saveProducts(lists);
  
    //As the list object is already modified we can rerender the whole listContainer
    renderList();
  }

  export default deleteItem