import {lists} from "./variables"
import Storage from "./Storage"

function editItem (){
    //first we need to find the inputs with the selected datakey in the array, so we filter the list. We will have
    // inputs, one for item.name, second for item.number
    const liInputs = [...document.querySelectorAll('.li__input')];
    const selected = liInputs.filter(liInput=> liInput.dataset.key == this.dataset.key);

    // here we create a deep copy of the lists object so that we avoid working on the reference

    let tempList = JSON.parse(JSON.stringify(lists));

    //here we need to get all the keys from tempList. I also tried for..in loop here, but webpack doesn't want to parse
    //for...in loops

    let arrOfKeys = Object.keys(tempList);

    //now that we have the keys we can search for the particular elements
    arrOfKeys.forEach(property => {
      //now we want to find the actual array in the tempList
      if(this.dataset.article == property){
        //as we find the array, we want to find the particular item
        const element = tempList[property].find(item =>item.id == this.dataset.key);

        //we take the two inputs we selected earlier and check if they are disabled, if yes, then after click we set them to false
       selected.forEach((item, index)=> {
        if(item.disabled === true){
          item.disabled = false;
          ///here if the input is not disabled we disable it and update the elements in the array
        }else if (item.disabled === false){
          item.disabled =true;
          if(index === 0){
            // here we update the name of the element, this is why we needed the index
            element.name = selected[0].value;
          }else if(index === 1){
            // here we update the number of the element, this is why we needed the index
            element.number = selected[1].value;
          }
        }
      })
      }
    })
    //we replace the original lists with our newly created tempList
    lists = tempList;
    //we overwrite the lists object in the local storage
    Storage.saveProducts(lists);
  }


  export default editItem